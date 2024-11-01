import siteConfig from "@/site.config.json";
import { Linkedin } from "lucide-react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-36 max-w-7xl">
        <div className="text-center lg:mx-auto">
          <h2 className="text-4xl lg:text-6xl text-white font-display">
            Get In Touch
          </h2>

          {/* <p className="mt-5 text-primary-300 lg:text-xl text-center">
            My inbox is always open. Whether you have a question or just want to
            say hello, I&apos;ll get back to you! Feel free to mail me about any
            relevant job updates.
          </p> */}
        </div>

        {/* <div className="mt-10">
          <div className="max-w-2xl mx-auto p-6 bg-transparent  border border-gray-700 shadow-md rounded-lg">
            <div className="flex justify-center">
              <h2 className="text-2xl font-bold">Contact Us</h2>
            </div>
            <div className="border-t border-gray-400 my-4 mb-10"></div>
            <form action="#" method="POST">
              <div className="mb-4">
                <label className="block text-sm">Name</label>
                <input type="text" id="name" name="name" required
                  className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm focus:border-white p-2" />
              </div>

              <div className="mb-4">
                <label className="block text-sm">Email</label>
                <input type="email" id="email" name="email" required
                  className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm focus:border-white p-2" />
              </div>

              <div className="mb-4">
                <label className="block text-sm">Contact Number</label>
                <input type="tel" id="contact" name="contact" required
                  className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm focus:border-white p-2" />
              </div>

              <div className="mb-4">
                <label className="block text-sm">Message</label>
                <textarea id="message" name="message" rows={3} required
                  className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm focus:border-white p-2"></textarea>
              </div>

              <button type="submit" className="bg-gradient-to-tr from-primary-950 to-primary-700 border border-primary-800 px-3 py-3 w-full rounded-md hover:bg-green-950">
                Submit
              </button>
            </form>
          </div>
        </div> */}



        <div className="flex flex-wrap gap-4 mt-12 justify-center">
          <a
            className="duration-200 hover:opacity-80"
            href={siteConfig.links.linkedin}
            target="_blank"
          >
            <Linkedin />
          </a>
        </div>

        <div className="flex justify-evenly items-center max-w-full p-4 mt-10 bg-gradient-to-tr from-primary-950 to-primary-700 border border-primary-800 text-white rounded-lg shadow-md">
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <span className="text-white">softengnrrajat007@gmail.com</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <span className="text-white">+91 7007166126</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
