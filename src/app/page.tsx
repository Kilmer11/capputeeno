"use client"

import styles from "./page.module.css";
import { FilterBar } from "../components/filterBar";
import { Productslist } from "@/components/products-list";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function Home() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <FilterBar/>
        <Productslist/>
      </main>
    </QueryClientProvider>
  );
}
