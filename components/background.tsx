import Image from "next/image";
import backgoundImage from "../public/images/NorwayScenery.jpg";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Image
        alt="BackgoundImage"
        src={backgoundImage}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
