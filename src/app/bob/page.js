import Prjhero from '../components/Prjhero'
import bobphone from '../../../public/images/thebob/bobphone.png'
import Prjintro from '../components/Prjintro'
import introimg from '../../../public/images/thebob/introimg.png'
import Bobprj from '../components/Bobprj'

export default function Bob() {

  const title = "How we turned a menu into a decision-making tool and the most effective system for the restaurant operation."
  const intro1 = "Client: The BoB"
  const intro2 = "Duration: 60 days"
  const intro3 = "Team: Sole Designer"
  const intro4 = "Role: User Research"
  const text = "Menus can be exciting, but, deciding can be overwhelming."
  const description = "With total of 15 tables, serving 80 customers on average each day, The BoB welcomes everyone with authentic diversity of Korean foods. Furthermore, 54 total items encouraged decision making to average 12 minutes in a quick-paced local competition."
  const header = "BREIF"

  return (
    <main>
      <Prjhero src={bobphone} text={title} intro1={intro1} intro2={intro2} intro3={intro3} intro4={intro4} />

      <div className="border border-[#ddd] mx-4 my-20  
      md:mx-40"></div>

      <Prjintro src={introimg} text={text} description={description} header={header} />

      <Bobprj />
    </main>
  )
}
