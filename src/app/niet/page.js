import Prjhero from '../components/Prjhero'
import nietphone from '../../../public/images/niet/nietphone.png'

export default function Niet() {

  const title = "How we crafted a behavior changing habit app for people with depression, anxiety, and loneliness."
  const intro1 = "Project: n i e t"
  const intro2 = "Duration: 30 days"
  const intro3 = "Team: Sole Designer"
  const intro4 = "Role: Product Design"

  return (
    <main>
      <Prjhero src={nietphone} text={title} intro1={intro1} intro2={intro2} intro3={intro3} intro4={intro4} />
    </main>
  )
}
