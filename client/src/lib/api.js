
// API functions for menu data
export const menuAPI = {
  getAll: async () => {
    try {
      const response = await fetch('/api/menu');
      if (!response.ok) {
        throw new Error('Failed to fetch menu items');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching menu items:', error);
      throw error;
    }
  },
  
  getByCategory: async (category) => {
    try {
      const response = await fetch(`/api/menu/${category}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch menu items for category: ${category}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching menu items for category ${category}:`, error);
      throw error;
    }
  },
  
  getFeatured: async () => {
    try {
      const response = await fetch('/api/featured');
      if (!response.ok) {
        throw new Error('Failed to fetch featured items');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching featured items:', error);
      throw error;
    }
  },
};
