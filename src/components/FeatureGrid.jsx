import React from 'react';
import { Users, Gamepad2, Mic2, Radio, Wand2, Globe2, Shield, BellRing } from 'lucide-react';

// 8 unique features beyond Discord
const features = [
  {
    icon: Users,
    title: 'Proximity Parties',
    desc: 'Spatial audio lounges where volume changes with virtual distance. Drift closer to hear more, fade away to mute.',
  },
  {
    icon: Gamepad2,
    title: 'Drop-in Game Lobbies',
    desc: 'Instant matchmaking among friends and nearby communities with latency-aware pairing.',
  },
  {
    icon: Mic2,
    title: 'Voice Synth Rooms',
    desc: 'Live vocal effects and harmonizers to remix your voice in real time for performances or anonymity.',
  },
  {
    icon: Radio,
    title: 'Mars FM',
    desc: 'Stream a station from your server with live DJ handoffs and set recordings for replays.',
  },
  {
    icon: Wand2,
    title: 'Mood Skins',
    desc: 'Monochrome themes that subtly morph based on your current status and activity streaks.',
  },
  {
    icon: Globe2,
    title: 'World Boards',
    desc: 'Pin interactive 3D posts to your community map—walk around updates instead of scrolling threads.',
  },
  {
    icon: Shield,
    title: 'Ritual Roles',
    desc: 'Time-based roles that unlock with challenges, celebrating contribution without clutter.',
  },
  {
    icon: BellRing,
    title: 'Device-native Alerts',
    desc: 'Granular push notifications tuned per room and friend; hush storms, highlight whispers.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative bg-neutral-950 text-neutral-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ fontFamily: 'Defused, Inter, sans-serif' }}>
          What makes Synk different
        </h2>
        <p className="text-neutral-300 mt-2 max-w-2xl">
          Built for discovery and creation with a Y2K skater soul — dark red, dark gray, and zero neon.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-lg border border-neutral-800 bg-neutral-900/40 p-5 hover:bg-neutral-900 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-red-900/40 border border-red-900">
                  <Icon className="text-red-400" size={20} />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
