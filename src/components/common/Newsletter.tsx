'use client';

import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // Newsletter Logic hier implementieren
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Werde Teil der Überraschungs-Community!</h2>
          <p className="text-xl mb-8 opacity-90">
            Erhalte exklusive Angebote und Sneak Peeks.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Deine E-Mail Adresse"
                className="flex-grow px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 disabled:opacity-50"
              >
                {status === 'loading' ? 'Wird gesendet...' : 'Anmelden'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 