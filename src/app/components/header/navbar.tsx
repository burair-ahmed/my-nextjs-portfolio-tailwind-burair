import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className=" max-smallscreens:h-[7rem] max-smallscreens:inline max-smallscreens:justify-between max-smallscreens:items-center  max-sm:h-[5.95] max-sm:justify-between max-md:h-[5.95rem] max-md:justify-between w-[100%] h-28 bg-navbg flex fixed top-0 z-50 justify-between items-center">
      <Image
        className=" max-smallscreens:ml-4 max-sm:ml-[1rem] max-smallscreens:block inline ml-20 max-md:ml-1"
        src="/logo.png"
        alt="Logo for Mustafa company"
        width={240}
        height={0}
      />

      <ul className=" max-smallscreens:flex max-smallscreens:gap-[1.5rem]  max-smallscreens:ml-10  max-sm:mr-4 max-md:mr-10  flex bg-navbg gap-12 mr-24">
        <li className="  bg-navbg ">
          <Link
            className=" max-md:text-base bg-navbg text-white text-lg active:text-linkAct"
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="  bg-navbg">
          <Link
            className=" max-md:text-base bg-navbg text-white text-lg active:text-linkAct"
            href="/about"
          >
            About
          </Link>
        </li>
        <li className="  bg-navbg">
          <Link
            className=" max-md:text-base bg-navbg text-white text-lg active:text-linkAct"
            href="/skills"
          >
            Skills
          </Link>
        </li>
        <li className=" bg-navbg">
          <Link
            className=" max-md:text-base bg-navbg text-white text-lg active:text-linkAct"
            href="contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
