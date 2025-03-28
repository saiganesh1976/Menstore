import p15_img from "../assets/product_15.png";
import e5_img from "./ethnic5.jpg";
import e19_img from "./kurta4.avif";
import g11_img from "../assets/grooming1.avif";
import g12_img from "../assets/grooming2.avif";
import a24_img from "./product_45.avif";
import b16_img from "./jeans16.avif";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./blazers1.avif";
import f19_img from "../assets/product_29.avif";
import f24_img from "../assets/slippers2.avif";

let Recommanded = [
  {
    id: 309,
    brand: "REEBOK",
    name: " Men Force Runner Running Shoes",
    category: "Sports Shoes",
    image: f19_img,
    rating: 3.9,
    comments: 200,
    new_price: 3749,
    old_price: 4999,
    description:
      "Durable and stylish casual shoes with lace-up fastening for a perfect fit.",
    sizes: [6, 7, 8, 9, 10, 11],
  },
  {
    id: 313,
    brand: "PUMA",
    name: "Men Flip Flops with Synthetic upper",
    category: "Sandals & Slippers",
    image: f24_img,
    rating: 3.9,
    comments: 200,
    new_price: 1324,
    old_price: 2499,
    sizes: ["5", "6", "7", "8", "9", "10"],
    colors: ["Black"],
  },
  {
    id: 616,
    brand: "FABINDIA",
    name: "Men Indian Short Kurta",
    category: "Kurtas",
    image: e19_img,
    rating: 2.9,
    comments: 200,
    new_price: 1691,
    old_price: 1799,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red"],
  },
  {
    id: 1,
    brand: "PUMA",
    name: " Regular Fit Brand Print Crew-Neck T-shirt",
    category: "Clothing",
    image: p15_img,
    rating: 3.9,
    comments: 200,
    new_price: 799,
    old_price: 1499,
  },
  {
    id: 501,
    brand: "BEARDO",
    name: "Whisky Smoke Perfume Combo | 1000.0 gm",
    category: "Grooming",
    image: g11_img,
    rating: 3.9,
    comments: 200,
    new_price: 651,
    old_price: 1549,
    sizes: ["1000.0 gm"],
  },
  {
    id: 116,
    brand: "KOTTY ",
    name: "Man Regular Fit Jeans",
    category: "Jeans",
    image: b16_img,
    rating: 2.9,
    comments: 200,
    new_price: 740,
    old_price: 1999,
    sizes: ["28", "30", "34", "36", "38"],
    colors: ["Blue"],
  },
  {
    id: 502,
    brand: "BEARDO",
    name: "Men Spy Mafia & Don Most Wanted Body Spray Set | 1000.0 gm",
    category: "Grooming",
    image: g12_img,
    rating: 3.9,
    comments: 200,
    new_price: 349,
    old_price: 947,
    sizes: ["1000.0 gm"],
  },
  {
    id: 605,
    brand: "VASTRAMAY",
    name: "Men Embroidered Slim Fit Nehru jacket",
    category: "Nehru Jackets",
    image: e5_img,
    rating: 3.9,
    comments: 200,
    new_price: 1520,
    old_price: 3999,
    sizes: ["36", "38", "40", "42"],
    colors: ["Black"],
  },
  {
    id: 414,
    brand: "ARMANI EXCHANGE",
    name: " Men Logo Print Baseball Cap",
    category: "Hats & Caps",
    image: a24_img,
    rating: 3.9,
    comments: 200,
    new_price: 2000,
    old_price: 4999,
  },
   {
      id: 13,
      brand: "NETPLAY ",
      name: "Men Checked Slim Fit Shirt",
      category: "Casual Shirts",
      image: p13_img,
      rating: 3.9,
      comments: 200,
      new_price: 799,
      old_price: 1299,
      description:
        "A stylish and comfortable cotton check shirt, perfect for casual outings.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Gray"],
    },
    {
      id: 14,
      brand: "ALLEN SOLLY ",
      name: "Checked Slim Fit Shirt",
      category: "Formal Shirts",
      image: p14_img,
      rating: 3.9,
      comments: 200,
      new_price: 1749,
      old_price: 2499,
      description:
        "A stylish and comfortable cotton check shirt, perfect for casual outings.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Gray"],
    },
    {
      id: 15,
      brand: "PUMA",
      name: "Regular Fit Brand Print Crew-Neck T-shirt",
      category: "T-Shirts",
      image: p15_img,
      rating: 3.9,
      comments: 200,
      new_price: 799,
      old_price: 1499,
    },
    {
      id: 16,
      brand: "NETPLAY ",
      name: "Polo T-Shirt with Tipping Collar",
      category: "T-Shirts",
      image: p16_img,
      rating: 3.9,
      comments: 200,
      new_price: 384,
      old_price: 799,
      description:
        "A stylish and comfortable cotton check shirt, perfect for casual outings.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Gray"],
    },
    {
      id: 17,
      brand: "KOTTY ",
      name: "Jacket with Buttoned Flap Pockets",
      category: "Jackets & Coats",
      image: p17_img,
      rating: 3.9,
      comments: 200,
      new_price: 780,
      old_price: 2999,
      description:
        "A stylish and comfortable cotton check shirt, perfect for casual outings.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Gray"],
    },
    {
      id: 18,
      brand: "NETPLAY",
      name: "Men Regular Fit Single-Breasted Blazer",
      category: "Suits & Blazers",
      image: p18_img,
      rating: 3.9,
      comments: 200,
      new_price: 2484,
      old_price: 3499,
      description:
        "A stylish and comfortable Blazer, perfect for casual outings.",
      sizes: ["M", "L", "XL"],
      colors: ["Maroon"],
    },
];

export default Recommanded;
