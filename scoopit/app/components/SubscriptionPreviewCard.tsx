import Image from "next/image";
import styles from "./SubscriptionPreviewCard.module.css";

export interface ISubscription {
  name: string;
  width: number;
  height: number;
  alt: string;
  price: number;
  img: string;
  startDate: Date;
  category: number;
  hidden: boolean;
}

interface SubscriptionPreviewCardProps {
  prop: ISubscription;
}

export default function SubscriptionPreviewCard(
  props: SubscriptionPreviewCardProps
) {
  return (
    <>
      <div
        className={`${styles.previewCardContainer} ${
          props.prop.hidden ? styles.hide : ""
        }`}
        id="previewCardContainer"
      >
        <div className={styles.leftSide}>
          <Image
            src={props.prop.img}
            width={props.prop.width}
            height={props.prop.height}
            alt={props.prop.alt}
          />
          <div className={styles.infoTextPart}>
            <h2>{props.prop.name}</h2>
            <p>Pris</p>
          </div>
        </div>

        <div className={styles.rightSide}>
          <p>{props.prop.price}kr/mån</p>
        </div>
      </div>
    </>
  );
}
