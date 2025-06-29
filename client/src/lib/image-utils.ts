// Image utility functions for better deployment compatibility

export const imageProxy = (url: string, width = 800, height = 600): string => {
  // For Vercel deployment, we can use various image proxy services
  // These services help with CORS issues and image optimization
  
  if (!url || typeof url !== 'string') {
    return getDefaultFallback();
  }

  // If it's already an optimized Unsplash URL, return as is
  if (url.includes('unsplash.com') && url.includes('w=') && url.includes('h=')) {
    return url;
  }

  // For Unsplash images, add optimization parameters
  if (url.includes('unsplash.com')) {
    const baseUrl = url.split('?')[0];
    return `${baseUrl}?w=${width}&h=${height}&fit=crop&auto=format&q=80`;
  }

  // For other images, check if they're accessible
  return url;
};

export const getDefaultFallback = (): string => {
  return "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop&auto=format&q=80";
};

export const getCategoryFallback = (dishName: string): string => {
  const name = dishName.toLowerCase();
  
  // Indian dishes
  if (name.includes('biryani') || name.includes('curry') || name.includes('tandoor') || 
      name.includes('thali') || name.includes('dal') || name.includes('paneer') ||
      name.includes('chole') || name.includes('samosa') || name.includes('naan')) {
    return "https://images.unsplash.com/photo-1631452180539-96aba8b8d0d5?w=800&h=600&fit=crop&auto=format&q=80";
  }
  
  // Chinese dishes
  if (name.includes('noodles') || name.includes('rice') || name.includes('manchurian') ||
      name.includes('chilli') || name.includes('roll') || name.includes('lollipop')) {
    return "https://images.unsplash.com/photo-1563379091339-03246963d4d5?w=800&h=600&fit=crop&auto=format&q=80";
  }
  
  // Italian dishes
  if (name.includes('pizza') || name.includes('pasta') || name.includes('cheese') ||
      name.includes('margherita') || name.includes('pepperoni')) {
    return "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop&auto=format&q=80";
  }
  
  // Desserts
  if (name.includes('cake') || name.includes('sweet') || name.includes('dessert') || 
      name.includes('ice') || name.includes('kulfi') || name.includes('rasmalai') ||
      name.includes('chocolate') || name.includes('lava')) {
    return "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&auto=format&q=80";
  }
  
  // South Indian dishes
  if (name.includes('dosa') || name.includes('idli') || name.includes('sambar') || 
      name.includes('upma') || name.includes('vada') || name.includes('filter') ||
      name.includes('uttapam') || name.includes('chutney')) {
    return "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&h=600&fit=crop&auto=format&q=80";
  }
  
  return getDefaultFallback();
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

export const optimizeImageUrl = (url: string): string => {
  return imageProxy(url, 800, 600);
};