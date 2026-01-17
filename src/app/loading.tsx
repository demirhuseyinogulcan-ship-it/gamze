/**
 * Global Loading State
 * Shown during page transitions
 */

export default function Loading() {
  return (
    <main className="min-h-screen bg-midnight flex items-center justify-center">
      <div className="text-center">
        {/* Animated Tango Couple Silhouette */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          {/* Outer spinning ring */}
          <div className="absolute inset-0 rounded-full border-2 border-gold/20 animate-spin" 
               style={{ animationDuration: '3s' }} />
          
          {/* Inner pulsing circle */}
          <div className="absolute inset-2 rounded-full bg-gold/10 animate-pulse" />
          
          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              className="w-10 h-10 text-gold" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" 
                    className="opacity-0 animate-pulse" 
                    style={{ animationDelay: '0.5s' }} />
              <circle cx="12" cy="12" r="3" className="animate-pulse" />
            </svg>
          </div>
        </div>

        {/* Text */}
        <p className="text-white/60 font-heading text-lg tracking-wider">
          Yükleniyor...
        </p>
        
        {/* Animated dots */}
        <div className="flex justify-center gap-1 mt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gold/60 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
