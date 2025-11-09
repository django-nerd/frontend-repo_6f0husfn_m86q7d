import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import AuthModal from './components/AuthModal';
import BackgroundScene from './components/BackgroundScene';

function InsideMarsShowcase() {
  return (
    <section id="ui" className="relative min-h-[60vh] bg-neutral-950 text-neutral-100 overflow-hidden">
      <BackgroundScene mode="inside" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold" style={{ fontFamily: 'Defused, Inter, sans-serif' }}>Inside Mars</h2>
        <p className="text-neutral-300 mt-2 max-w-2xl">
          A layered, living landscape as your canvas. Cards, chats, and controls float above shifting ridges.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
            <p className="text-sm text-neutral-300">Friends online</p>
            <div className="mt-3 space-y-2">
              {['kai','mira','zen'].map((n) => (
                <div key={n} className="flex items-center justify-between p-2 rounded-md hover:bg-neutral-800/60">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-red-900/40 border border-red-900" />
                    <span>@{n}</span>
                  </div>
                  <span className="text-xs text-red-300">Ready</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 col-span-1 md:col-span-2">
            <p className="text-sm text-neutral-300">Chat preview</p>
            <div className="mt-3 h-40 overflow-auto space-y-2 pr-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded bg-neutral-800 border border-neutral-700" />
                  <div>
                    <p className="text-sm"><span className="text-neutral-400">zen</span> <span className="text-neutral-500">·</span> hey, launching a mars run?</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <input className="flex-1 rounded-md bg-neutral-950 border border-neutral-800 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-700" placeholder="Type a message" />
              <button className="px-3 py-2 rounded-md bg-red-800 hover:bg-red-700 border border-red-900 text-sm">Send</button>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950" />
    </section>
  );
}

export default function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin');

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar onLaunch={() => { setAuthMode('signin'); setAuthOpen(true); }} />
      <Hero onLaunch={() => { setAuthMode('signin'); setAuthOpen(true); }} />
      <FeatureGrid />
      <InsideMarsShowcase />
      <section id="about" className="bg-neutral-950 py-16">
        <div className="max-w-6xl mx-auto px-6 text-neutral-300">
          <h3 className="text-2xl font-bold text-neutral-100" style={{ fontFamily: 'Defused, Inter, sans-serif' }}>Built by Un1xpected</h3>
          <p className="mt-2 max-w-3xl">Synk is an original, monochrome-first social universe. No neon. No retro. Just dark red grit and thoughtful motion crafted for finding people you actually vibe with.</p>
        </div>
      </section>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} mode={authMode} />
    </div>
  );
}
