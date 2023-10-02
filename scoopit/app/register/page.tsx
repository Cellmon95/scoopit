"use client";
import React, { useState } from "react";
import Link from "next/link";
import BackArrow from "../components/BackArrow";
import styles from "./page.module.css";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Register() {
  const supabase = createClientComponentClient();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    document.location.href = "/home";
  }

  return (
    <>
      <main>
        <section className={styles.registerHeader}>
          <div className={styles.registerBackground}></div>
          <BackArrow></BackArrow>

          <div className={styles.registerWelcome}>
            <h2>SKAPA ETT KONTO</h2>
            <p>Skriv in dina uppgifter och kom igång.</p>
          </div>
        </section>

        <section>
          <form className={styles.registerFields} onSubmit={handleSubmit}>
            <p>Email</p>
            <input
              id="registered"
              className={`${styles.registerField} ${styles.emailField}`}
              type="email"
              autoComplete="email"
              name="email"
              required
              placeholder="Exempel@mail.se"
              value={formData.email}
              onChange={handleInputChange}
            />

            <p>Namn</p>
            <input
              className={`${styles.registerField} ${styles.nameField}`}
              type="text"
              name="name"
              placeholder="Ditt namn"
              value={formData.name}
              onChange={handleInputChange}
            />

            <p>Lösenord</p>
            <input
              id="registerdPassword"
              className={`${styles.registerField} ${styles.passwordField}`}
              type="password"
              name="password"
              autoComplete="password"
              required
              placeholder="Lösenord"
              value={formData.password}
              onChange={handleInputChange}
            />

            {/* <button
              type="submit"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "60px",
                backgroundColor: "#320029",
                borderRadius: "50px",
                color: "var(--primr-p-bas-ljus, #ffe2fa)",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                marginTop: "32px",
                marginBottom: "8px",
              }}
            >
              Skapa konto
            </button> */}

            <Link href="./sync-subscriptions">
              <div className={styles.registerButton}>Skapa konto</div>
            </Link>

            <div className={styles.keepLoggedIn}>
              <input
                type="checkbox"
                id="keepLoggedIn"
                className={styles.checkbox}
              />
              <label htmlFor="keepLoggedIn" className={styles.checkboxLabel}>
                <h2>Håll mig inloggad</h2>
              </label>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
