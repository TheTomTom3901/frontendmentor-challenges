const Stat = ({ value, label }) => (
  <div className="space-y-1 xl:space-y-2">
    <p className="font-bold text-white font-lexend-deca text-2xl tracking-wider">{value}</p>
    <p className="text-spc-slighter-transparent-white uppercase text-sm tracking-widest">{label}</p>
  </div>
)

const StatsPreviewCard = ({ id, link }) => (
  <div className="flex flex-col justify-center items-center bg-spc-very-dark-blue px-6 py-20 xl:h-screen xl:p-0">
    <div className="rounded-lg overflow-hidden font-inter bg-spc-dark-desaturated-blue xl:flex xl:flex-row-reverse xl:w-9/12">
      <div className="relative">
        <img className="xl:hidden" src={`/${id}/mobile-header.jpg`} alt="mobile header" />
        <img className="hidden xl:block" src={`/${id}/desktop-header.jpg`} alt="desktop header" />
        <div className="absolute bg-spc-soft-violet mix-blend-multiply inset-0" />
      </div>
      <div className="flex flex-col flex-1 justify-between p-8 pt-10 text-center xl:p-16 xl:text-left">
        <div className="mb-10">
          <h1 className="font-semibold text-white text-2xl mb-4 xl:mb-6 xl:text-4xl font-lexend-deca">
            Get <span className="text-spc-soft-violet">insights</span> that help your business grow.
          </h1>
          <p className="text-spc-slight-transparent-white text-sm leading-6 xl:text-base">
            Discover the benefits of data analytics and make better decisions regarding revenue, customer experience and overall efficiency
          </p>
        </div>
        <div className="space-y-6 xl:flex xl:space-x-14 xl:space-y-0">
          <Stat value="10k+" label="companies" />
          <Stat value="314" label="templates" />
          <Stat value="12M+" label="queries" />
        </div>
      </div>
    </div>
    <span className="text-white mt-8">
      Challenge from <a className="hover:underline" href={link} target="_blank" rel="noreferrer">Frontend Mentor</a>
    </span>
  </div>
)

export default StatsPreviewCard