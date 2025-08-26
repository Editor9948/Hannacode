const mongoose = require('mongoose');
const Review = require('../models/Review');
const Course = require('../models/Course');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

// GET /api/v1/courses/:courseId/reviews - public list
exports.getCourseReviews = asyncHandler(async (req, res, next) => {
  const { courseId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(courseId)) {
    return next(new ErrorResponse('Invalid course id', 400));
  }

  const reviews = await Review.find({ course: courseId })
    .populate('user', 'name profileImage')
    .sort({ createdAt: -1 });

  res.status(200).json({ success: true, count: reviews.length, data: reviews });
});

// POST /api/v1/courses/:courseId/reviews - auth required (free or premium)
exports.createReview = asyncHandler(async (req, res, next) => {
  const { courseId } = req.params;
  const { rating, title, comment } = req.body || {};

  if (!mongoose.Types.ObjectId.isValid(courseId)) {
    return next(new ErrorResponse('Invalid course id', 400));
  }
  if (!rating || rating < 1 || rating > 5) {
    return next(new ErrorResponse('Rating must be between 1 and 5', 400));
  }
  if (!title || !comment) {
    return next(new ErrorResponse('Title and comment are required', 400));
  }

  const course = await Course.findById(courseId).select('_id isPublished');
  if (!course) return next(new ErrorResponse('Course not found', 404));

  // Enforce one review per user per course (model also enforces unique index)
  const exists = await Review.findOne({ user: req.user.id, course: courseId });
  if (exists) {
    return next(new ErrorResponse('You have already reviewed this course', 400));
  }

  const review = await Review.create({
    user: req.user.id,
    course: courseId,
    rating,
    title,
    comment,
    isVerified: false,
  });

  res.status(201).json({ success: true, data: review });
});

// PUT /api/v1/courses/:courseId/reviews/:reviewId - owner or admin/mentor
exports.updateReview = asyncHandler(async (req, res, next) => {
  const { courseId, reviewId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(courseId) || !mongoose.Types.ObjectId.isValid(reviewId)) {
    return next(new ErrorResponse('Invalid id', 400));
  }

  const review = await Review.findOne({ _id: reviewId, course: courseId });
  if (!review) return next(new ErrorResponse('Review not found', 404));

  const isOwner = review.user.toString() === req.user.id;
  const isPrivileged = req.user.role === 'admin' || req.user.role === 'mentor';
  if (!isOwner && !isPrivileged) {
    return next(new ErrorResponse('Not authorized to update this review', 403));
  }

  const updates = {};
  if (typeof req.body.rating !== 'undefined') {
    const r = Number(req.body.rating);
    if (Number.isNaN(r) || r < 1 || r > 5) return next(new ErrorResponse('Rating must be between 1 and 5', 400));
    updates.rating = r;
  }
  if (typeof req.body.title === 'string') updates.title = req.body.title;
  if (typeof req.body.comment === 'string') updates.comment = req.body.comment;

  const updated = await Review.findByIdAndUpdate(review._id, updates, { new: true });
  res.status(200).json({ success: true, data: updated });
});

// DELETE /api/v1/courses/:courseId/reviews/:reviewId - owner or admin/mentor
exports.deleteReview = asyncHandler(async (req, res, next) => {
  const { courseId, reviewId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(courseId) || !mongoose.Types.ObjectId.isValid(reviewId)) {
    return next(new ErrorResponse('Invalid id', 400));
  }
  const review = await Review.findOne({ _id: reviewId, course: courseId });
  if (!review) return next(new ErrorResponse('Review not found', 404));

  const isOwner = review.user.toString() === req.user.id;
  const isPrivileged = req.user.role === 'admin' || req.user.role === 'mentor';
  if (!isOwner && !isPrivileged) {
    return next(new ErrorResponse('Not authorized to delete this review', 403));
  }

  await review.deleteOne();
  res.status(200).json({ success: true, data: {} });
});
