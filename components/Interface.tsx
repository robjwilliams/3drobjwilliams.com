import { motion } from "framer-motion";
import Link from "next/link";
const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      className={`
    h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.3,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export default function Interface() {
  return (
    <div className="flex flex-col items-center w-screen">
      <Section>
        <div className=" bg-white p-20">
          <h1 className="text-4xl font-bold">
            Hey! <div className="text-green-600"> my name is Robert</div>
          </h1>
          <p className="mt-4 text-xl">I am a full-stack software developer</p>
          <button className="mt-8 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
            <Link href="#">Get in touch</Link>
          </button>
        </div>
      </Section>
      <Section>
        <div className=" bg-white text-black p-20">
          <h2 className="text-3xl font-bold mb-10">Skills</h2>
          <motion.div
            className="feature mb-8"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-green-600">Skill</h3>
          </motion.div>
          <motion.div
            className="feature"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-green-600">Skill</h3>
          </motion.div>
        </div>
      </Section>
      <Section>
        <div className=" bg-white text-black p-20">
          <h2 className="text-3xl font-bold mb-10">
            Some projects I have worked on
          </h2>
          <ol className="list-decimal list-inside ">
            <motion.li
              className="mb-4"
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Project
            </motion.li>
            <motion.li
              className="mb-4"
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Project
            </motion.li>
            <motion.li
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Project
            </motion.li>
          </ol>
        </div>
      </Section>
    </div>
  );
}
