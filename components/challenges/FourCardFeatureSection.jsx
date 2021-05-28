import CustomHead from '../CustomHead'

const Card = ({ bannerColour, title, subtitle, icon }) => (
  <div className="bg-white shadow-xl overflow-hidden rounded-lg flex-1">
    <div className={`${bannerColour} h-1`} />
    <div className="p-8 pt-7 xl:pt-8">
      <div className="mb-10 xl:mb-12">
        <h1 className="font-semibold text-lg text-fcfs-very-dark-blue mb-1 xl:mb-3 xl:text-xl">{title}</h1>
        <p className="text-sm text-fcfs-grayish-blue">{subtitle}</p>
      </div>
      <div className="flex justify-end">
        <img className="w-14 xl:w-auto" src={icon} alt={`${title}-icon`} />
      </div>
    </div>
  </div>
)

const FourCardFeatureSection = ({ challenge: { id, title, link, fontUrl }}) => (
  <>
    <CustomHead title={title}>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <style data-href={fontUrl}>{`@import url('${fontUrl}')`}</style>
    </CustomHead>
    <div className="flex flex-col items-center px-8 py-24 bg-fcfs-very-light-gray xl:px-0 xl:py-30">
      <div className="flex flex-col items-center font-poppins">
        <div className="mb-16 text-center xl:w-2/5">
          <div className="mb-5 text-fcfs-very-dark-blue text-2xl xl:text-4xl">
            <h1 className="font-extralight mb-1 xl:mb-3">Reliable, efficient delivery</h1>
            <h2 className="font-semibold">Powered by Technology</h2>
          </div>
          <p className="text-fcfs-grayish-blue text-sm xl:text-base">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
        </div>
        <div className="flex flex-col items-center space-y-6 xl:flex-row xl:space-x-8 xl:space-y-0 xl:w-4/5">
          <Card
            bannerColour="bg-fcfs-cyan"
            title="Supervisor"
            subtitle="Monitors activity to identify project roadblocks"
            icon={`/${id}/icon-supervisor.svg`}
          />
          <div className="space-y-6 flex-1 xl:space-y-8">
            <Card
              bannerColour="bg-fcfs-red"
              title="Team Builder"
              subtitle="Scans our talent network to create the optimal team for your project"
              icon={`/${id}/icon-team-builder.svg`}
            />
            <Card
              bannerColour="bg-fcfs-orange"
              title="Karma"
              subtitle="Regularly evaluates our talent to ensure quality"
              icon={`/${id}/icon-karma.svg`}
            />
          </div>
          <Card
            bannerColour="bg-fcfs-blue"
            title="Calculator"
            subtitle="Uses data from past projects to provide better delivery estimates"
            icon={`/${id}/icon-calculator.svg`}
          />
        </div>
      </div>
      <span className="mt-14">
        Challenge from <a className="hover:underline" href={link} target="_blank" rel="noreferrer">Frontend Mentor</a>
      </span>
    </div>
  </>
)

export default FourCardFeatureSection