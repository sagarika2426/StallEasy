import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className={styles.page}>
    <Navbar/>
    <HomePage/>
    </div>
  );
}
