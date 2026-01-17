/**
 * Blog Loading State
 */

export default function BlogLoading() {
  return (
    <main className="min-h-screen bg-midnight pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 w-48 bg-white/10 rounded-lg mx-auto mb-4 animate-pulse" />
          <div className="h-6 w-96 max-w-full bg-white/5 rounded mx-auto animate-pulse" />
        </div>

        {/* Grid Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <article key={i} className="bg-white/5 rounded-2xl overflow-hidden animate-pulse">
              {/* Image skeleton */}
              <div className="aspect-video bg-white/10" />
              
              {/* Content skeleton */}
              <div className="p-6">
                {/* Category */}
                <div className="h-4 w-20 bg-gold/20 rounded mb-4" />
                
                {/* Title */}
                <div className="h-6 w-full bg-white/10 rounded mb-2" />
                <div className="h-6 w-3/4 bg-white/10 rounded mb-4" />
                
                {/* Excerpt */}
                <div className="space-y-2 mb-4">
                  <div className="h-4 w-full bg-white/5 rounded" />
                  <div className="h-4 w-5/6 bg-white/5 rounded" />
                </div>
                
                {/* Meta */}
                <div className="flex justify-between">
                  <div className="h-4 w-24 bg-white/5 rounded" />
                  <div className="h-4 w-16 bg-white/5 rounded" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
