// ─────────────────────────────────────────────────────────────────────────────
// Ambient Sound Types
// Background tango music player
// ─────────────────────────────────────────────────────────────────────────────

export interface AudioTrack {
  id: string;
  title: string;
  artist: string;
  src: string;
  duration?: number; // in seconds
}

export interface AmbientSoundState {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number; // 0 to 1
  currentTrack: AudioTrack | null;
  showControls: boolean;
}

export interface AmbientSoundContent {
  toggleLabel: string;
  playLabel: string;
  pauseLabel: string;
  muteLabel: string;
  unmuteLabel: string;
  volumeLabel: string;
  nowPlaying: string;
}

export interface AmbientSoundLocaleContent {
  tr: AmbientSoundContent;
  en: AmbientSoundContent;
}
