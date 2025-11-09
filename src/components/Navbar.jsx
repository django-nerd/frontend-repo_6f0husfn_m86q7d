import React from 'react';
import { Settings, Home, User, Rocket } from 'lucide-react';

export default function Navbar({ onLaunch }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/70 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-red-900/40 border border-red-900 grid place-items-center text-red-400 font-bold" style={{ fontFamily: 'Defused, Inter, sans-serif' }}>S</div>
          <span className="font-bold text-neutral-200 tracking-wide" style={{ fontFamily: 'Defused, Inter, sans-serif' }}>Synk</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <a href="#features" className="hover:text-neutral-100">Features</a>
          <a href="#ui" className="hover:text-neutral-100">UI</a>
          <a href="#about" className="hover:text-neutral-100">About</a>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={onLaunch} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-800 hover:bg-red-700 transition-colors border border-red-900 text-sm">
            <Rocket size={16} /> Launch
          </button>
          <button className="p-2 rounded-md hover:bg-neutral-900"><Home size={18} /></button>
          <button className="p-2 rounded-md hover:bg-neutral-900"><User size={18} /></button>
          <button className="p-2 rounded-md hover:bg-neutral-900"><Settings size={18} /></button>
        </div>
      </div>
    </header>
  );
}
