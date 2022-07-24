import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import React from "react";
import HomePageCarousel from "./HomePageCarousel";
import ServicesCategory from "../ServicesCategory";
import styles from "../../StyleComponents/Home.module.css";
import HomePageNav from "./HomePageNav";
const cardData = [
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png",
    service: "Appliance Repair",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png",
    service: "Home Painting",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png",
    service: "Cleaning & Pest",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1641213886588-90a903.png",
    service: "Disinfection",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png",
    service: "Home Repair",
  },
];
const newCategoryLaunches = [
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1646140576865-02aba1.jpeg",
    services: "Laser And Advanced Facial",
    text: "Advanced Skin Treatments",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg",
    services: "Furniture Making, Upholstery & Polish",
    text: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg",
    services: "Air Purifier",
    text: "Flat ₹100 off",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg",
    services: "Buy RO Water Purifier",
  },
];
const sliderData = [
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657006546486-545754.jpeg",

    text: "",
    services: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657018868112-a22d49.jpeg",
    text: "",
    services: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657030364575-5e172d.jpeg",
    text: "",
    services: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657019604034-39f21a.jpeg",
    text: "",
    services: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657018859209-d2b667.jpeg",
    text: "",
    services: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657018865703-199faf.jpeg",
    text: "",
    services: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657006546486-545754.jpeg",
    text: "",
    services: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657018868112-a22d49.jpeg",
    text: "",
  },
];
const appliances = [
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1640322586655-03f2a3.jpeg",
    services: "Instant Video Consult",
    text: "Free & instant daignosis",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png",
    services: "Geyser",
    text: "Starts at ₹249",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png",
    services: "Water Purifier",
    text: "Up to 45% Off",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg",
    services: "Air Purifier",
    text: "Flat ₹100 Off",
  },
];
const salon = [
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg",
    text: "Free Waxing",
    services: "Salon Prime",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg",
    text: "Flat ₹100 Off ",
    services: "Salon For Men",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png",
    text: "Free head massage",
    services: "Spa For Women",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg",
    text: "Starts at ₹499 ",
    services: "Massage For Men",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_9b68f7b0.jpeg",
    text: "Artists Trained by Chandni Singh Studio",
    services: "Part Makeup",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg",
    text: "Free Waxing",
    services: "Salon Prime",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg",
    text: "Flat ₹100 Off ",
    services: "Salon For Men",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png",
    text: "Free head massage",
    services: "Spa For Women",
  },
];
const cleaning = [
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg",
    services: "Bathroom And Kitchen Cleaning",
    text: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg",
    services: "Full Home Cleaning",
    text: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg",
    services: "Sofa & Carpet Cleaning",
    text: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg",
    services: "Cockroach, Ant & General Pest Control",
    text: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632490257439-ef28d2.jpeg",
    services: "Bed Bugs Control",
    text: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632474326407-0aae21.jpeg",
    services: "Termite Control",
    text: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg",
    services: "Sofa & Carpet Cleaning",
    text: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg",
    services: "Cockroach, Ant & General Pest Control",
    text: "",
  },
];
const UXluxury = [
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883165804-025664.png",
    services: "Salon Luxe",
    text: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164057-dd5910.png",
    services: "Salon For Men Royale",
    text: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164904-165c1e.png",
    services: "Spa Luxe",
    text: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164502-08f9f6.png",
    services: "Massage Therapy For Men Royale",
    text: "",
  },
];
const homerepairs = [
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg",
    services: "Furniture Making, Upholstery & Polish",
    text: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg",
    services: "Carpenters",
    text: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_a91b73d0.jpeg",
    services: "Electricians",
    text: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg",
    services: "Plumber",
    text: "",
  },
];

const HomePageService = ({ scrollNav }) => {
  return (
    <Box>
      {/* HOME SERVICES CARDS */}
      <Heading
        fontSize="32px"
        fontWeight="700"
        lineHeight="48px"
        m="4% 0 10% 0"
      >
        Home Services
      </Heading>
      <ServicesCategory data={cardData} />
      <Divider className={styles.dividers} />
      {scrollNav>1000 ? <HomePageNav/> :""}
      {/* CAROUSAL */}
      <HomePageCarousel data={sliderData} hideArrow={false} />
      <Divider className={styles.dividers} />

      {/* NEW CATEGORIES CARDS */}
      <Heading className={styles.headings}>New Category Launches</Heading>
      <HomePageCarousel data={newCategoryLaunches} hideArrow={true} />
      <Divider className={styles.dividers} />

      {/* APPLIANCE CARDS */}
      <Heading className={styles.headings}>Appliances</Heading>
      <Text className={styles.text}>
        Servicing, Repair, Installation & Uninstallation
      </Text>
      <HomePageCarousel data={appliances} hideArrow={true} />
      <Divider className={styles.dividers} />

      {/* SALON SPA SLIDER */}
      <Heading className={styles.headings}>
        Salon, Spa and Massage services
      </Heading>
      <Text className={styles.text}>
        Hygienic & Single use products | Low-contact services
      </Text>
      <HomePageCarousel data={salon} hideArrow={false} />
      <Divider className={styles.dividers} />

      {/* CLEANING PEST CONTROL SLIDER */}
      <Heading className={styles.headings}>Cleaning & Pest Control</Heading>
      <HomePageCarousel data={cleaning} hideArrow={false} />
      <Divider className={styles.dividers} />

      {/* UC LUXURY CARDS */}
      <Heading className={styles.headings}>UC Luxury Experience</Heading>
      <Text className={styles.text}>
        Top Professionals | Best Brands | Premium Experience
      </Text>
      <HomePageCarousel data={UXluxury} hideArrow={true} />
      <Divider className={styles.dividers} />

      {/* HOME REPAIRS */}
      <Heading className={styles.headings}>Home Repairs</Heading>
      <HomePageCarousel data={homerepairs} hideArrow={true} />
      <Divider className={styles.dividers} />
    </Box>
  );
};

export default HomePageService;
