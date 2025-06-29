// Static API replacement for deployment
import { staticMenuData, staticFeaturedItems, type StaticMenuItem } from './staticData';

export const staticAPI = {
  async getMenu(): Promise<StaticMenuItem[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return staticMenuData.filter(item => item.isAvailable === "true");
  },

  async getMenuByCategory(category: string): Promise<StaticMenuItem[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return staticMenuData.filter(item => 
      item.category === category && item.isAvailable === "true"
    );
  },

  async getFeatured(): Promise<StaticMenuItem[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return staticFeaturedItems;
  }
};