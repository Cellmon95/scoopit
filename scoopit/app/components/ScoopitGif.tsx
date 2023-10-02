import React from "react";
import Image from "next/image";
import scoopitGif from "public/scoopit.gif";

export default function Scoopitgif() {
  return (
    <div>
      <Image
        src={scoopitGif}
        alt="The scoopit logo as a gif"
        width={350}
        height={180}
      />
    </div>
  );
}
