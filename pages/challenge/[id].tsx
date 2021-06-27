import Head from 'next/head'
import { getAllChallengePaths, getChallenge, Challenge as ChallengeModel } from '../../lib/challenges'
import ColumnPreviewCard from '../../components/challenges/ColumnPreviewCard'
import StatsPreviewCard from '../../components/challenges/StatsPreviewCard'
import FourCardFeatureSection from '../../components/challenges/FourCardFeatureSection'
import SinglePriceGrid from '../../components/challenges/SinglePriceGrid'
import SocialProofSection from '../../components/challenges/SocialProofSection'

type Props = {
  challenge: ChallengeModel
}

const componentMap = {
  'column-preview-card': ColumnPreviewCard,
  'stats-preview-card': StatsPreviewCard,
  'four-card-feature-section': FourCardFeatureSection,
  'single-price-grid': SinglePriceGrid,
  'social-proof-section': SocialProofSection
}

const Challenge = ({ challenge: { id, title, link, fontUrl } }: Props) => {
  const Component = componentMap[id]

  return (
    <>
      <Head>
        <title>Frontend Mentor | {title}</title>
        {/*Mirrors NextJS font optimization but loads correctly when navigating with <Link>*/}
        <style data-href={fontUrl}>{`@import url('${fontUrl}')`}</style>
      </Head>
      <Component id={id} link={link} />
    </>
  )
}

export const getStaticPaths = async () => ({ paths: getAllChallengePaths(), fallback: false })

export const getStaticProps = async ({ params }) => ({ props: { challenge: getChallenge(params.id) } })

export default Challenge