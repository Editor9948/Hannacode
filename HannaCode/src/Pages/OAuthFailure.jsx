import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function OAuthFailure() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const reason = params.get('reason');

  const messageMap = {
    state: 'Security check failed (invalid state). Please try again.',
    server: 'Unexpected server error during OAuth flow. Try again later.'
  };

  const msg = messageMap[reason] || 'OAuth sign-in was cancelled or failed.';

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center p-6 max-w-sm">
        <h1 className="text-xl font-semibold mb-4">Sign-in Failed</h1>
        <p className="text-sm text-muted-foreground mb-6">{msg}</p>
        <div className="space-x-3">
          <button onClick={() => navigate('/register')} className="px-4 py-2 rounded bg-primary text-white">Try Again</button>
          <button onClick={() => navigate('/login')} className="px-4 py-2 rounded border">Login</button>
        </div>
      </div>
    </div>
  );
}
