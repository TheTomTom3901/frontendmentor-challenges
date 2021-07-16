import Link from 'next/link'
import { getChallenges, Challenge } from '../lib/challenges'

type Props = {
  challenges: Challenge[]
}

const Home = ({ challenges }: Props) => (
  <div className="max-w-3xl mx-auto p-8 font-inter md:pt-20">
    <div className="mb-10">
      <h1 className="text-3xl font-bold mb-4 md:text-5xl">Challenges</h1>
      <h2 className="text-gray-600 leading-7">My collection of challenges from <a className="text-blue-500 font-medium underline hover:text-blue-700" href="https://www.frontendmentor.io/" target="_blank" rel="noopener noreferrer">Frontendmentor</a>, ranging in skill levels with a mixture of components, single page websites and multi page websites. Best viewed at <strong>375px</strong> or <strong>1440px</strong>, other sizes are likely to not match the exact designs</h2>
    </div>
    <div className="grid gap-4 sm:grid-cols-2">
      {challenges.map(({ id, title }) => (
        <Link key={id} href={`/challenge/${id}`}>
          <a className="block hover:shadow">
            <div className="border border-gray-200 rounded p-4 h-full sm:flex sm:items-center sm:justify-center sm:text-center">
              <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            </div>
          </a>
        </Link>
      ))}
    </div>
  </div>
)

export const getStaticProps = async () => ({ props: { challenges: getChallenges() } })

export default Home
