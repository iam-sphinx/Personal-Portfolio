import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between mt-6 mb-24">
        <div className="flex-1 tracking-wide flex flex-col gap-6">
          <h1 className="heading-1 tracking-wider">More than a Developer!</h1>
          <h1 className="heading-3 mt-12 tracking-wider">Who i am ?</h1>
          <p>
            👋 Hey there! I&apos;m Kandarp, a passionate frontend developer
            based in India. Over the years, I&apos;ve honed my skills in HTML,
            CSS, and JavaScript to create stunning user interfaces that not only
            look great but also function seamlessly across various devices and
            browsers.
          </p>
          <p>
            ✨ My expertise extends to modern frontend frameworks like React.js
            and Vue.js, where I thrive in architecting dynamic and responsive
            web applications. I&apos;m well-versed in utilizing state management
            libraries like Redux and Vuex to efficiently manage application
            data, ensuring a smooth user experience.
          </p>

          <p>
            🌏 I spent my childhood in Singrauli, Madhya Pradesh, where I
            attended D.A.V Public School for my schooling. Following that, I
            pursued a Bachelor of Technology in Computer Science and Engineering
            at CSJM University, Kanpur.
          </p>
          <p>
            💡 I excel in bringing abstract concepts to life through visually
            captivating designs. Together, let&apos;s join forces and translate
            your ideas into an unforgettable digital presence.
          </p>
        </div>

        <div className="flex-1 flex justify-end items-center">
          <div className="size-[400px] relative">
            <Image
              src="/dev.png"
              quality={100}
              fill
              alt="not found"
              className="object-cover w-full h-full "
            />
          </div>
        </div>
      </div>

      <Skills />
      <Experience />
    </section>
  );
};

export default About;
