import { menuData } from '../../../shared/menuData.ts';

// Static data version - no API calls needed
export const menuAPI = {
  getAll: () => Promise.resolve(menuData),
  getByCategory: (category) => Promise.resolve(menuData.filter(item => item.category === category)),
  getFeatured: () => Promise.resolve(menuData.filter(item => item.featured || [1, 10, 20, 28].includes(item.id))),
};