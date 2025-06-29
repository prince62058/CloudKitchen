const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '' 
  : 'http://localhost:5000';

export const fetchMenuItems = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/menu`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching menu items:', error);
    throw error;
  }
};

export const fetchMenuByCategory = async (category) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/menu/${category}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching menu by category:', error);
    throw error;
  }
};

export const fetchFeaturedItems = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/featured`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching featured items:', error);
    throw error;
  }
};