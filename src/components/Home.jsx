import React from "react";
import { useState, useEffect } from "react";
// import earthImage from '../images/earth.jpg';
import whyChooseUs from "../images/whychooseus.jpg";
import process from "../images/process.jpg";
import technology from "../videos/technology.mp4";
// import buildingVideo from '../videos/building.mp4';
import ContactForm from "../components/ContactForm";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const randomTexts = [
    "Enhance your online presence with personalized web solutions designed to reflect your brand identity and meet your specific requirements. Our team specializes in creating visually compelling designs and intuitive user experiences that resonate with your audience and drive engagement.",
    "Amplify your digital footprint with customized web solutions that are meticulously crafted to align with your business objectives and surpass your expectations. Whether you're launching a new website or revamping an existing one, we're dedicated to translating your ideas into polished, professional platforms that stand out in today's competitive landscape.",
    "Elevate your brand's online performance with tailor-made web solutions that prioritize both form and function. From eye-catching aesthetics to seamless navigation, we're committed to bringing your vision to life in a way that not only captivates your audience but also delivers tangible results for your business.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % randomTexts.length);
        setAnimate(false);
      }, 300); // Adjust this delay to match your animation duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero relative overflow-hidden h-screen">
        <video
          autoPlay
          loop
          className="absolute inset-0 w-full h-full object-cover z-10"
        >
          <source src={technology} type="video/mp4" />
          Your browser does not support the HTML5 video tag.
        </video>

        <div className="container mx-auto py-36 flex flex-col items-center justify-center h-full relative z-20">
          <h1 className="text-4xl font-bold text-white text-center px-4 py-4">
            Welcome to TJ Consortium
          </h1>
          <p
            className={`opacity ${
              animate ? "opacity-0" : ""
            } text-lg text-white text-center max-w-xl px-4 py-4 transition-opacity duration-500 ease-in-out`}
          >
            {randomTexts[currentIndex]}
          </p>
          <a
            href="#"
            className="px-4 py-4 mx-4 my-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Image Container 
        <div className="container px-20 py-16 w-full lg:w-2/5">
          <img src={earthImage} alt="Earth Logo" className="rounded-lg object-cover" />
        </div> */}
      <div className="container flex flex-col items-center justify-center py-7">
        <h1 className="text-4xl text-center font-bold text-black">
          Why Choose TJ Consortium?
        </h1>
      </div>

      <div className="flex flex-wrap bg-blue-950">
        <div className="container px-20 py-16 flex flex-col items-center justify-center md:w-1/2">
          <img
            src={whyChooseUs}
            alt="Earth Logo"
            className="rounded-lg object-cover"
          />
        </div>

        <div className="container px-20 py-16 flex flex-col items-center justify-center md:w-1/2">
          <ol className="list-disc">
            <li className="text-lg text-white max-w-xl mb-4">
              Expertise: Our team brings years of experience and a passion for
              innovation to every project.
            </li>
            <li className="text-lg text-white max-w-xl mb-4">
              Custom Solutions: We understand that one size doesn’t fit all.
              That’s why we craft tailor-made solutions to meet your specific
              goals.
            </li>
            <li className="text-lg text-white max-w-xl mb-4">
              Client-Centric Approach: Your success is our priority. We
              collaborate closely with you to ensure your satisfaction every
              step of the way.
            </li>
          </ol>
        </div>
      </div>

      <div className="container flex flex-col items-center justify-center py-7">
        <h1 className="text-4xl text-center font-bold text-black">
          Our Services
        </h1>
      </div>

      <div className="flex flex-wrap bg-blue-950">
        <div className="container py-4 flex flex-col items-center justify-center md:w-1/2">
          <p className="text-8xl mb-10">&#9973;</p>
          <h1 className="text-white text-xl text-center font-bold mb-4">
            Custom Web Development
          </h1>
          <p className="text-lg text-white max-w-xl text-center">
            Transform your digital vision into reality with our custom web
            development service. Whether you need a sleek corporate website, a
            robust e-commerce platform, or a dynamic web application, our team
            of experienced developers is here to turn your ideas into scalable,
            high-performance solutions. From front-end design to back-end
            development, we tailor every aspect of your project to meet your
            unique requirements and exceed your expectations.
          </p>
        </div>

        <div className="container py-4 flex flex-col items-center justify-center md:w-1/2">
          <p className="text-8xl mb-10">&#9889;</p>
          <h1 className="text-white text-xl text-center font-bold mb-4">
            Responsive Web Design
          </h1>
          <p className="text-lg text-white max-w-xl text-center">
            Make a lasting impression on your audience with our responsive web
            design service. In today's mobile-first world, it's essential to
            ensure that your website looks and functions flawlessly across all
            devices and screen sizes. Our talented designers specialize in
            creating visually stunning and user-friendly interfaces that adapt
            seamlessly to desktops, laptops, smartphones, and tablets. Whether
            you're building a new site or redesigning an existing one, we'll
            help you deliver an exceptional user experience that drives
            engagement and conversions.
          </p>
        </div>

        <div className="container py-16 flex flex-col items-center justify-center md:w-1/2">
          <p className="text-8xl mb-10">&#11088;</p>
          <h1 className="text-white text-xl text-center font-bold mb-4">
            SEO & Digital Marketing
          </h1>
          <p className="text-lg text-white max-w-xl text-center">
            Maximize your online visibility and reach your target audience with
            our SEO and digital marketing service. In a competitive online
            landscape, simply having a great website isn't enough. You need to
            ensure that your site ranks high in search engine results and
            attracts qualified traffic that converts into leads and sales. Our
            team of SEO experts employs proven strategies to optimize your site
            for search engines, improve your organic search rankings, and
            increase your online visibility. From keyword research and on-page
            optimization to content marketing and link building, we'll help you
            attract and retain customers through strategic digital marketing
            initiatives.
          </p>
        </div>

        <div className="container py-16 flex flex-col items-center justify-center md:w-1/2">
          <p className="text-8xl mb-10">&#8986;</p>
          <h1 className="text-white text-xl text-center font-bold mb-4">
            Website Maintenance & Support
          </h1>
          <p className="text-lg text-white max-w-xl text-center">
            Keep your website running smoothly and securely with our website
            maintenance and support service. A well-maintained website not only
            enhances the user experience but also protects your investment and
            preserves your online reputation. Our dedicated team of
            professionals provides ongoing maintenance, updates, and security
            enhancements to ensure that your site remains fast, reliable, and
            up-to-date with the latest technologies and trends. Whether you need
            regular backups, software updates, security patches, or technical
            assistance, we're here to provide proactive support and peace of
            mind, so you can focus on growing your business.
          </p>
        </div>
      </div>

      <div className="container flex flex-col py-7 items-center justify-center">
        <h1 className="text-4xl text-center font-bold text-black">
          Our Process
        </h1>
      </div>

      <div className="flex flex-wrap bg-blue-950">
        <div className="container px-20 py-16 flex flex-col items-center justify-center md:w-1/2">
          <ol className="list-disc">
            <li className="text-lg text-white max-w-xl mb-4">
              Consultation: We start by understanding your goals and
              requirements to tailor our services accordingly.
            </li>
            <li className="text-lg text-white max-w-xl mb-4">
              Design & Development: Our team works tirelessly to bring your
              vision to life with cutting-edge design and development.
            </li>
            <li className="text-lg text-white max-w-xl mb-4">
              Testing & Feedback: We rigorously test our solutions to ensure
              seamless functionality and gather your feedback for refinements.
            </li>
            <li className="text-lg text-white max-w-xl mb-4">
              Launch & Support: Once everything is perfect, we launch your
              project and provide ongoing support to ensure its continued
              success.
            </li>
          </ol>
        </div>

        <div className="container px-20 py-16 flex flex-col items-center justify-center md:w-1/2">
          <img
            src={process}
            alt="Earth Logo"
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <ContactForm />

      <div className="container flex flex-col bg-gray-700 py-1 items-center justify-center">
        <p className="text-xs text-center text-white">
          Copyright @ TJ Consortium Ltd
        </p>
      </div>
    </>
  );
};

export default Home;
