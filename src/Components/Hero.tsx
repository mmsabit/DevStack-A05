import Banner from "../assets/banner-stack.png"

const Hero = () => {
  return (
    <div>
      <section className="py-16 xl:max-w-7xl mx-auto flex justify-center items-center flex-col lg:flex-row w-[90%]">
        <div className="lg:w-2/3 flex flex-col gap-6 justify-center items-center lg:items-start w-full">
          <h1 className="font-extrabold lg:text-6xl text-3xl text-center lg:text-start">
            Build Your Ideal <br />
            <span className="dev-text">Development Stack</span>
          </h1>
          <p className="lg:text-lg text-sm text-center lg:text-start text-[#475569]">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex items-center justify-start gap-2 w-full lg:w-auto">
            <button className="bg-linear-to-r from-[#F97316] to-[#EC4899]  text-white px-3 py-2.5 rounded-lg lg:text-base text-[12px] lg:w-auto w-1/2  cursor-pointer">Explore Technologies</button>
            <button className="lg:px-11.5 py-2.5 rounded-lg lg:text-base text-[12px] border border-[#374151] lg:w-auto w-1/2 hover:bg-[#D91B7E] hover:border-[#D91B7E] hover:text-white cursor-pointer">Learn More</button>
          </div>
        </div>
        <div className="lg:w-1/3 w-full">
            <img src={Banner} alt="Banner Image" className="w-full h-full"/>
        </div>
      </section>
    </div>
  );
};

export default Hero;
