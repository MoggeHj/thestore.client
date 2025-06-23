import Image from "next/image";
import backgoundImage from "../public/images/backgrounds/NorwayScenery.jpg";

export default function MainBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Image
        alt="BackgoundImage"
        src={backgoundImage}
        priority
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
