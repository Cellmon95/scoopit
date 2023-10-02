"use client";

import styles from "./NotificationCard.module.css";
import Image from "next/image";

export default function NotificationCard() {
  return (
    <>
      <section className={styles.notificationCard}>
        <div className={styles.bellIcon}>
          <Image
            src={"./images/home/nav_bar/bell_ring.svg"}
            alt="search icon"
            width={22}
            height={22}
          ></Image>
        </div>

        <p>
          Oläst notis om att en serie snart släpps på netflix. Du kanske borde
          aktivera ditt abonnemang?
        </p>
      </section>
    </>
  );
}
