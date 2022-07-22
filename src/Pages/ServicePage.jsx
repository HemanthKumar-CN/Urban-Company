import React from "react";
import PackageContainer from "../Components/Service_pages/PackageContainer";
import PackageContainer2 from "../Components/Service_pages/PackageContainer2";
import PackagesBox from "../Components/Service_pages/PackagesBox";
import Split from "../Components/Service_pages/Split";

const ServicePage = () => {
  return <div>
    <Split/>
    <div>
      <PackagesBox/>
    </div>
    <PackageContainer/>
    <PackageContainer2/>
  </div>;
};

export default ServicePage;
