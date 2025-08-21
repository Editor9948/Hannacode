import React, { useState, useEffect } from 'react';
import { safeCopy } from '../../lib/utils';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Award, Download, Share2, CheckCircle, Calendar, BookOpen } from 'lucide-react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';

export default function CertificatePage() {
  const { certificateId } = useParams();
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/progress/certificates/${certificateId}`);
        
        if (!response.ok) {
          throw new Error('Certificate not found');
        }

        const data = await response.json();
        if (data.success) {
          setCertificate(data.data);
        } else {
          throw new Error(data.message || 'Failed to load certificate');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (certificateId) {
      fetchCertificate();
    }
  }, [certificateId]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${certificate.user.name}'s Certificate`,
        text: `Check out this certificate for completing ${certificate.course.title}`,
        url: window.location.href,
      });
    } else {
  safeCopy(window.location.href).then(ok=>alert(ok?'Certificate link copied to clipboard!':'Copy failed'));
    }
  };

  const handleDownload = () => {
    // This would typically generate a PDF certificate
    // For now, we'll just print the page
    window.print();
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8 text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading certificate...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8 text-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
          <h1 className="text-xl font-bold text-red-800 mb-2">Certificate Not Found</h1>
          <p className="text-red-600">{error}</p>
          <Link to="/" className="mt-4 inline-block text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Actions Bar */}
          <div className="flex justify-between items-center mb-4">
            <Link to="/dashboard" className="text-green-600 hover:underline">
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

          {/* Certificate */}
          <Card className="bg-white shadow-xl border-4 border-green-200 print:shadow-none">
            <CardHeader className="text-center py-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <div className="flex justify-center mb-3">
                <Award className="h-12 w-12" />
              </div>
              <CardTitle className="text-2xl font-bold">Certificate of Completion</CardTitle>
              <p className="text-green-100 mt-1">HannaCode Learning Platform</p>
            </CardHeader>

            <CardContent className="p-6">
              <div className="text-center mb-6">
                <p className="text-base text-gray-600 mb-3">This is to certify that</p>
                <h1 className="text-3xl font-bold text-gray-800 mb-3">{certificate.user.name}</h1>
                <p className="text-base text-gray-600 mb-3">has successfully completed the course</p>
                <h2 className="text-xl font-semibold text-green-600 mb-4">{certificate.course.title}</h2>
              </div>

              {/* Course Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <BookOpen className="h-6 w-6 mx-auto mb-2 text-green-500" />
                  <p className="font-semibold text-sm">Category</p>
                  <p className="text-gray-600 text-sm">{certificate.course.category}</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-6 w-6 mx-auto mb-2 text-emerald-500" />
                  <p className="font-semibold text-sm">Grade</p>
                  <Badge variant="secondary" className="text-base px-2 py-1 bg-green-100 text-green-800">
                    {certificate.grade}
                  </Badge>
                </div>
                <div className="text-center">
                  <Calendar className="h-6 w-6 mx-auto mb-2 text-teal-500" />
                  <p className="font-semibold text-sm">Completed</p>
                  <p className="text-gray-600 text-sm">
                    {new Date(certificate.issuedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              {certificate.metadata && (
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold mb-3 text-center text-green-800">Course Details</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div>
                      <p className="font-medium text-green-700">Total Lessons</p>
                      <p className="text-gray-600">{certificate.metadata.totalLessons}</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-700">Completion Time</p>
                      <p className="text-gray-600">{certificate.metadata.completionTime} days</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-700">Average Score</p>
                      <p className="text-gray-600">{certificate.metadata.averageQuizScore}%</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-700">Course Duration</p>
                      <p className="text-gray-600">{certificate.metadata.courseDuration}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Certificate ID and Verification */}
              <div className="border-t border-green-200 pt-4 text-center">
                <p className="text-sm text-gray-500 mb-1">Certificate ID: {certificate.certificateId}</p>
                <p className="text-sm text-gray-500 mb-3">
                  Verification Code: {certificate.verificationCode}
                </p>
                <p className="text-xs text-gray-400">
                  This certificate can be verified at hannacode.com/verify-certificate/{certificate.verificationCode}
                </p>
              </div>

              {/* Digital Signature */}
              <div className="mt-6 pt-4 border-t border-green-200 text-center">
                <div className="inline-block">
                  <div className="border-b-2 border-green-400 pb-2 mb-2 px-6">
                    <p className="font-semibold text-green-700">HannaCode Team</p>
                  </div>
                  <p className="text-sm text-gray-600">Digital Signature</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Verification Notice */}
          <div className="mt-4 text-center text-sm text-gray-500">
            <p>
              This is a digitally issued certificate. 
              <Link 
                to={`/verify-certificate/${certificate.verificationCode}`}
                className="text-green-600 hover:underline ml-1"
              >
                Verify authenticity here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
