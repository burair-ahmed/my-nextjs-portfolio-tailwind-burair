import Image from "next/image";
export default function BurairImg1() {
  return (
    <div className="max-smallscreens:hidden w-full rounded">
      <Image
        className="max-smallscreens:hidden w-[300px] h-[300px] rounded-full"
        src="/burair.webp"
        width={500}
        height={500} 
        alt="Burair's Picture"
      />
    </div>
  );
}
