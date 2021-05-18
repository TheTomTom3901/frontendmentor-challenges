import { getAllChallengeIds, getChallenge } from '../../lib/challenges'

const Challenge = ({ challenge }) => (
  <p>Challenge</p>
)

export const getStaticPaths = async () => ({ paths: getAllChallengeIds(), fallback: false })

export const getStaticProps = async ({ params }) => ({ props: { challenge: getChallenge(params.id) } })

export default Challenge