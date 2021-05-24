import { getAllChallengeIds, getChallenge } from '../../lib/challenges'
import ColumnPreviewCard from '../../components/challenges/ColumnPreviewCard'

const componentMap = {
  'column-preview-card': ColumnPreviewCard
}

const Challenge = ({ challenge }) => {
  const Component = componentMap[challenge.id]

  return <Component challenge={challenge} />
}

export const getStaticPaths = async () => ({ paths: getAllChallengeIds(), fallback: false })

export const getStaticProps = async ({ params }) => ({ props: { challenge: getChallenge(params.id) } })

export default Challenge