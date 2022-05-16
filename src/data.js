import img1 from "./assets/gallery/gallery-1.webp";
import img2 from "./assets/gallery/gallery-2.webp";
import img3 from "./assets/gallery/gallery-3.webp";
import img4 from "./assets/gallery/gallery-4.webp";
import img5 from "./assets/gallery/gallery-5.webp";
import img6 from "./assets/gallery/gallery-6.webp";
import img7 from "./assets/gallery/gallery-7.webp";
import img8 from "./assets/gallery/gallery-8.webp";
import img9 from "./assets/gallery/gallery-9.webp";
import img10 from "./assets/gallery/gallery-10.webp";
import img11 from "./assets/gallery/gallery-11.webp";
import img12 from "./assets/gallery/gallery-12.webp";
import allrecipe1 from "./assets/meals/meal-1.webp";
import allrecipe2 from "./assets/meals/meal-2.webp";
import Logo from "./assets/omnifood-logo.webp";





export const LogoMain = [{ id: 1, image: Logo }];

export const testimonial_data = [
  {
    id: 1,
    name: "Bertie Yates",
    description:
      "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
  },
  {
    id: 2,
    name: "Hester Hogan",
    description:
      "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"
  },
  {
    id: 3,
    name: "Larry Little",
    description:
      "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
  },
  {
    id: 4,
    name: "Sean Walsh",
    description:
      "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
  }
];
export const meals_picture = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img6 },
  { id: 7, image: img7 },
  { id: 8, image: img8 },
  { id: 9, image: img9 },
  { id: 10, image: img10 },
  { id: 11, image: img11 },
  { id: 12, image: img12 }
];
export const AllrecipeData = [
  {
    id: "01",
    image: allrecipe1,
    title: "Japanese Gyozas",
    category: ["VEGETARIAN"],
    recipece: ["650", "® 74", "4.9"],
    rating: "553"
  },
  {
    id: "02",
    image: allrecipe2,
    title: "Avocado Salad",
    category: ["VEGAN", "PALEO"],
    recipece: ["400", "® 92", "4.8"],
    rating: "553"
  }
];
export const allRecipeCategories = [
  { id: "01", name: "Vegetarian" },
  { id: "02", name: "Vegan" },
  { id: "03", name: "Pescatarian" },
  { id: "04", name: "Gluten-free" },
  { id: "05", name: "Lactose-free" },
  { id: "06", name: "Keto" },
  { id: "07", name: "Paleo" },
  { id: "08", name: "Low FODMAP" },
  { id: "09", name: "Kid-friendly" }
];
export const priceData = [
  {
    id: "01",
    name: "starter",
    price: 399,
    description: "per month. That's just $13 per meal!",
    descOne: "1 meal per day",
    descTwo: "Order from 11am to 9pm",
    descThree: "Delivery is free",
    descFour: "",
    bg: true,
    active: false
  },
  {
    id: "02",
    name: "complete",
    price: 649,
    description: "per month. That's just $11 per meal!",
    descOne: "2 meals per day",
    descTwo: "Order 24/7",
    descThree: "Delivery is free",
    descFour: "Get access to latest recipes",
    bg: false,
    active: true
  }
];
export const footerData = [
  {
    id: "01",
    title: "About Us",
    content1: "How it works",
    content2: "Testimonials",
    content3: "Careers",
    content4: "Investors",
    content5: "Terms of Service"
  },
  {
    id: "02",
    title: "Contact Us",
    content1: "Contact",
    content2: "Support",
    content3: "Destination",
    content4: "Sponsorship",
    content5: ""
  },
  {
    id: "03",
    title: "Videos",
    content1: "Submit video",
    content2: "Ambassadors",
    content3: "Agency",
    content4: "Influenceer",
    content5: ""
  },
  {
    id: "04",
    title: "Social Media",
    content1: "Instagram",
    content2: "Facebook",
    content3: "Youtube",
    content4: "Twitter",
    content5: ""
  }
];
