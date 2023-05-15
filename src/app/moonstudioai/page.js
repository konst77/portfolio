'use client';

import { motion, useScroll } from "framer-motion";
import Prjhero from '../components/Prjhero'
import bobphone from '../../../public/images/thebob/bobphone.png'

export default function Moonstudioai() {

  const title = "How we turned a menu into a decision-making tool and the most effective system for the restaurant operation."
  const intro1 = "Client: Moon Studio Ai"
  const intro2 = "Duration: One Month"
  const intro3 = "Team: Sole Design Engineer"
  const intro4 = "Role: Development"
  const { scrollYProgress } = useScroll();

  return (
    <main>
      <motion.div
        className="fixed top-[60px] md:top-[80px] bg-gradient-to-r from-[#153078] to-primary origin-[0%] h-[10px] left-0 right-0 overflow-hidden"
        style={{ scaleX: scrollYProgress }}
      />
      <Prjhero src={bobphone} text={title} intro1={intro1} intro2={intro2} intro3={intro3} intro4={intro4} />

      <div className="border border-[#ddd] mx-4 my-20  
      md:mx-40"></div>

    </main>
  )
}
