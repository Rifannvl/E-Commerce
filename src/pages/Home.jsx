import React from "react";
import Header from "../components/Header";
import CategoriesProducts from "./CategoriesProducts";
import HeroPages from "./HeroPages";
import FavoriteProduct from "../components/FavoriteProduct";
import OverView from "../ui/OverView";
import SpesialEdition from "../components/SpesialEdition";
import FAQSection from "../components/FAQSection";
import BaseLayout from "../layout/BaseLayout";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-x-hidden">
      <BaseLayout>
        <HeroPages />
        <FavoriteProduct />
        <CategoriesProducts />
        <OverView />
        <SpesialEdition />
        <FAQSection />
      </BaseLayout>
    </div>
  );
}
