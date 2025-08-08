import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Alert, AlertDescription } from '../components/ui/alert';
import { useToast } from '../hooks/useToast';
import { Calendar, ExternalLink, Save, Check } from 'lucide-react';

const API_URL = process.env.REACT_APP_API_URL;

const CalendlySettings = ({ mentorId, currentUrl, onUpdate }) => {
  const [calendlyUrl, setCalendlyUrl] = useState(currentUrl || '');
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    setCalendlyUrl(currentUrl || '');
  }, [currentUrl]);

  const validateCalendlyUrl = (url) => {
    if (!url) return true; // Empty is valid
    return /^https:\/\/calendly\.com\//.test(url);
  };

  const handleUrlChange = (e) => {
    const url = e.target.value;
    setCalendlyUrl(url);
    setIsValid(validateCalendlyUrl(url));
  };

  const handleSave = async () => {
    if (!isValid) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid Calendly URL.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/mentorship/mentors/${mentorId}/calendly`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ calendlyUrl }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your Calendly URL has been updated.",
        });
        onUpdate?.(calendlyUrl);
      } else {
        throw new Error(data.message || 'Failed to update Calendly URL');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const testCalendlyUrl = () => {
    if (calendlyUrl && isValid) {
      window.open(calendlyUrl, '_blank');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Calendly Integration
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="calendly-url">Calendly Booking URL</Label>
          <div className="flex gap-2">
            <Input
              id="calendly-url"
              type="url"
              placeholder="https://calendly.com/your-username"
              value={calendlyUrl}
              onChange={handleUrlChange}
              className={!isValid ? 'border-red-500' : ''}
            />
            {calendlyUrl && isValid && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={testCalendlyUrl}
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
          </div>
          {!isValid && (
            <p className="text-sm text-red-600">
              Please enter a valid Calendly URL (must start with https://calendly.com/)
            </p>
          )}
        </div>

        <Alert>
          <Calendar className="h-4 w-4" />
          <AlertDescription>
            Students will use this Calendly link to book mentorship sessions with you. Make sure your Calendly account is set up with your preferred meeting times and video conferencing settings.
          </AlertDescription>
        </Alert>

        <div className="space-y-3">
          <h4 className="font-medium">How to set up your Calendly:</h4>
          <ol className="text-sm space-y-1 text-gray-600">
            <li>1. Create a free account at <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">calendly.com</a></li>
            <li>2. Set up an event type for mentorship sessions (30-60 minutes)</li>
            <li>3. Configure your availability and meeting preferences</li>
            <li>4. Copy your booking page URL and paste it above</li>
          </ol>
        </div>

        <div className="flex gap-2 pt-4">
          <Button
            onClick={handleSave}
            disabled={isLoading || !isValid}
            className="flex items-center gap-2"
          >
            {isLoading ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : currentUrl === calendlyUrl ? (
              <Check className="h-4 w-4" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            {currentUrl === calendlyUrl ? 'Saved' : 'Save Changes'}
          </Button>
          
          {calendlyUrl && calendlyUrl !== currentUrl && (
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setCalendlyUrl(currentUrl || '');
                setIsValid(true);
              }}
            >
              Reset
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendlySettings;
