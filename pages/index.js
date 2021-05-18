import Link from 'next/link'
import { getChallenges } from '../lib/challenges'

const Home = ({ challenges }) => (
  <ul>
    {challenges.map(({ id, title }) => (
      <li key={id}>
        <Link href={`/challenge/${id}`}>
          <a>{title}</a>
        </Link>
      </li>
    ))}
  </ul>
)

export const getStaticProps = async () => ({ props: { challenges: getChallenges() } })

export default Home
