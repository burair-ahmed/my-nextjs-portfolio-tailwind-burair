import MustafaImg2 from "../components/mustafa-Image/mustafa2";

export default function About() {
  return (
    
      <div className=" flex mt-36">
        <div className="  ml-6 ">
          <div className="  font-sans	mb-7 text-5xl	">About me</div>
          <div className="font-sans w-auto">
            Hello! I'm Mustafa Yamin, an enthusiast for learning AI developer and fullstack
            web development with a strong foundation in the fundamentals of programming.
            I'm currently pursuing a Bachelor of Business Administration (BBA)
            from FUUAST University while honing my technical expertise through
            courses in artificial intelligence, web development, and cloud
            computing at GIAIC.
            <br />
            Over the years, I've had the opportunity to work on exciting
            projects, including serving as a frontend developer for the NASA
            Space Apps Challenge Hackathon and coordinating engaging sessions at Stream
            Academy International. I also have experience volunteering for
            organizations like DI Pakistan and Mommyology, where I facilitated
            innovative learning experiences for children and teens.
          </div>
          <div className="font-sans mb-5 mt-7 text-4xl">My Journey</div>

          <div className="font-sans w-auto">
            My journey began with a curiosity for technology and how it can be
            used to make the world a better place. Starting with simple web
            development, I quickly moved to mastering HTML, CSS, TypeScript, and
            currently I am learning Next.js and TailwindCSS. This evolved into a deep
            passion for making web-apps.
         
          </div>

          <div className="font-sans mb-5 mt-7 text-4xl">Beyond Code</div>
          <div className="font-sans w-auto">
            When I'm not coding or developing, I enjoy indulging in physical
            activities like Cricket, Swiming, and Football. You can say these
            are my hobies. I also read books based on self improvment.
          </div>
          <div className="font-sans mb-5 mt-7 text-4xl">My Vision</div>
          <div className="  font-sans w-auto pb-9">
            I believe in the transformative power of technology. My vision is to
            create solutions that enhance everyday life, whether it's through
            smarter AI systems, innovative web platforms, or scalable cloud
            solutions. I'm always looking for ways to push the envelope and
            collaborate with others who share a similar drive.
          </div>
        </div>

        <MustafaImg2 />
      </div>
   
    
  );
}
