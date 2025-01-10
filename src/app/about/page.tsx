import BurairImg2 from "../components/burair-Image/burair2";

export default function About() {
  return (
    <section className="mt-40 px-6 text-center items-center">
       
      <div className="flex flex-col justify-center items-center">
      <div className="mb-8 text-center">
          <BurairImg2 />
        </div>
        <h1 className="text-5xl font-bold mb-8">About Me</h1>
        <p className="text-lg leading-relaxed max-w-3xl mb-8">
          Hi, I am Burair Ahmed, a dedicated AI developer and full-stack web developer with a deep-rooted passion for programming and technology. I have completed my intermediate, I have been expanding my technical expertise through specialized courses in artificial intelligence, web development, and cloud computing at GIAIC.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-4xl font-semibold mb-6">My Journey</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          My journey into technology began with a simple curiosity about how software can enhance lives. Starting with foundational web development, I progressed to mastering HTML, CSS, and TypeScript. Today, I am delving into advanced technologies like Next.js and TailwindCSS, driven by my passion for building user-friendly web applications.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-4xl font-semibold mb-6">Beyond Code</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          When I am not coding, I enjoy staying active through gaming and little bit sports like cricket. I am also an active learner trying to  learn different things.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-4xl font-semibold mb-6">My Vision</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          I believe technology has the power to revolutionize daily life. My vision is to create innovative solutions that simplify tasks, whether through intelligent AI systems, cutting-edge web platforms, or scalable cloud technologies. Collaboration with like-minded individuals motivates me to push the boundaries of what's possible.
        </p>
      </div>
    </section>
  );
}
