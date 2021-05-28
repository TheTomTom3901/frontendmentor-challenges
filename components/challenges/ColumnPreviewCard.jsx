import CustomHead from '../CustomHead'

const Card = ({ bgColour, textColour, icon, title, description }) => (
  <div className={`${bgColour} p-12`}>
    <img src={icon} alt={`${title}-icon`} className="mb-10" />
    <h1 className="text-cpc-very-light-gray font-big-shoulders-display uppercase text-4xl mb-8">{title}</h1>
    <p className="text-cpc-transparent-white font-lexend-deca leading-6 mb-8 xl:mb-20" style={{ fontSize: 15 }}>{description}</p>
    <button className={`rounded-full border-2 border-white bg-white py-3 px-8 ${textColour} font-lexend-deca text-sm hover:text-cpc-very-light-gray hover:bg-transparent`}>Learn More</button>
  </div>
)

const ColumnPreviewCard = ({ challenge: { id, title, link, fontUrl }}) => (
  <>
    <CustomHead title={title}>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <style data-href={fontUrl}>{`@import url('${fontUrl}')`}</style>
    </CustomHead>
    <div className="flex flex-col justify-center items-center px-6 py-16 bg-cpc-very-light-gray xl:h-screen xl:p-0">
      <div className="rounded-lg overflow-hidden xl:flex xl:w-2/3">
        <Card
          bgColour="bg-cpc-bright-orange"
          textColour="text-cpc-bright-orange"
          icon={`/${id}/icon-sedans.svg`}
          title="Sedans"
          description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
        />
        <Card
          bgColour="bg-cpc-dark-cyan"
          textColour="text-cpc-dark-cyan"
          icon={`/${id}/icon-suvs.svg`}
          title="SUVs"
          description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        />
        <Card
          bgColour="bg-cpc-very-dark-cyan"
          textColour="text-cpc-very-dark-cyan"
          icon={`/${id}/icon-luxury.svg`}
          title="Luxury"
          description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        />
      </div>
      <span className="mt-8">
        Challenge from <a className="hover:underline" href={link} target="_blank" rel="noreferrer">Frontend Mentor</a>
      </span>
    </div>
  </>
)

export default ColumnPreviewCard