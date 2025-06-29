import React, { useState, useCallback } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: (error: any) => void;
}

// Fallback images for different categories
const categoryFallbacks: Record<string, string> = {
  indian: "https://images.unsplash.com/photo-1631452180539-96aba8b8d0d5?w=800&h=600&fit=crop&auto=format",
  chinese: "https://images.unsplash.com/photo-1563379091339-03246963d4d5?w=800&h=600&fit=crop&auto=format", 
  italian: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop&auto=format",
  desserts: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&auto=format",
  'south-indian': "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&h=600&fit=crop&auto=format",
  default: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop&auto=format"
};

export default function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  loading = "lazy",
  onLoad,
  onError 
}: OptimizedImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
    console.log(`✅ Successfully loaded image: ${alt}`);
    onLoad?.();
  }, [alt, onLoad]);

  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`❌ Failed to load image for ${alt}:`, currentSrc);
    
    if (!hasError) {
      setHasError(true);
      
      // Try to determine category from alt text for better fallback
      const altLower = alt.toLowerCase();
      let fallbackCategory = 'default';
      
      if (altLower.includes('biryani') || altLower.includes('curry') || altLower.includes('tandoor') || altLower.includes('thali')) {
        fallbackCategory = 'indian';
      } else if (altLower.includes('noodles') || altLower.includes('rice') || altLower.includes('chicken') && altLower.includes('chilli')) {
        fallbackCategory = 'chinese';
      } else if (altLower.includes('pizza') || altLower.includes('pasta') || altLower.includes('cheese')) {
        fallbackCategory = 'italian';
      } else if (altLower.includes('cake') || altLower.includes('sweet') || altLower.includes('dessert') || altLower.includes('ice')) {
        fallbackCategory = 'desserts';
      } else if (altLower.includes('dosa') || altLower.includes('idli') || altLower.includes('sambar') || altLower.includes('upma')) {
        fallbackCategory = 'south-indian';
      }
      
      const fallbackSrc = categoryFallbacks[fallbackCategory] || categoryFallbacks.default;
      setCurrentSrc(fallbackSrc);
      console.log(`🔄 Using fallback image for ${alt}:`, fallbackSrc);
    }
    
    onError?.(e);
  }, [alt, currentSrc, hasError, onError]);

  return (
    <div className="relative">
      <img 
        src={currentSrc}
        alt={alt}
        className={className}
        loading={loading}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
    </div>
  );
}