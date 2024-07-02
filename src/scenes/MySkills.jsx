
import { motion } from "framer-motion";

const MySkills = () => {
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            About <span className="text-zinc-800">Me</span>
          </p>
          
          <p className="mt-10 mb-7">
          Hello, let me introduce myself, my name is Muhammad Hafiz or you can be called Hafiz. I live in Padang Panjang. I am a student at Padang Institute of Technology in 2022
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
              <img
                alt="skills"
                className="z-10 rounded-lg"
                src="assets/fotometing.jpg"
              />
        </div>
      </div>

     
    </section>
  );
};

export default MySkills;
