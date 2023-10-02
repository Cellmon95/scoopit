import React from "react";
import Link from "next/link";
import Loadingbackground from "../components/LoadingBackground";
import Scoopitgif from "../components/ScoopitGif";
import styles from "./page.module.css";

export default function StartPage() {
  return (
    <main className={styles.page}>
      <Link href="./welcome">
        <Loadingbackground></Loadingbackground>
        <div className={styles.gif}>
          <Scoopitgif></Scoopitgif>
        </div>
        <div className={styles.logo}>
          <h2>scoopit</h2>
        </div>
      </Link>
    </main>
  );
}
