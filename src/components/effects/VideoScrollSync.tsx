'use client';

// ─────────────────────────────────────────────────────────────────────────────
// Video Scroll Sync Effect
// Syncs video playback with scroll position for cinematic feel
// ─────────────────────────────────────────────────────────────────────────────

import {
  useRef,
  useEffect,
  useCallback,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface VideoScrollSyncProps {
  src: string;
  poster?: string;
  className?: string;
  scrollStart?: number; // 0 to 1, when to start syncing
  scrollEnd?: number; // 0 to 1, when to end syncing
  playbackRate?: number; // Speed multiplier
  loop?: boolean;
  muted?: boolean;
  syncMode?: 'scroll' | 'auto' | 'hybrid'; // How to sync video
  onProgress?: (progress: number) => void;
}

export interface VideoScrollSyncRef {
  play: () => void;
  pause: () => void;
  seek: (time: number) => void;
  getProgress: () => number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Utility Hook for Smooth Value Interpolation
// ─────────────────────────────────────────────────────────────────────────────

function useSmoothValue(value: number, smoothness: number = 0.1) {
  const smoothValue = useMotionValue(value);

  useEffect(() => {
    const unsubscribe = smoothValue.on('change', () => {});
    return () => unsubscribe();
  }, [smoothValue]);

  useEffect(() => {
    const current = smoothValue.get();
    const target = value;
    const delta = target - current;
    smoothValue.set(current + delta * smoothness);
  }, [value, smoothValue, smoothness]);

  return smoothValue;
}

// ─────────────────────────────────────────────────────────────────────────────
// Video Scroll Sync Component
// ─────────────────────────────────────────────────────────────────────────────

export const VideoScrollSync = forwardRef<VideoScrollSyncRef, VideoScrollSyncProps>(
  function VideoScrollSync(
    {
      src,
      poster,
      className = '',
      scrollStart = 0,
      scrollEnd = 1,
      playbackRate = 1,
      loop = true,
      muted = true,
      syncMode = 'hybrid',
      onProgress,
    },
    ref
  ) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [duration, setDuration] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

    // Get scroll progress within the viewport
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start end', 'end start'],
    });

    // Map scroll to video time
    const videoProgress = useTransform(
      scrollYProgress,
      [scrollStart, scrollEnd],
      [0, 1]
    );

    // Handle video metadata loaded
    const handleLoadedMetadata = useCallback(() => {
      if (videoRef.current) {
        setDuration(videoRef.current.duration);
        setIsLoaded(true);
      }
    }, []);

    // Sync video time with scroll (for 'scroll' and 'hybrid' modes)
    useEffect(() => {
      if (!isLoaded || !videoRef.current || duration === 0) return;
      if (syncMode === 'auto') return;

      const unsubscribe = videoProgress.on('change', (latest) => {
        if (videoRef.current && isInView) {
          const targetTime = latest * duration;
          
          // Only seek if there's a significant difference
          if (Math.abs(videoRef.current.currentTime - targetTime) > 0.1) {
            videoRef.current.currentTime = targetTime;
          }
          
          onProgress?.(latest);
        }
      });

      return () => unsubscribe();
    }, [isLoaded, duration, videoProgress, syncMode, isInView, onProgress]);

    // Intersection observer for in-view detection
    useEffect(() => {
      if (!containerRef.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);

          if (videoRef.current) {
            if (entry.isIntersecting && syncMode !== 'scroll') {
              // Auto-play when in view for 'auto' and 'hybrid' modes
              videoRef.current.play().catch(() => {});
            } else if (!entry.isIntersecting) {
              videoRef.current.pause();
            }
          }
        },
        { threshold: 0.25 }
      );

      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }, [syncMode]);

    // Set playback rate
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = playbackRate;
      }
    }, [playbackRate]);

    // Expose methods via ref
    useImperativeHandle(ref, () => ({
      play: () => videoRef.current?.play(),
      pause: () => videoRef.current?.pause(),
      seek: (time: number) => {
        if (videoRef.current) {
          videoRef.current.currentTime = time;
        }
      },
      getProgress: () => {
        if (videoRef.current && duration > 0) {
          return videoRef.current.currentTime / duration;
        }
        return 0;
      },
    }));

    return (
      <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
        <motion.video
          ref={videoRef}
          src={src}
          poster={poster}
          muted={muted}
          loop={loop}
          playsInline
          preload="metadata"
          onLoadedMetadata={handleLoadedMetadata}
          className="h-full w-full object-cover"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        />

        {/* Loading placeholder */}
        {!isLoaded && poster && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${poster})` }}
          />
        )}
      </div>
    );
  }
);

// ─────────────────────────────────────────────────────────────────────────────
// Scroll Progress Indicator (Optional companion component)
// ─────────────────────────────────────────────────────────────────────────────

interface ScrollProgressIndicatorProps {
  progress: number;
  className?: string;
}

export function ScrollProgressIndicator({
  progress,
  className = '',
}: ScrollProgressIndicatorProps) {
  return (
    <div className={`h-1 w-full bg-cream/10 ${className}`}>
      <motion.div
        className="h-full bg-gold"
        style={{ width: `${progress * 100}%` }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Hook for controlling video scroll sync externally
// ─────────────────────────────────────────────────────────────────────────────

export function useVideoScrollSync() {
  const videoRef = useRef<VideoScrollSyncRef>(null);
  const [progress, setProgress] = useState(0);

  const play = useCallback(() => videoRef.current?.play(), []);
  const pause = useCallback(() => videoRef.current?.pause(), []);
  const seek = useCallback((time: number) => videoRef.current?.seek(time), []);
  const getProgress = useCallback(
    () => videoRef.current?.getProgress() ?? 0,
    []
  );

  return {
    ref: videoRef,
    progress,
    setProgress,
    play,
    pause,
    seek,
    getProgress,
  };
}
