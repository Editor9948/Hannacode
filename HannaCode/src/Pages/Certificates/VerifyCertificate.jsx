import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { CheckCircle, XCircle, Award, Calendar, BookOpen, User, Shield } from 'lucide-react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';

export default function VerifyCertificate() {
  const { verificationCode } = useParams();
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [manualCode, setManualCode] = useState('');

  useEffect(() => {
    if (verificationCode) {
      verifyCertificate(verificationCode);
    } else {
      setLoading(false);
    }
  }, [verificationCode]);

  const verifyCertificate = async (code) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${API_URL}/progress/verify-certificate/${code}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Certificate not found. Please check the verification code.');
        }
        throw new Error('Failed to verify certificate');
      }

      const data = await response.json();
      if (data.success) {
        setCertificate(data.data);
      } else {
        throw new Error(data.message || 'Certificate verification failed');
      }
    } catch (err) {
      setError(err.message);
      setCertificate(null);
    } finally {
      setLoading(false);
    }
  };

  const handleManualVerification = (e) => {
    e.preventDefault();
    if (manualCode.trim()) {
      verifyCertificate(manualCode.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Shield className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Certificate Verification</h1>
            <p className="text-gray-600">Verify the authenticity of HannaCode certificates</p>
          </div>

          {/* Manual Verification Form */}
          {!verificationCode && !certificate && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Enter Verification Code</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleManualVerification} className="flex gap-4">
                  <input
                    type="text"
                    value={manualCode}
                    onChange={(e) => setManualCode(e.target.value)}
                    placeholder="Enter verification code (e.g., HC-2024-0123-ABCDE)"
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button type="submit" disabled={!manualCode.trim()}>
                    Verify
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Verifying certificate...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <Card className="border-red-200 bg-red-50">
              <CardContent className="text-center py-8">
                <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-red-800 mb-2">Certificate Not Verified</h2>
                <p className="text-red-600 mb-4">{error}</p>
                <div className="space-y-2 text-sm text-red-700">
                  <p>Please ensure:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>The verification code is entered correctly</li>
                    <li>The certificate was issued by HannaCode</li>
                    <li>The certificate has not been revoked</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Verified Certificate */}
          {certificate && (
            <div className="space-y-6">
              {/* Verification Success */}
              <Card className="border-green-200 bg-green-50">
                <CardContent className="text-center py-6">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-green-800 mb-2">✅ Certificate Verified</h2>
                  <p className="text-green-700">This certificate is authentic and valid.</p>
                </CardContent>
              </Card>

              {/* Certificate Details */}
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <div className="flex justify-center mb-4">
                    <Award className="h-12 w-12" />
                  </div>
                  <CardTitle className="text-2xl text-center">Certificate of Completion</CardTitle>
                  <p className="text-center text-blue-100">HannaCode Learning Platform</p>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-4">
                      <User className="h-6 w-6 mr-2 text-gray-600" />
                      <span className="text-lg text-gray-600">Awarded to</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{certificate.user.name}</h1>
                    <p className="text-lg text-gray-600 mb-4">for successfully completing</p>
                    <h2 className="text-2xl font-semibold text-primary mb-6">{certificate.course.title}</h2>
                  </div>

                  {/* Certificate Information Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="text-center">
                      <BookOpen className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                      <p className="font-semibold">Category</p>
                      <p className="text-gray-600">{certificate.course.category}</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-500" />
                      <p className="font-semibold">Grade</p>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        {certificate.grade}
                      </Badge>
                    </div>
                    <div className="text-center">
                      <Calendar className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                      <p className="font-semibold">Issued Date</p>
                      <p className="text-gray-600">
                        {new Date(certificate.issuedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-center">
                      <Shield className="h-8 w-8 mx-auto mb-2 text-indigo-500" />
                      <p className="font-semibold">Status</p>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Verified
                      </Badge>
                    </div>
                  </div>

                  {/* Additional Metadata */}
                  {certificate.metadata && (
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold mb-4 text-center">Course Statistics</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="text-center">
                          <p className="font-medium">Total Lessons</p>
                          <p className="text-gray-600">{certificate.metadata.totalLessons}</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium">Completion Time</p>
                          <p className="text-gray-600">{certificate.metadata.completionTime} days</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium">Average Score</p>
                          <p className="text-gray-600">{certificate.metadata.averageQuizScore}%</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium">Course Duration</p>
                          <p className="text-gray-600">{certificate.metadata.courseDuration}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Verification Details */}
                  <div className="border-t pt-6 text-center">
                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Verification Details</h4>
                      <div className="text-sm text-blue-700 space-y-1">
                        <p><strong>Certificate ID:</strong> {certificate.certificateId}</p>
                        <p><strong>Verification Code:</strong> {certificate.verificationCode}</p>
                        <p><strong>Verified On:</strong> {new Date().toLocaleString()}</p>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-500">
                      This certificate was digitally issued by HannaCode Learning Platform
                      and its authenticity has been verified through our secure verification system.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex justify-center gap-4">
                <Link to={`/certificate/${certificate.certificateId}`}>
                  <Button>View Full Certificate</Button>
                </Link>
                <Link to="/">
                  <Button variant="outline">Visit HannaCode</Button>
                </Link>
              </div>
            </div>
          )}

          {/* Footer Info */}
          <div className="mt-12 text-center text-sm text-gray-500">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-700 mb-3">About Certificate Verification</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div>
                  <h4 className="font-medium text-gray-800">🔒 Secure</h4>
                  <p>Each certificate has a unique verification code that cannot be forged.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">⚡ Instant</h4>
                  <p>Verification happens in real-time using our secure database.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">🌐 Public</h4>
                  <p>Anyone can verify a certificate using the verification code.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
