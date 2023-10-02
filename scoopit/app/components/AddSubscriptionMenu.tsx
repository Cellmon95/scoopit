// components/MyLineChart.tsx
"use client";
import styles from "./Menu.module.css";
import { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import DatePicker from "react-datepicker";
import { MenuProp } from "./MainMenu";

import "react-datepicker/dist/react-datepicker.css";

export default function AddSubscriptionMenu(prop: MenuProp) {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <>
      <section
        className={`${styles.overlayMenu} ${prop.hidden ? styles.hide : ""}`}
      >
        <h4 className={styles.menuHeader}>Meny</h4>
        <Dropdown
          className={styles.dropDownCategory}
          controlClassName={styles.dropDownCategoryBorder}
          options={options}
          value={defaultOption}
          placeholder="Select an option"
        />

        <section>
          <h4 className={styles.menuHeader}>Namn på abonnemang</h4>
          <div className={styles.center}>
            <input className={styles.textInput} type="text"></input>
          </div>
        </section>

        <section>
          <h4 className={styles.menuHeader}>pris/mån</h4>
          <div className={styles.center}>
            <input className={styles.textInput}></input>
          </div>
        </section>

        <section>
          <h4 className={styles.menuHeader}>Datum för registrering</h4>
          <div className={styles.center}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date || new Date())}
            />
          </div>
        </section>

        <section className={styles.center}>
          <button className={styles.addButton}>Lägg till abonnemang</button>
        </section>
      </section>
    </>
  );
}
