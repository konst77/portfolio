'use client';

import { motion, useScroll } from "framer-motion";
import Prjhero from '../components/Prjhero'
import nietphone from '../../../public/images/niet/nietphone.png'
import Niet from "../components/Nietprj";

export default function Niet() {

  const title = "How we crafted a behavior changing habit app for people with depression, anxiety, and loneliness."
  const intro1 = "Project: n i e t"
  const intro2 = "Duration: 30 days"
  const intro3 = "Team: Sole Designer"
  const intro4 = "Role: Product Design"
  const { scrollYProgress } = useScroll();

  return (
    <main>
      <motion.div
        className="fixed top-[60px] md:top-[80px] bg-gradient-to-r from-[#153078] to-primary origin-[0%] h-[10px] left-0 right-0 overflow-hidden"
        style={{ scaleX: scrollYProgress }}
      />
      <Prjhero src={nietphone} text={title} intro1={intro1} intro2={intro2} intro3={intro3} intro4={intro4} />

      <Niet />
    </main>
  )
}
