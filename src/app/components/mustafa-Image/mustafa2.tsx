import Image from "next/image";
export default function MustafaImg2() {
  return (
    <div className=" max-smallscreens:hidden max-md:w-[50rem] w-full rounded max-md:mr-8 mr-6 ml-8">
      <Image
        className="max-smallscreens:hidden max-md:w-[40rem] w-96 rounded-full max-md:mr-8 mr-10 ml-8"
        src="/mustafa2.jpg"
        width={300}
        height={300}
        alt="Mustafa's picture"
      />
    </div>
  );
}
