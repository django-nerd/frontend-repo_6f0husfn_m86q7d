import React from 'react';
import { Rocket, Play, MousePointerClick } from 'lucide-react';
import BackgroundScene from './BackgroundScene';

export default function Hero({ onLaunch }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-neutral-950 text-neutral-200">
      <BackgroundScene mode="mars" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-28 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/40 ring-1 ring-red-900/60 mb-6">
          <Rocket size={16} className="text-red-400" />
          <span className="text-xs tracking-widest uppercase text-red-300">Un1xpected presents</span>
        </div>
        <h1 className="font-black text-5xl md:text-7xl leading-tight text-neutral-100 tracking-tight" style={{ fontFamily: 'Defused, Inter, sans-serif' }}>
          Synk
        </h1>
        <p className="max-w-2xl text-neutral-300/90 mt-4 text-lg">
          A monochrome, dark-red grunge universe to find friends, squad up, stream, and build your own worlds.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <button onClick={onLaunch} className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-red-800 hover:bg-red-700 transition-colors ring-1 ring-red-900">
            <Play size={18} />
            <span>Launch App</span>
          </button>
          <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-neutral-900/60 hover:bg-neutral-800/80 transition-colors ring-1 ring-neutral-800">
            <MousePointerClick size={18} />
            <span>See What’s Inside</span>
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-neutral-950" />
    </section>
  );
}
