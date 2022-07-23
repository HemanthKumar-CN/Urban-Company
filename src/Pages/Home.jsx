import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import HomeTopSection from "../Components/homepage/HomeTopSection";
import HomePageService from "../Components/homepage/HomePageService";
import { searchServices } from "../Utils/SearchResults";
import LandingPage_Navbar from "../Components/LandingPg_Navbar";
import LargeWithAppLinksAndSocial from "../Components/Footer";

const Home = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [scrollNav, setScrollNav] = useState(0);

  const myScrollFunc = function () {
    const y = window.scrollY;
    if (y >= 1000) {
      setScrollNav(y);
    } else {
      setScrollNav(y);
    }
  };

  window.addEventListener("scroll", myScrollFunc);
  
  useEffect(() => {
    if (query === "") {
      setSuggestions([]);
    } else {
      let newListofSuggestions = searchServices
        .filter((item) =>
          item.service.toLowerCase().indexOf(query) !== -1 ? true : false
        )
        .map((item) => item.service);
      setSuggestions(newListofSuggestions);
    }
    setTimeout(() => setLoading(false), 1000);
  }, [query]);

  return (
    <Box>
      <LandingPage_Navbar />
      <HomeTopSection
        loading={loading}
        onChange={(val) => setQuery(val)}
        setLoading={setLoading}
        suggestions={suggestions}
      />
      <HomePageService scrollNav={scrollNav}  />
      <LargeWithAppLinksAndSocial />
    </Box>
  );
};

export default Home;
