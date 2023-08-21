import React from "react";
import InputCom from "./Helpers/InputCom";
import InputQuantityCom from "./Helpers/InputQuantityCom";
import PageTitle from "./Helpers/PageTitle";
import SearchBox from "./Helpers/SearchBox";
import SectionStyleFour from "./Helpers/SectionStyleFour";
import SectionStyleOne from "./Helpers/SectionStyleOne";
import SectionStyleThree from "./Helpers/SectionStyleThree";
import SectionStyleThreeHomeTwo from "./Helpers/SectionStyleThreeHomeTwo";
import SectionStyleTwo from "./Helpers/SectionStyleTwo";
import SectionStyleTwoHomeTwo from "./Helpers/SectionStyleTwoHomeTwo";
import Selectbox from "./Helpers/Selectbox";
import SliderCom from "./Helpers/SliderCom";

import StarRating from "./Helpers/StarRating";

export default function Test() {
  const exampleData = {
    className: "section",
    categoryTitle: "Electronics",
    sectionTitle: "Featured Products",
    seeMoreUrl: "/electronics",
    brands: ["Brand A", "Brand B", "Brand C"],
    products: [
      { id: 1, name: "Product 1", price: 199.99 },
      { id: 2, name: "Product 2", price: 299.99 },
      { id: 3, name: "Product 3", price: 149.99 },
      { id: 4, name: "Product 4", price: 249.99 },
      { id: 5, name: "Product 5", price: 179.99 },
      { id: 6, name: "Product 6", price: 349.99 },
      { id: 7, name: "Product 7", price: 129.99 },
      { id: 8, name: "Product 8", price: 279.99 },
      { id: 9, name: "Product 9", price: 209.99 },
      { id: 10, name: "Product 10", price: 159.99 },
    ],
    categoryBackground: "background-image-url.jpg",
  };
  return (
    <div className="flex flex-col">
      <div className="bg-black text-white">1. SectionStyleOne</div>
      <SectionStyleOne {...exampleData} />
      <div className="bg-black text-white">2. SectionStyleTwo</div>
      <SectionStyleTwo {...exampleData} />
      <div className="bg-black text-white">3. SectionStyleThree</div>
      <SectionStyleThree {...exampleData} />
      <div className="bg-black text-white">4. SectionStyleFour</div>
      <SectionStyleFour {...exampleData} />
      <div className="bg-black text-white">5. SectionStyleTwoHomeTwo</div>
      <SectionStyleTwoHomeTwo {...exampleData} />
      <div className="bg-black text-white">6. SectionStyleThreeHomeTwo</div>
      <SectionStyleThreeHomeTwo {...exampleData} />
      <div className="bg-black text-white">7. SearchBox</div>
      <SearchBox />
      <div className="bg-black text-white">8. Selectbox</div>
      <Selectbox />
      <div className="bg-black text-white">9. InputCom</div>
      <InputCom />
      <div className="bg-black text-white">10. InputQuantityCom</div>
      <InputQuantityCom />
      <div className="bg-black text-white">11. PageTitle</div>
      <PageTitle />
      <div className="bg-black text-white">12. SliderCom</div>
      <SliderCom />
      <div className="bg-black text-white">13. StarRating</div>
      <StarRating />
    </div>
  );
}
