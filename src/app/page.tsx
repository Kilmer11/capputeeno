"use client"

import styles from "./page.module.css";
import { FilterBar } from "../components/filterBar";
import { Productslist } from "@/components/products-list";
import { DefaultPageLayout } from "@/components/default-page-layout";

export default function Home() {
  return (
    <DefaultPageLayout>
      <main className={styles.main}>
        <FilterBar/>
        <Productslist/>
      </main>
    </DefaultPageLayout>
  );
}
