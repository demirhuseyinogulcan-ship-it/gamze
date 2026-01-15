// ─────────────────────────────────────────────────────────────────────────────
// Ambient Sound Content
// Background tango music player configuration
// ─────────────────────────────────────────────────────────────────────────────

import type { AudioTrack, AmbientSoundLocaleContent } from '@/types/ambientSound';

// ─────────────────────────────────────────────────────────────────────────────
// Audio Tracks
// Using royalty-free/public domain tango music
// In production, replace with actual licensed tango tracks
// ─────────────────────────────────────────────────────────────────────────────

export const AMBIENT_TRACKS: AudioTrack[] = [
  {
    id: 'tango-1',
    title: 'La Cumparsita',
    artist: 'Traditional',
    // Using a placeholder URL - replace with actual audio file path
    src: '/audio/ambient-tango.mp3',
    duration: 180,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Locale Content
// ─────────────────────────────────────────────────────────────────────────────

export const AMBIENT_SOUND_CONTENT: AmbientSoundLocaleContent = {
  tr: {
    toggleLabel: 'Müzik',
    playLabel: 'Müziği Çal',
    pauseLabel: 'Müziği Duraklat',
    muteLabel: 'Sesi Kapat',
    unmuteLabel: 'Sesi Aç',
    volumeLabel: 'Ses Seviyesi',
    nowPlaying: 'Şimdi Çalıyor',
  },
  en: {
    toggleLabel: 'Music',
    playLabel: 'Play Music',
    pauseLabel: 'Pause Music',
    muteLabel: 'Mute',
    unmuteLabel: 'Unmute',
    volumeLabel: 'Volume',
    nowPlaying: 'Now Playing',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Helper Functions
// ─────────────────────────────────────────────────────────────────────────────

export function getAmbientSoundContent(locale: 'tr' | 'en') {
  return AMBIENT_SOUND_CONTENT[locale];
}

export function getDefaultTrack(): AudioTrack {
  return AMBIENT_TRACKS[0];
}
