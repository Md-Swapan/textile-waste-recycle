"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import ShowcaseSection from "./components/HomePageSectionComponents/ShowcaseSection/ShowcaseSection";
import GlobalTextileWaste from "./components/HomePageSectionComponents/GlobalTextileWaste/GlobalTextileWaste";
import RecyclingFacilities from "./components/HomePageSectionComponents/RecyclingFacilities/RecyclingFacilities";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  });

  return (
    <main className={styles.main}>
      <ShowcaseSection />
      <div className="container">
        <GlobalTextileWaste />
      </div>
        <RecyclingFacilities/>
    </main>
  );
}
