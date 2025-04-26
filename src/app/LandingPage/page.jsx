"use client"; 

import React, { useState } from "react";
import Listing from "./listing";
import Hero from "./hero";
import { Pagination } from "@/components/ui/pagination";
import { Header } from "@/components/header";


const Landingpage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      {/* <Header onSearch={setSearchQuery} /> */}
     
      < Hero/>
      <Listing searchQuery={searchQuery} />
      <Pagination />
    </div>
  );
};

export default Landingpage;
