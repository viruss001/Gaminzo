const OurCulture = () => {
  return (
    <div className="flex flex-row h-[30rem] mt-[10rem] justify-center">
      {/* Left Content */}
      <div className="flex w-[35vw]">
        <div className="ml-10">
          <h5 className="text-xl pt-5">
            <span className="text-red-700 text-xl font-bold">//</span> Our Culture
          </h5>
          <h2 className="font-bold text-2xl mt-3">
            TEAMWORK MAKES THE DREAM WORK
          </h2>
          <p className="text-left mt-5 leading-loose ">
            “Our culture is like a jersey that unites our team within Dream
            Sports. It is also our game plan that will continue to fuel our
            growth." <br />
            - <span className="font-semibold">Bhavit Sheth</span>, COO &amp; Co‑Founder, Dream Sports
          </p>
          <p className="text-left mt-5 leading-8">
            We believe that the only thing that scales an organisation is its
            culture. Hence, at Dream Sports, we <span className="font-bold">DO‑PUT</span> our
            culture first!
          </p>
        </div>
      </div>

      {/* Right Section (Replace 'hi' with Image or Graphic) */}
      <div className="bg-red-700 w-[40vw] flex items-center justify-center text-white text-xl font-bold">
        PHOTO
      </div>
    </div>
  );
};

export default OurCulture;
