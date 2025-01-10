import BurairImg1 from "./components/burair-Image/burair1";

export default function Home() {
  return (
    <div className="mt-40 px-6 flex flex-col md:flex-row items-center md:items-start">
      {/* Left Column - Image Section */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-6">
        <BurairImg1 />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
    
        <h1 className="text-5xl font-bold text-center md:text-left mb-6">Burair Ahmed</h1>

        <p className="text-lg leading-relaxed text-center md:text-left mb-8">
          Hello! I am Burair Ahmed, an AI developer and frontend web developer passionate about transforming ideas into impactful solutions. I have contributed to innovative projects like the NASA Space Apps Challenge, where I explored cutting-edge technology and creativity. I specialize in frontend web development, combining innovation with seamless user experiences.
          <br />
          <br />
          I have completed my Intermediate education and am actively advancing my technical expertise in web technologies and artificial intelligence through specialized learning at GIAIC. I thrive in dynamic environments that challenge me to innovate and collaborate with like-minded individuals.
        </p>

<h2 className="text-4xl font-semibold text-center md:text-left mb-4">Let's Connect</h2>

        <p className="text-lg leading-relaxed text-center md:text-left">
          I am always eager to connect with developers, educators, and tech enthusiasts. Whether you are looking to collaborate on web projects, discuss innovative ideas, or exchange knowledge about technology, I would love to hear from you!
          <br />
          <br />
          Feel free to reach out to me via email at 
          <a href="mailto:dev.burairahmed@gmail.com" className="text-blue-600 hover:underline"> dev.burairahmed@gmail.com </a>
          or connect with me on LinkedIn. Lets create something amazing together!
        </p>
      </div>
    </div>
  );
}
