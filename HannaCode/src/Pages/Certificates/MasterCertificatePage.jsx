import React, { useState, useEffect } from 'react';
import { safeCopy } from '../../lib/utils';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Download, Share2, CheckCircle, Calendar, Star, Trophy, Zap, BookOpen } from 'lucide-react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';

export default function MasterCertificatePage() {
  const { certificateId } = useParams();
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMasterCertificate = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/progress/master-certificate/${certificateId}`);
        
        if (!response.ok) {
          throw new Error('Master certificate not found');
        }

        const data = await response.json();
        if (data.success) {
          setCertificate(data.data);
        } else {
          throw new Error(data.message || 'Failed to load master certificate');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (certificateId) {
      fetchMasterCertificate();
    }
  }, [certificateId]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${certificate.user.name}'s Master Certificate`,
        text: `Check out this Master Certificate from HannaCode Learning Platform`,
        url: window.location.href,
      });
    } else {
  safeCopy(window.location.href).then(ok=>alert(ok?'Master certificate link copied to clipboard!':'Copy failed'));
    }
  };

  const handleDownload = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8 text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading master certificate...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8 text-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
          <h1 className="text-xl font-bold text-red-800 mb-2">Master Certificate Not Found</h1>
          <p className="text-red-600">{error}</p>
          <Link to="/" className="mt-4 inline-block text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Actions Bar */}
          <div className="flex justify-between items-center mb-6">
            <Link to="/dashboard" className="text-primary hover:underline">
              ← Back to Dashboard
            </Link>
            <div className="flex gap-2">
              <Button onClick={handleShare} variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button onClick={handleDownload} variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>

          {/* Master Certificate */}
          <Card className="bg-white shadow-2xl border-4 border-purple-500 print:shadow-none relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 text-yellow-300 opacity-20">
              <Star className="h-16 w-16" />
            </div>
            <div className="absolute top-4 right-4 text-green-300 opacity-20">
              <Star className="h-12 w-12" />
            </div>
            <div className="absolute bottom-4 left-4 text-emerald-300 opacity-20">
              <Trophy className="h-10 w-10" />
            </div>
            <div className="absolute bottom-4 right-4 text-green-300 opacity-20">
              <Trophy className="h-10 w-10" />
            </div>

            <CardHeader className="text-center py-8 bg-gradient-to-r from-green-600 via-emerald-700 to-teal-600 text-white relative">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Trophy className="h-16 w-16 text-yellow-300" />
                  <div className="absolute -top-2 -right-2">
                    <Star className="h-6 w-6 text-yellow-200" />
                  </div>
                </div>
              </div>
              <CardTitle className="text-3xl font-bold mb-2">MASTER CERTIFICATE</CardTitle>
              <p className="text-lg text-green-100 mb-2">Full Stack Development Program</p>
              <p className="text-green-200">HannaCode Learning Platform</p>
              <Badge className="mt-3 bg-yellow-500 text-black font-bold px-3 py-1 text-base">
                PROGRAM COMPLETION
              </Badge>
            </CardHeader>

            <CardContent className="p-8">
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600 mb-4">This is to certify that</p>
                <h1 className="text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {certificate.user.name}
                </h1>
                <p className="text-lg text-gray-600 mb-4">has successfully completed the comprehensive</p>
                <h2 className="text-2xl font-semibold text-green-600 mb-6">
                  {certificate.programName}
                </h2>
                <p className="text-base text-gray-600">
                  demonstrating mastery across all {certificate.totalCoursesCompleted} courses
                </p>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center bg-green-50 rounded-lg p-4">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <p className="font-semibold text-gray-800 text-sm">Courses Completed</p>
                  <p className="text-xl font-bold text-green-600">{certificate.totalCoursesCompleted}</p>
                </div>
                <div className="text-center bg-emerald-50 rounded-lg p-4">
                  <CheckCircle className="h-10 w-10 mx-auto mb-3 text-green-600" />
                  <p className="font-semibold text-gray-800">Overall Grade</p>
                  <Badge variant="secondary" className="text-xl px-4 py-2 bg-green-100 text-green-800">
                    {certificate.overallGrade}
                  </Badge>
                </div>
                <div className="text-center bg-blue-50 rounded-lg p-6">
                  <Zap className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                  <p className="font-semibold text-gray-800">Average Score</p>
                  <p className="text-2xl font-bold text-blue-600">{certificate.averageScore}%</p>
                </div>
                <div className="text-center bg-yellow-50 rounded-lg p-6">
                  <Calendar className="h-10 w-10 mx-auto mb-3 text-yellow-600" />
                  <p className="font-semibold text-gray-800">Study Duration</p>
                  <p className="text-xl font-bold text-yellow-600">{certificate.studyDuration.totalDays} days</p>
                </div>
              </div>

              {/* Skills Acquired */}
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Skills Mastered</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {certificate.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-lg px-4 py-2 bg-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              {certificate.achievements && certificate.achievements.length > 0 && (
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 mb-8">
                  <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Special Achievements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificate.achievements.map((achievement, index) => (
                      <div key={index} className="text-center">
                        <div className="flex justify-center mb-2">
                          <Trophy className="h-8 w-8 text-yellow-600" />
                        </div>
                        <h4 className="font-bold text-gray-800 mb-1">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Course Breakdown */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Completed Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certificate.completedCourses.slice(0, 6).map((courseData, index) => (
                    <div key={index} className="bg-white rounded-lg border p-4 text-center">
                      <CheckCircle className="h-6 w-6 mx-auto mb-2 text-green-500" />
                      <p className="font-medium text-sm text-gray-800">{courseData.course.title}</p>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {courseData.grade}
                      </Badge>
                    </div>
                  ))}
                  {certificate.completedCourses.length > 6 && (
                    <div className="bg-gray-100 rounded-lg border p-4 text-center flex items-center justify-center">
                      <p className="text-gray-600 font-medium">
                        +{certificate.completedCourses.length - 6} more courses
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Certificate Details */}
              <div className="border-t pt-8 text-center">
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-blue-800 mb-4">Master Certificate Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-700">
                    <div>
                      <p className="font-medium">Certificate ID</p>
                      <p className="font-mono">{certificate.certificateId}</p>
                    </div>
                    <div>
                      <p className="font-medium">Verification Code</p>
                      <p className="font-mono">{certificate.verificationCode}</p>
                    </div>
                    <div>
                      <p className="font-medium">Issued Date</p>
                      <p>{new Date(certificate.issuedAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-xs text-gray-400 mb-6">
                  This master certificate can be verified at hannacode.com/verify-master-certificate/{certificate.verificationCode}
                </p>
              </div>

              {/* Digital Signature */}
              <div className="mt-12 pt-8 border-t text-center">
                <div className="inline-block">
                  <div className="border-b-2 border-gray-400 pb-2 mb-2 px-12">
                    <p className="font-bold text-lg">HannaCode Academy</p>
                  </div>
                  <p className="text-sm text-gray-600">Digital Master Certificate</p>
                  <p className="text-xs text-gray-500 mt-2">
                    Authorized by HannaCode Learning Platform
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Verification Notice */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-700 mb-3">🏆 Master Certificate Verification</h3>
              <p className="mb-2">
                This is a digitally issued Master Certificate recognizing completion of our comprehensive Full Stack Development Program.
              </p>
              <Link 
                to={`/verify-master-certificate/${certificate.verificationCode}`}
                className="text-primary hover:underline font-medium"
              >
                Verify authenticity here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
