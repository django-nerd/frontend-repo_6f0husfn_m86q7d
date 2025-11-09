import React from 'react';
import { X } from 'lucide-react';
import BackgroundScene from './BackgroundScene';

export default function AuthModal({ open, onClose, mode = 'signin' }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <BackgroundScene mode="solar" />
      <div className="absolute inset-0 bg-neutral-950/60" />

      <div className="relative z-10 w-full max-w-md rounded-xl border border-neutral-800 bg-neutral-900/80 backdrop-blur p-6 text-neutral-100 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold" style={{ fontFamily: 'Defused, Inter, sans-serif' }}>
            {mode === 'signin' ? 'Sign in to Synk' : 'Create your Synk account'}
          </h3>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-neutral-800">
            <X size={18} />
          </button>
        </div>
        <form className="space-y-3">
          {mode === 'signup' && (
            <div className="space-y-1">
              <label className="text-sm text-neutral-300">Username</label>
              <input type="text" className="w-full rounded-md bg-neutral-950 border border-neutral-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-700" placeholder="sk8r_mars" />
            </div>
          )}
          <div className="space-y-1">
            <label className="text-sm text-neutral-300">Email</label>
            <input type="email" className="w-full rounded-md bg-neutral-950 border border-neutral-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-700" placeholder="you@space.com" />
          </div>
          <div className="space-y-1">
            <label className="text-sm text-neutral-300">Password</label>
            <input type="password" className="w-full rounded-md bg-neutral-950 border border-neutral-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-700" placeholder="••••••••" />
          </div>
          <button type="button" className="w-full py-2 rounded-md bg-red-800 hover:bg-red-700 transition-colors border border-red-900">{mode === 'signin' ? 'Sign In' : 'Sign Up'}</button>
          <p className="text-xs text-neutral-400 text-center">
            By continuing you agree to Un1xpected’s terms.
          </p>
        </form>
      </div>
    </div>
  );
}
