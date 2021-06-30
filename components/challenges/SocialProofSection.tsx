import Attribute from '../Attribute'
import Props from './types'
import addAssetPrefix from '../../utils/addAssetPrefix'

import styles from './SocialProofSection.module.css'

const Rating = ({ className, id, title }) => (
  <div className={`${className} flex flex-col items-center bg-sps-light-grayish-magenta p-4 rounded-lg xl:flex-row xl:px-9 xl:py-5`}>
    <div className="flex space-x-2 mb-3 xl:mb-0 xl:mr-7">
      <img src={addAssetPrefix(`${id}/icon-star.svg`)} alt="star-1" />
      <img src={addAssetPrefix(`${id}/icon-star.svg`)} alt="star-2" />
      <img src={addAssetPrefix(`${id}/icon-star.svg`)} alt="star-3" />
      <img src={addAssetPrefix(`${id}/icon-star.svg`)} alt="star-4" />
      <img src={addAssetPrefix(`${id}/icon-star.svg`)} alt="star-5" />
    </div>
    <p className="text-sps-very-dark-magenta font-bold text-sm">{title}</p>
  </div>
)

const Review = ({ className, photo, reviewer, review }) => (
  <div className={`${className} bg-sps-very-dark-magenta text-sps-light-grayish-magenta py-9 px-8 rounded-md h-full`}>
    <div className="flex items-center space-x-6 mb-7">
      <img className="rounded-full w-10" src={addAssetPrefix(photo)} alt="" />
      <div className="text-xs space-y-0.5">
        <p className="font-bold">{reviewer}</p>
        <p className="text-sps-soft-pink text-opacity-50">Verified Buyer</p>
      </div>
    </div>
    <p className="text-xs leading-5">" {review} "</p>
  </div>
)

const SocialProofSection = ({ id, link }: Props) => (
  <div className={styles.background}>
    <div className="flex flex-col items-center px-7 py-20 xl:h-screen xl:px-0 xl:py-32">
      <div className="font-spartan xl:w-3/4">
        <div className="mb-12 xl:grid xl:grid-cols-2 xl:mb-16 xl:gap-14">
          <div className="mb-10 text-center xl:text-left xl:mb-0 xl:pr-10">
            <h1 className="text-sps-very-dark-magenta text-3xl font-bold mb-5 leading-8 xl:text-5xl xl:mb-4">10,000+ of our users love our products.</h1>
            <p className="text-sps-dark-grayish-magenta text-sm font-medium xl:text-base xl:tracking-tight">We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
          </div>
          <div className="flex flex-col space-y-4">
            <Rating className="xl:self-start" id={id} title="Rated 5 Stars in Reviews" />
            <Rating className="xl:self-center" id={id} title="Rated 5 Stars in Report Guru" />
            <Rating className="xl:self-end" id={id} title="Rated 5 Stars in BestTech" />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row">
          <Review
            className="mb-4 xl:mb-0 xl:mr-8"
            photo={`${id}/image-colton.jpg`}
            reviewer="Colton Smith"
            review="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
          />
          <Review
            className="mb-4 xl:mb-0 xl:mt-4 xl:mr-8"
            photo={`${id}/image-irene.jpg`}
            reviewer="Irene Roberts"
            review="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
          />
          <Review
            className="xl:mt-8"
            photo={`${id}/image-anne.jpg`}
            reviewer="Anne Wallace"
            review="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
          />
        </div>
      </div>
      <Attribute className="mt-8" link={link} />
    </div>
  </div>
)

export default SocialProofSection
