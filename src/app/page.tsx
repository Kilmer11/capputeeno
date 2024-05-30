"use client"

import styles from "./page.module.css";
import { FilterBar } from "../components/filterBar";
import { Productslist } from "@/components/products-list";

export default function Home() {
  return (
      <main className={styles.main}>
        <FilterBar/>
        <Productslist/>
      </main>
  );
}
