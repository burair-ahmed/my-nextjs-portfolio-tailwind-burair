import Image from "next/image";
export default function MustafaImg1() {
  return (
    <div className="max-smallscreens:hidden  w-full rounded mr-20 ml-9 ">
      <Image
        className="max-smallscreens:hidden w-full rounded-full mr-20 ml-9  "
        src="/mustafa.jpg"
        width={500}
        height={500} 
        alt="Mustafa's picture"
      />
    </div>
  );
}
