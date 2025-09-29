import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

export default function OAuthSuccess() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('exchanging');

  useEffect(() => {
    const code = params.get('code');
    const provider = params.get('provider');
    if (!code) {
      setError('Missing code');
      setStatus('error');
      return;
    }
    (async () => {
      try {
        const res = await fetch(`${API_URL}/auth/oauth/exchange?code=${encodeURIComponent(code)}`, {
          credentials: 'include'
        });
        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.message || 'Exchange failed');
        }
        // Store token if present (optional if using httpOnly cookie only)
        if (data.token) {
          localStorage.setItem('token', data.token);
        }
        if (data.user) {
          // Remove any stale user (e.g., previous admin session lingering)
          try { localStorage.removeItem('user'); } catch(_) {}
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        setStatus('success');
        setTimeout(() => navigate('/dashboard'), 600);
      } catch (e) {
        setError(e.message);
        setStatus('error');
      }
    })();
  }, [params, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center p-6 max-w-sm">
        {status === 'exchanging' && <p className="text-lg font-medium">Completing sign in...</p>}
        {status === 'success' && <p className="text-lg font-medium text-green-600">Signed in! Redirecting...</p>}
        {status === 'error' && (
          <div>
            <p className="text-red-600 font-medium mb-2">OAuth Sign-in failed</p>
            <p className="text-sm text-muted-foreground mb-4">{error}</p>
            <button onClick={() => navigate('/register')} className="px-4 py-2 rounded bg-primary text-white">Back</button>
          </div>
        )}
      </div>
    </div>
  );
}
