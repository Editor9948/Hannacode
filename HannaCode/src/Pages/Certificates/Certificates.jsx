import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Award, Calendar, Eye, Share2, BookOpen } from 'lucide-react';
import Layout from '../../components/Layout';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        
        if (!token) {
          throw new Error('Please log in to view your certificates');
        }

        const response = await fetch(`${API_URL}/progress/certificates`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch certificates');
        }

        const data = await response.json();
        if (data.success) {
          setCertificates(data.data);
        } else {
          throw new Error(data.message || 'Failed to load certificates');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  const handleShare = (certificate) => {
    const certificateUrl = `${window.location.origin}/certificate/${certificate.certificateId}`;
    
    if (navigator.share) {
      navigator.share({
        title: `${certificate.user.name}'s Certificate`,
        text: `Check out this certificate for completing ${certificate.course.title}`,
        url: certificateUrl,
      });
    } else {
      navigator.clipboard.writeText(certificateUrl);
      alert('Certificate link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto py-8 text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your certificates...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      
        <div className="container mx-auto py-8 text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
            <h1 className="text-xl font-bold text-red-800 mb-2">Error Loading Certificates</h1>
            <p className="text-red-600">{error}</p>
            <Link to="/dashboard" className="mt-4 inline-block text-primary hover:underline">
              Return to Dashboard
            </Link>
          </div>
        </div>
      
    );
  }

  return (
    
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">My Certificates</h1>
            <p className="text-gray-600">Your achievements and completed courses</p>
          </div>
          <Link to="/dashboard">
            <Button variant="outline">← Back to Dashboard</Button>
          </Link>
        </div>

        {certificates.length === 0 ? (
          <div className="text-center py-12">
            <Award className="h-24 w-24 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Certificates Yet</h2>
            <p className="text-gray-500 mb-6">
              Complete a course to earn your first certificate!
            </p>
            <Link to="/courses">
              <Button>Browse Courses</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate) => (
              <Card key={certificate._id} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <div className="flex items-center justify-between">
                    <Award className="h-6 w-6" />
                    <Badge variant="secondary" className="bg-white text-purple-600">
                      {certificate.grade}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{certificate.course.title}</CardTitle>
                  <p className="text-blue-100 text-sm">{certificate.course.category}</p>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      Completed on {new Date(certificate.issuedAt).toLocaleDateString()}
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Certificate ID: {certificate.certificateId}
                    </div>

                    {certificate.metadata && (
                      <div className="bg-gray-50 rounded p-3 text-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <p className="font-medium">Lessons:</p>
                            <p className="text-gray-600">{certificate.metadata.totalLessons}</p>
                          </div>
                          <div>
                            <p className="font-medium">Avg Score:</p>
                            <p className="text-gray-600">{certificate.metadata.averageQuizScore}%</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-2 pt-4">
                      <Link to={`/certificate/${certificate.certificateId}`} className="flex-1">
                        <Button size="sm" className="w-full">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                      </Link>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleShare(certificate)}
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {certificates.length > 0 && (
          <div className="mt-12 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                🎉 Congratulations on your achievements!
              </h3>
              <p className="text-blue-700 mb-4">
                You've earned {certificates.length} certificate{certificates.length !== 1 ? 's' : ''}. 
                Keep learning to unlock more!
              </p>
              <Link to="/courses">
                <Button>Explore More Courses</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    
  );
}
