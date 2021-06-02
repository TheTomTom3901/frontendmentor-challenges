import Attribute from '../Attribute'

const SinglePriceGrid = ({ link }) => (
  <div className="flex flex-col items-center justify-center bg-spg-light-gray px-8 py-20 xl:h-screen xl:p-0">
    <div className="font-karla rounded-md overflow-hidden shadow-xl xl:max-w-2xl xl:shadow-2xl">
      <div className="bg-white p-6 xl:p-10">
        <h1 className="text-spg-cyan font-bold text-xl mb-4 xl:text-2xl xl:mb-5">Join our community</h1>
        <p className="text-spg-bright-yellow font-bold mb-3 xl:text-lg">30-day, hassle-free money back guarantee</p>
        <p className="text-spg-grayish-blue text-sm leading-6 xl:text-base">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
      </div>
      <div className="xl:flex xl:flex-row">
        <div className="bg-spg-cyan p-6 text-white flex-1 xl:p-10">
          <h2 className="text-lg mb-3 xl:mb-4">Monthly Subscription</h2>
          <div className="flex flex-row items-center mb-1 xl:mb-2">
            <p className="text-3xl font-bold mr-3">$29</p>
            <p className="opacity-40">per month</p>
          </div>
          <p className="mb-6 text-spg-light-gray xl:mb-7">Full access for less than $1 a day</p>
          <button className="bg-spg-bright-yellow w-full py-3 rounded-md font-bold shadow-lg">Sign Up</button>
        </div>
        <div className="bg-spg-cyan bg-opacity-80 p-6 text-white flex-1 xl:p-10">
          <h2 className="text-lg mb-3 xl:mb-4">Why Us</h2>
          <ul className="text-sm opacity-70">
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </div>
    </div>
    <Attribute className="mt-14" link={link} />
  </div>
)

export default SinglePriceGrid