import { getAllChallengeIds, getChallenge } from '../../lib/challenges'
import ColumnPreviewCard from '../../components/challenges/ColumnPreviewCard'
import StatsPreviewCard from '../../components/challenges/StatsPreviewCard'
import FourCardFeatureSection from '../../components/challenges/FourCardFeatureSection'

const componentMap = {
  'column-preview-card': ColumnPreviewCard,
  'stats-preview-card': StatsPreviewCard,
  'four-card-feature-section': FourCardFeatureSection
}

const Challenge = ({ challenge }) => {
  const Component = componentMap[challenge.id]

  return <Component challenge={challenge} />
}

export const getStaticPaths = async () => ({ paths: getAllChallengeIds(), fallback: false })

export const getStaticProps = async ({ params }) => ({ props: { challenge: getChallenge(params.id) } })

export default Challenge