import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function ResetPassword() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Återställ lösenord
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ange din e-postadress så skickar vi instruktioner för återställning.
          </p>
        </div>

        {status === 'success' ? (
          <div className="rounded-md bg-green-50 p-4">
            <p className="text-sm text-green-700">
              Vi har skickat instruktioner till din e-post.
            </p>
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {status === 'error' && (
              <div className="rounded-md bg-red-50 p-4">
                <p className="text-sm text-red-700">
                  Något gick fel. Försök igen.
                </p>
              </div>
            )}
            
            <div>
              <label htmlFor="email" className="sr-only">E-postadress</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="E-postadress"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Skicka instruktioner
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}