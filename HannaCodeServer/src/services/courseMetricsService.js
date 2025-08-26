const mongoose = require('mongoose');
const { broadcast } = require('./sseService');

async function computeCourseMetrics(courseId) {
  try {
    const CourseModel = mongoose.model('Course');
    const ReviewModel = mongoose.model('Review');

    const id = mongoose.Types.ObjectId.isValid(courseId) ? new mongoose.Types.ObjectId(courseId) : null;
    if (!id) {
      return { courseId: String(courseId), enrolledStudents: 0, rating: 0, reviews: 0 };
    }

    const [course, reviewAgg] = await Promise.all([
      CourseModel.findById(id).select('enrolledStudents rating'),
      ReviewModel.aggregate([
        { $match: { course: id } },
        { $group: { _id: '$course', avgRating: { $avg: '$rating' }, count: { $sum: 1 } } },
      ])
    ]);

  const reviews = reviewAgg[0]?.count || 0;
  const avgRating = reviewAgg[0]?.avgRating ? Number(reviewAgg[0].avgRating.toFixed(1)) : (course?.rating || 0);
  return {
    courseId: String(courseId),
    enrolledStudents: course?.enrolledStudents || 0,
    rating: avgRating,
    reviews,
  };
  } catch (e) {
    return { courseId: String(courseId), enrolledStudents: 0, rating: 0, reviews: 0 };
  }
}

async function pushCourseMetrics(courseId) {
  try {
    const metrics = await computeCourseMetrics(courseId);
    broadcast(String(courseId), 'metrics', metrics);
  } catch (e) {
    // silent fail
  }
}

module.exports = { computeCourseMetrics, pushCourseMetrics };
