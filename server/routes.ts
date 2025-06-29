import express, { type Request, type Response } from "express";
import { createServer } from "http";

// Full menu data embedded for deployment compatibility
const menuData = [
  // Indian Dishes
  {
    id: 1,
    name: "Traditional Thali",
    description: "A vibrant Indian thali featuring rice, curries, chutneys, and traditional accompaniments.",
    price: "180.00",
    category: "indian",
    image: "https://images.unsplash.com/photo-1680993032090-1ef7ea9b51e5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwdGhhbGl8ZW58MHx8MHx8fDA%3D",
    isAvailable: "true"
  },
  {
    id: 2,
    name: "Butter Chicken",
    description: "Creamy tomato-based chicken curry",
    price: "160.00",
    category: "indian",
    image: "https://www.spiceroots.com/spiceroots/wp-content/uploads/2008/05/butterchicken-1024x682.jpg",
    isAvailable: "true"
  },
  {
    id: 3,
    name: "Chicken Biryani",
    description: "Aromatic basmati rice with spiced chicken",
    price: "120.00",
    category: "indian",
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
    isAvailable: "true"
  },
  {
    id: 4,
    name: "Mutton Rogan Josh",
    description: "Kashmiri-style mutton curry with aromatic spices",
    price: "180.00",
    category: "indian",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    isAvailable: "true"
  },
  {
    id: 5,
    name: "Paneer Tikka Masala",
    description: "Grilled paneer in rich tomato and cream gravy",
    price: "140.00",
    category: "indian",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/05/paneer-tikka-masala-recipe.jpg",
    isAvailable: "true"
  },
  {
    id: 6,
    name: "Dal Makhani",
    description: "Creamy black lentils cooked with butter and spices",
    price: "100.00",
    category: "indian",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/07/dal-makhani-recipe-1-500x500.jpg",
    isAvailable: "true"
  },
  {
    id: 7,
    name: "Aloo Gobi",
    description: "Spiced potatoes and cauliflower dry curry",
    price: "90.00",
    category: "indian",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/01/aloo-gobi-recipe-1-500x500.jpg",
    isAvailable: "true"
  },
  {
    id: 8,
    name: "Garlic Naan",
    description: "Soft bread with garlic and herbs",
    price: "40.00",
    category: "indian",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/garlic-naan-recipe.jpg",
    isAvailable: "true"
  },
  {
    id: 9,
    name: "Chicken Curry",
    description: "Tender mutton in aromatic spice gravy",
    price: "120.00",
    category: "indian",
    image: "https://www.whiskaffair.com/wp-content/uploads/2021/10/Andhra-Chicken-Curry-2-3-500x500.jpg",
    isAvailable: "true"
  },
  // Chinese Dishes
  {
    id: 10,
    name: "Chicken Fried Rice",
    description: "Wok-tossed rice with chicken and vegetables",
    price: "120.00",
    category: "chinese",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    isAvailable: "true"
  },
  {
    id: 11,
    name: "Schezwan Noodles",
    description: "Spicy stir-fried noodles with vegetables",
    price: "110.00",
    category: "chinese",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/schezwan-noodles-1-500x500.jpg",
    isAvailable: "true"
  },
  {
    id: 12,
    name: "Manchurian Dry",
    description: "Crispy vegetable balls in spicy sauce",
    price: "100.00",
    category: "chinese",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/veg-manchurian-dry-1-500x500.jpg",
    isAvailable: "true"
  },
  {
    id: 13,
    name: "Double Egg Roll",
    description: "Double egg wrapped in paratha with vegetables and sauce",
    price: "80.00",
    category: "chinese",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    isAvailable: "true"
  },
  {
    id: 14,
    name: "Chicken Roll",
    description: "Spiced chicken wrapped in soft paratha",
    price: "90.00",
    category: "chinese",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    isAvailable: "true"
  },
  {
    id: 15,
    name: "Chicken Chilli",
    description: "Spicy chicken cubes with bell peppers and onions",
    price: "140.00",
    category: "chinese",
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Chilli-Chicken-Recipe.jpg",
    isAvailable: "true"
  },
  {
    id: 16,
    name: "Chicken Lollipop",
    description: "Crispy chicken drummettes with spicy coating",
    price: "160.00",
    category: "chinese",
    image: "https://www.licious.in/blog/wp-content/uploads/2020/12/chicken-lollipop.jpg",
    isAvailable: "true"
  },
  {
    id: 17,
    name: "Fried Rice",
    description: "Classic vegetable fried rice with aromatic spices",
    price: "90.00",
    category: "chinese",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    isAvailable: "true"
  },
  // Italian Dishes
  {
    id: 18,
    name: "Margherita Pizza",
    description: "Classic pizza with tomato, mozzarella, and basil",
    price: "180.00",
    category: "italian",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    isAvailable: "true"
  },
  {
    id: 19,
    name: "Chicken Alfredo Pasta",
    description: "Creamy fettuccine with grilled chicken",
    price: "160.00",
    category: "italian",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    isAvailable: "true"
  },
  {
    id: 20,
    name: "Pepperoni Pizza",
    description: "Classic pizza topped with spicy pepperoni",
    price: "200.00",
    category: "italian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    isAvailable: "true"
  },
  {
    id: 21,
    name: "Spaghetti Carbonara",
    description: "Traditional pasta with eggs, cheese, and pancetta",
    price: "150.00",
    category: "italian",
    image: "https://images.unsplash.com/photo-1588013273468-315900bacc81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    isAvailable: "true"
  },
  {
    id: 22,
    name: "Chicken Parmigiana",
    description: "Breaded chicken with marinara and mozzarella",
    price: "170.00",
    category: "italian",
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    isAvailable: "true"
  },
  {
    id: 23,
    name: "Vegetarian Lasagna",
    description: "Layered pasta with vegetables and cheese",
    price: "140.00",
    category: "italian",
    image: "https://images.unsplash.com/photo-1565299585323-38174c13a4b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    isAvailable: "true"
  },
  {
    id: 24,
    name: "Garlic Bread",
    description: "Crispy bread with garlic butter and herbs",
    price: "60.00",
    category: "italian",
    image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    isAvailable: "true"
  },
  {
    id: 25,
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee and mascarpone",
    price: "80.00",
    category: "italian",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    isAvailable: "true"
  },
  // South Indian Dishes
  {
    id: 26,
    name: "Masala Dosa",
    description: "Crispy rice crepe with spiced potato filling",
    price: "80.00",
    category: "south-indian",
    image: "https://images.unsplash.com/photo-1630409346314-7c7c4d0e4c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    isAvailable: "true"
  },
  {
    id: 27,
    name: "Idli Sambar",
    description: "Steamed rice cakes with lentil curry",
    price: "60.00",
    category: "south-indian",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/idli-sambar-1-500x375.jpg",
    isAvailable: "true"
  },
  {
    id: 28,
    name: "Rava Upma",
    description: "Savory semolina porridge with vegetables",
    price: "50.00",
    category: "south-indian",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/upma-recipe-1-500x500.jpg",
    isAvailable: "true"
  },
  {
    id: 29,
    name: "Medu Vada",
    description: "Crispy lentil donuts with coconut chutney",
    price: "40.00",
    category: "south-indian",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/medu-vada-1-500x375.jpg",
    isAvailable: "true"
  },
  {
    id: 30,
    name: "Coconut Rice",
    description: "Fragrant rice cooked with coconut and spices",
    price: "70.00",
    category: "south-indian",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/coconut-rice-1-500x375.jpg",
    isAvailable: "true"
  },
  {
    id: 31,
    name: "Chicken Chettinad",
    description: "Spicy South Indian chicken curry with roasted spices",
    price: "160.00",
    category: "south-indian",
    image: "https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_1617671564.jpg",
    isAvailable: "true"
  },
  {
    id: 32,
    name: "Rasam Rice",
    description: "Tangy tamarind soup with rice",
    price: "60.00",
    category: "south-indian",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/rasam-recipe-1-500x375.jpg",
    isAvailable: "true"
  },
  {
    id: 33,
    name: "Filter Coffee",
    description: "Traditional South Indian coffee",
    price: "30.00",
    category: "south-indian",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    isAvailable: "true"
  },
  // Desserts
  {
    id: 34,
    name: "Chocolate Brownie",
    description: "Rich chocolate brownie with nuts",
    price: "70.00",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    isAvailable: "true"
  },
  {
    id: 35,
    name: "Vanilla Ice Cream",
    description: "Creamy vanilla ice cream",
    price: "50.00",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    isAvailable: "true"
  },
  {
    id: 36,
    name: "Strawberry Cheesecake",
    description: "Creamy cheesecake with fresh strawberries",
    price: "90.00",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    isAvailable: "true"
  },
  {
    id: 37,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center",
    price: "80.00",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    isAvailable: "true"
  },
  {
    id: 38,
    name: "Kulfi",
    description: "Traditional Indian ice cream with cardamom",
    price: "40.00",
    category: "desserts",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/04/kulfi-recipe-1-500x375.jpg",
    isAvailable: "true"
  },
  {
    id: 39,
    name: "Gulab Jamun",
    description: "Sweet fried dumplings in sugar syrup",
    price: "60.00",
    category: "desserts",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/04/gulab-jamun-recipe-1-500x375.jpg",
    isAvailable: "true"
  }
];

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  isAvailable: string;
}

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
    const items = menuData.filter(item => 
      item.category === category && item.isAvailable === "true"
    );
    res.json(items);
  } catch (error) {
    console.error('Error fetching menu items by category:', error);
    res.status(500).json({ error: 'Failed to fetch menu items by category' });
  }
});

router.get("/api/featured", async (req: Request, res: Response) => {
  try {
    const categories = ['indian', 'chinese', 'italian', 'desserts', 'south-indian'];
    const featured: MenuItem[] = [];
    
    categories.forEach(category => {
      const categoryItems = menuData.filter(item => 
        item.category === category && item.isAvailable === "true"
      );
      if (categoryItems.length > 0) {
        featured.push(categoryItems[0]);
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