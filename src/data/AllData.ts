import audi1 from "../images/cars-big/audi-box.png";
import audi2 from "../images/cars-big/audia1.jpg";
import golf1 from "../images/cars-big/golf6-box.png";
import golf2 from "../images/cars-big/golf6.jpg";
import camry1 from "../images/cars-big/toyota-box.png";
import camry2 from "../images/cars-big/toyotacamry.jpg";
import bmw1 from "../images/cars-big/bmw-box.png";
import bmw2 from "../images/cars-big/bmw320.jpg";
import mercedes1 from "../images/cars-big/benz-box.png";
import mercedes2 from "../images/cars-big/benz.jpg";
import cc1 from "../images/cars-big/passat-box.png";
import cc2 from "../images/cars-big/passatcc.png";

import diaz from "../images/team/2.png";
import miller from "../images/team/1.png";
import ross from "../images/team/3.png";
import rivera from "../images/team/4.png";
import rizz from "../images/team/5.png";
import hunt from "../images/team/6.png";

export const vehicles = [
  {
    id: 1,
    brand: "Audi",
    model: "A1",
    line: "(S-Line)",
    doors: "2/3",
    transmission: "manual",
    fuel: "Diesel",
    cost: "$45",
    image1: audi1,
    image2: audi2,
    ac: "yes",
    year: "2012",
  },

  {
    id: 2,
    brand: "Volkswagen",
    model: "Golf",
    doors: "4/5",
    transmission: "automatic",
    fuel: "Diesel",
    cost: "$37",
    image1: golf1,
    image2: golf2,
    ac: "yes",
    year: "2008",
  },

  {
    id: 3,
    brand: "Toyota",
    model: "Camry",
    doors: "4/5",
    transmission: "manual",
    fuel: "Petrol",
    cost: "$30",
    image1: camry1,
    image2: camry2,
    ac: "yes",
    year: "2006",
  },
  {
    id: 4,
    brand: "BMW",
    model: "320",
    line: "(Modern-Line)",
    doors: "4/5",
    transmission: "automatic",
    fuel: "Diesel",
    cost: "$35",
    image1: bmw1,
    image2: bmw2,
    ac: "yes",
    year: "2012",
  },
  {
    id: 5,
    brand: "Mercedes-Benz",
    model: "GLK",
    doors: "4/5",
    transmission: "automatic",
    fuel: "Diesel",
    cost: "$50",
    image1: mercedes1,
    image2: mercedes2,
    ac: "yes",
    year: "2006",
  },
  {
    id: 6,
    brand: "Volkswagen",
    model: "Passat CC",
    doors: "4/5",
    transmission: "automatic",
    fuel: "Petrol",
    cost: "$25",
    image1: cc1,
    image2: cc2,
    ac: "yes",
    year: "2008",
  },
];

export const people = [
  {
    id: 1,
    name: "Michael Diaz",
    position: "Business Owner",
    image: diaz,
  },
  {
    id: 2,
    name: "Luke Miller",
    position: "Salesman",
    image: miller,
  },
  {
    id: 3,
    name: "Briana Ross",
    position: "Photographer",
    image: ross,
  },
  {
    id: 4,
    name: "Lauren Rivera",
    position: "Car Detailist",
    image: rivera,
  },
  {
    id: 5,
    name: "Martin Rizz",
    position: "Mechanic",
    image: rizz,
  },
  {
    id: 6,
    name: "Caterine Hunt",
    position: "Manager",
    image: hunt,
  },
];

export const faq = [
  {
    id: 1,
    question: "What is special about comparing rental car deals?",
    answer:
      "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
  },
  {
    id: 2,
    question: "How do I find the car rental deals?",
    answer:
      "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
  },
  {
    id: 3,
    question: "How do I find such low rental car prices?",
    answer:
      "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
  },
];

export const locationOptions = ["Cracow", "Gdansk", "Poznan", "Warsaw", "Wroclaw"];
