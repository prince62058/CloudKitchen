import express, { type Request, type Response } from "express";
import { createServer } from "http";
import { menuData } from "../shared/menuData";
import type { MenuItem } from "../shared/schema";

const router = express.Router();

// Get all menu items
router.get("/api/menu", async (req: Request, res: Response) => {
  try {
    const items = menuData.filter(item => item.isAvailable === "true");
    res.json(items);
  } catch (error) {
    console.error('Error fetching menu items:', error);
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});

router.get("/api/menu/:category", async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const categoryItems = menuData.filter(item => 
      item.category.toLowerCase() === category.toLowerCase()
    );
    res.json(categoryItems);
  } catch (error) {
    console.error('Error fetching category items:', error);
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});

router.get("/api/featured", async (req: Request, res: Response) => {
  try {
    const categories = ['indian', 'chinese', 'italian', 'desserts', 'south-indian'];
    const featured: any[] = [];

    categories.forEach(category => {
      const categoryItems = menuData.filter(item => 
        item.category.toLowerCase() === category.toLowerCase()
      );
      if (categoryItems.length > 0) {
        featured.push(categoryItems[0]); // First item from each category
      }
    });

    res.json(featured);
  } catch (error) {
    console.error('Error fetching featured items:', error);
    res.status(500).json({ error: 'Failed to fetch featured items' });
  }
});

export async function registerRoutes(app: express.Application) {
  app.use("/api", router);
  const server = createServer(app);
  return server;
}