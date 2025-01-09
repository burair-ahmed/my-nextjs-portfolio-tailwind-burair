import Image from "next/image";

export default function Experience() {
  return (
    <div className="max-smallscreens:overflow-hidden flex justify-center items-center bg-[#7252f3] w-full h-full">
      <div className="max-smallscreens:w-[90%]  w-[60%] h-[90vh] bg-white flex justify-center rounded-[3rem] mt-40 shadow-2xl	 shadow-black flex-col mb-36">
        <div className="max-smallscreens:ml-[4rem] max-1030scr:ml-56 max-768scr:ml-32  flex bg-transparent mt-[5.5rem] text-4xl ml-[23rem] relative	 top-[-6.5rem]">
          Contact Us
        </div>

        <div className=" flex bg-transparent justify-between ">
          <div className=" bg-transparent">
            <Image
              className=" max-768scr:hidden max-1030scr:hidden bg-transparent ml-20 w-80"
              src="/contact-plane.png"
              alt="Image of a paper plane "
              width={300}
              height={0}
            />
          </div>
          <div className="  bg-transparent flex flex-col gap-6 mr-28 relative top-[-3rem]">
            <label
              className=" max-smallscreens:ml-6 max-768scr:ml-8 text-lg bg-transparent"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              className=" max-smallscreens:ml-6 max-768scr:ml-8 w-[15rem] h-[3rem] rounded-[0.75rem] pl-2 bg-[#f6f6f6] border-[#c6bfbfca] border-[1px] "
              type="text"
              placeholder="abc@gmail.com"
            />

            <label className=" max-smallscreens:ml-6 max-768scr:ml-8 text-lg bg-transparent" htmlFor="name">
              Your name
            </label>
            <input
              className="max-smallscreens:ml-6 max-768scr:ml-8 w-[15rem] h-[3rem] rounded-[0.75rem]  pl-2 bg-[#f6f6f6] border-[#c6bfbfca] border-[1px]"
              type="text"
              placeholder="Mustafa"
            />

            <label
              className=" max-smallscreens:ml-6 max-768scr:ml-8 text-lg bg-transparent"
              htmlFor="message"
            >
              Your message
            </label>
            <input
              className="max-1030scr:w-[20rem] max-smallscreens:ml-6 max-768scr:ml-8 max-smallscreens:w-[15rem] w-[22rem] h-[6rem] rounded-[0.75rem] pl-2 bg-[#f6f6f6] border-[#c6bfbfca] border-[1px] form-msg"
              type="text"
              placeholder="Do you provide web development services?"
            />

            <button className=" max-smallscreens:w-[12rem] max-smallscreens:ml-[3.25rem] w-28 h-12 max-768scr:ml-16 max-768scr:w-80 text-white bg-[#7252f3] rounded-2xl active:bg-[#9d89ea]">
              Sent message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
