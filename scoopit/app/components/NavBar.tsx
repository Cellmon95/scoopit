// components/MyLineChart.tsx
"use client";
import styles from "./NavBar.module.css";
import Image from "next/image";
import NotificationMenu from "./NotificationMenu";
import MainMenu from "./MainMenu";
import AddSubscriptionMenu from "./AddSubscriptionMenu";
import { useState } from "react";

export default function NavBar() {
  let [hideMainMenu, setHideMainMenu] = useState(true);
  let [hideNotificationMenu, setHideNotificationMenu] = useState(true);
  let [hideAddSubscriptionMenu, setHideAddSubscriptionMenu] = useState(true);

  function onClickMainMenuButton(e: any) {
    setHideMainMenu(hideMainMenu ? false : true);
  }

  function onClickAddSubscriptionMenu(e: any) {
    setHideAddSubscriptionMenu(hideAddSubscriptionMenu ? false : true);
  }
  function onClickNotificationMenu(e: any) {
    setHideNotificationMenu(hideNotificationMenu ? false : true);
  }

  return (
    <>
      <div
        className={`${styles.addButton} ${styles.roundButton} `}
        onClick={onClickAddSubscriptionMenu}
      >
        <Image
          src={"./images/home/nav_bar/plus.svg"}
          width={30}
          height={30}
          alt="add"
        ></Image>
      </div>
      <section className={styles.navBar}>
        <section className={styles.leftSection}>
          <a href="/home">
            <div className={`${styles.homeButton} ${styles.roundButton} `}>
              <Image
                src={"./images/home/nav_bar/home.svg"}
                width={20}
                height={20}
                alt="home"
              ></Image>
            </div>
          </a>
          <a href="javascript:history.back()">
            <div className={`${styles.backButton} ${styles.roundButton} `}>
              <Image
                src={"./images/home/nav_bar/arrow_left.svg"}
                width={20}
                height={20}
                alt="back"
              ></Image>
            </div>
          </a>
        </section>

        <section className={styles.rightSection}>
          <div
            className={`${styles.notifyButton} ${styles.roundButton} `}
            onClick={onClickNotificationMenu}
          >
            <Image
              src={"./images/home/nav_bar/bell.svg"}
              width={20}
              height={20}
              alt="notify"
            ></Image>
          </div>
          <div
            className={`${styles.menuButton} ${styles.roundButton} `}
            onClick={onClickMainMenuButton}
          >
            <Image
              src={"./images/home/nav_bar/menu.svg"}
              width={30}
              height={30}
              alt="menu"
            ></Image>
          </div>
        </section>
      </section>

      <NotificationMenu hidden={hideNotificationMenu}></NotificationMenu>
      <MainMenu hidden={hideMainMenu}></MainMenu>
      <AddSubscriptionMenu
        hidden={hideAddSubscriptionMenu}
      ></AddSubscriptionMenu>
    </>
  );
}
