import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import AddSubscriptionMenu from "../components/AddSubscriptionMenu";
import aftonbladet from "/public/icons/aftonbladet+-small.png";
import apple from "/public/icons/applemusic-small.png";
import audiable from "/public/icons/audible-small.png";
import disney from "/public/icons/disney+-small.png";
import hbo from "/public/icons/hbo-small.png";
import netflix from "/public/icons/netflix-small.png";
import spotify from "/public/icons/spotify-small.png";
import soundcloud from "/public/icons/soundcloud-small.png";
import vimeo from "/public/icons/vimeo-small.png";
import youtube from "/public/icons/youtube-small.png";
import styles from "./page.module.css";

export default function Addsubscriptions() {
  return (
    <main>
      <section className={styles.addHeader}>
        <h2>HITTADE APPAR</h2>
        <p>Lägg till de appar du vill att Scoopit ska hålla koll på.</p>
      </section>

      <section className={styles.addSubscriptions}>
        <div className={styles.subscription}>
          <Image
            src={aftonbladet}
            alt="Aftonbladet logo"
            width={56}
            height={56}
          />
          <h2>Aftonbladet+</h2>
          <input type="checkbox" className={styles.checkbox} />
        </div>

        <div className={styles.subscription}>
          <Image src={apple} alt="Apple Music logo" width={56} height={56} />
          <h2>Apple Music</h2>
          <input
            type="checkbox"
            id="keepLoggedIn"
            className={styles.checkbox}
          />
        </div>

        <div className={styles.subscription}>
          <Image src={audiable} alt="Audible logo" width={56} height={56} />
          <h2>Audible</h2>
          <input
            type="checkbox"
            id="keepLoggedIn"
            className={styles.checkbox}
          />
        </div>

        <div className={styles.subscription}>
          <Image src={disney} alt="Disney+ logo" width={56} height={56} />
          <h2>Disney+</h2>
          <input
            type="checkbox"
            id="keepLoggedIn"
            className={styles.checkbox}
          />
        </div>

        <div className={styles.subscription}>
          <Image src={hbo} alt="HBO logo" width={56} height={56} />
          <h2>HBO</h2>
          <input
            type="checkbox"
            id="keepLoggedIn"
            className={styles.checkbox}
          />
        </div>

        <div className={styles.subscription}>
          <Image src={netflix} alt="Netflix logo" width={56} height={56} />
          <h2>Netflix</h2>
          <input
            type="checkbox"
            id="keepLoggedIn"
            className={styles.checkbox}
          />
        </div>

        <div className={styles.subscription}>
          <Image src={spotify} alt="Spotify logo" width={56} height={56} />
          <h2>Spotify</h2>
          <input
            type="checkbox"
            id="keepLoggedIn"
            className={styles.checkbox}
          />
        </div>

        <div className={styles.subscription}>
          <Image
            src={soundcloud}
            alt="Soundcloud logo"
            width={56}
            height={56}
          />
          <h2>Soundcloud</h2>
          <input
            type="checkbox"
            id="keepLoggedIn"
            className={styles.checkbox}
          />
        </div>

        <div className={styles.subscription}>
          <Image src={vimeo} alt="Vimeo logo" width={56} height={56} />
          <h2>Vimeo</h2>
          <input
            type="checkbox"
            id="keepLoggedIn"
            className={styles.checkbox}
          />
        </div>

        <div className={styles.subscription}>
          <Image src={youtube} alt="Youtube logo" width={56} height={56} />
          <h2>Youtube</h2>
          <input
            type="checkbox"
            id="keepLoggedIn"
            className={styles.checkbox}
          />
        </div>
      </section>

      <div className={styles.addButton}>
        <Link href="./home">Lägg till markerade</Link>
      </div>
    </main>
  );
}
