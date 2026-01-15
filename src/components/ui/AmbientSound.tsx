'use client';

// ─────────────────────────────────────────────────────────────────────────────
// Ambient Sound Player
// Floating audio player for background tango music
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Music,
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  Disc3,
} from 'lucide-react';

import { useTranslation } from '@/lib/i18n/useTranslation';
import { getAmbientSoundContent, getDefaultTrack } from '@/lib/constants/ambientSound';

// ─────────────────────────────────────────────────────────────────────────────
// Audio Visualizer Bars
// ─────────────────────────────────────────────────────────────────────────────

interface VisualizerBarsProps {
  isPlaying: boolean;
}

function VisualizerBars({ isPlaying }: VisualizerBarsProps) {
  return (
    <div className="flex items-end gap-0.5">
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full bg-gold"
          animate={
            isPlaying
              ? {
                  height: [4, 16, 8, 12, 4],
                }
              : { height: 4 }
          }
          transition={
            isPlaying
              ? {
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: 'easeInOut',
                }
              : { duration: 0.3 }
          }
          style={{ height: 4 }}
        />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Volume Slider
// ─────────────────────────────────────────────────────────────────────────────

interface VolumeSliderProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
  label: string;
}

function VolumeSlider({ volume, onVolumeChange, label }: VolumeSliderProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-cream/50">{label}</span>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
        className="h-1 w-20 cursor-pointer appearance-none rounded-full bg-cream/20 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold"
        aria-label={label}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Expanded Controls Panel
// ─────────────────────────────────────────────────────────────────────────────

interface ControlsPanelProps {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  onPlayPause: () => void;
  onMuteToggle: () => void;
  onVolumeChange: (volume: number) => void;
  onClose: () => void;
  content: ReturnType<typeof getAmbientSoundContent>;
  trackTitle: string;
  trackArtist: string;
}

function ControlsPanel({
  isPlaying,
  isMuted,
  volume,
  onPlayPause,
  onMuteToggle,
  onVolumeChange,
  onClose,
  content,
  trackTitle,
  trackArtist,
}: ControlsPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 10 }}
      className="absolute bottom-16 right-0 w-64 overflow-hidden rounded-xl border border-cream/10 bg-charcoal/95 p-4 shadow-xl backdrop-blur-lg"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute right-2 top-2 rounded-full p-1 text-cream/50 transition-colors hover:bg-cream/10 hover:text-cream"
        aria-label="Close"
      >
        <X className="h-4 w-4" />
      </button>

      {/* Now Playing */}
      <div className="mb-4 flex items-center gap-3">
        <motion.div
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/20"
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={
            isPlaying
              ? { duration: 3, repeat: Infinity, ease: 'linear' }
              : { duration: 0.3 }
          }
        >
          <Disc3 className="h-5 w-5 text-gold" />
        </motion.div>
        <div className="flex-1 overflow-hidden">
          <p className="text-xs text-gold">{content.nowPlaying}</p>
          <p className="truncate text-sm font-medium text-cream">{trackTitle}</p>
          <p className="truncate text-xs text-cream/50">{trackArtist}</p>
        </div>
      </div>

      {/* Visualizer */}
      <div className="mb-4 flex h-8 items-center justify-center rounded-lg bg-midnight/50">
        <VisualizerBars isPlaying={isPlaying && !isMuted} />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        {/* Play/Pause */}
        <motion.button
          onClick={onPlayPause}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-midnight"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isPlaying ? content.pauseLabel : content.playLabel}
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="ml-0.5 h-5 w-5" />
          )}
        </motion.button>

        {/* Mute Button */}
        <button
          onClick={onMuteToggle}
          className={`rounded-full p-2 transition-colors ${
            isMuted ? 'text-red-400' : 'text-cream/70 hover:text-cream'
          }`}
          aria-label={isMuted ? content.unmuteLabel : content.muteLabel}
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>

        {/* Volume */}
        <VolumeSlider
          volume={volume}
          onVolumeChange={onVolumeChange}
          label={content.volumeLabel}
        />
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Ambient Sound Component
// ─────────────────────────────────────────────────────────────────────────────

export function AmbientSound() {
  const { locale } = useTranslation();
  const content = useMemo(() => getAmbientSoundContent(locale), [locale]);
  const track = useMemo(() => getDefaultTrack(), []);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showControls, setShowControls] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Initialize audio element
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const audio = new Audio(track.src);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [track.src, volume]);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Handle play/pause
  const handlePlayPause = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Browsers require user interaction for audio playback
      audioRef.current.play().catch(() => {
        // Autoplay blocked - user needs to interact first
        console.log('Audio playback requires user interaction');
      });
      setIsPlaying(true);
      setHasInteracted(true);
    }
  }, [isPlaying]);

  // Handle mute toggle
  const handleMuteToggle = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  // Handle volume change
  const handleVolumeChange = useCallback((newVolume: number) => {
    setVolume(newVolume);
    if (newVolume > 0) {
      setIsMuted(false);
    }
  }, []);

  // Toggle controls visibility
  const handleToggleControls = useCallback(() => {
    setShowControls((prev) => !prev);
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  }, [hasInteracted]);

  // Close controls
  const handleCloseControls = useCallback(() => {
    setShowControls(false);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showControls && (
          <ControlsPanel
            isPlaying={isPlaying}
            isMuted={isMuted}
            volume={volume}
            onPlayPause={handlePlayPause}
            onMuteToggle={handleMuteToggle}
            onVolumeChange={handleVolumeChange}
            onClose={handleCloseControls}
            content={content}
            trackTitle={track.title}
            trackArtist={track.artist}
          />
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={handleToggleControls}
        className={`group relative flex h-14 w-14 items-center justify-center rounded-full border shadow-lg transition-all ${
          isPlaying
            ? 'border-gold/50 bg-gold/20 text-gold'
            : 'border-cream/20 bg-charcoal/90 text-cream/70 hover:border-gold/30 hover:text-gold'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={content.toggleLabel}
        aria-expanded={showControls}
      >
        {/* Pulsing ring when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-gold"
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}

        <Music className="h-6 w-6" />

        {/* Label tooltip */}
        <span className="absolute bottom-full mb-2 hidden whitespace-nowrap rounded-lg bg-charcoal/90 px-3 py-1.5 text-xs text-cream shadow-lg group-hover:block">
          {content.toggleLabel}
        </span>
      </motion.button>
    </div>
  );
}
