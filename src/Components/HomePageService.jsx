import { Box, Divider, Heading} from "@chakra-ui/react";
import React from "react";
import HomePageCarousel from "./HomePageCarousel";
import ServicesCategory from "./ServicesCategory";


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
    text: "Laser And Advanced Facial",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg",
    text: "Furniture Making, Upholstery & Polish",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg",
    text: "Air Purifier",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg",
    text: "Buy RO Wather Purifier",
  },
];

const sliderData = [
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657006546486-545754.jpeg",
    service: "img-1",
    text:""
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657018868112-a22d49.jpeg",
    service: "img-2",
    text:""
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657030364575-5e172d.jpeg",
    service: "img-3",
    text:""
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657019604034-39f21a.jpeg",
    service: "img-4",
    text:""
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657018859209-d2b667.jpeg",
    service: "img-5",
    text:""
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657018865703-199faf.jpeg",
    service: "img-6",
    text:""
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657006546486-545754.jpeg",
    service: "img-7",
    text:""
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657018868112-a22d49.jpeg",
    service: "img-8",
    text:""
  }
];

const HomePageService = () => {
  return (
    <Box>
      <Heading fontSize="32px" fontWeight="700" lineHeight="48px" m="4% 0 4% 0">
        Home Services
      </Heading>
      <br />
      <br />
      <br />
      <ServicesCategory data={cardData} />
      <Divider h="1rem" mt="5%" bg={"#ececec"} fontSize="xl" fontWeight="800" />
      <HomePageCarousel data={sliderData} hideArrow={false} />
      <Divider h="1rem" mt="5%" bg={"#ececec"} fontSize="xl" fontWeight="800" />
      <br />
      <br />
      <br />
      <Heading>New Category Launches</Heading>
      <HomePageCarousel data={newCategoryLaunches} hideArrow={true} />
    </Box>
  );
};

export default HomePageService;
