import propType from  "prop-types";


const Impact = ({impactOne, impactTwo, impactThree, AreaOne, AreaTwo, AreaThree}) => {
  return (
    <section className="flex items-center py-14 md:px-32 justify-between gap-8 flex-col bg-black w-screen">
        <div className="top">
          <h1 className="text-center font-[600] text-[20px] md:text-[32px] text-[#A2A2A2]">
            Our Impact in Numbers
          </h1>
        </div>
        <div className="bottom flex justify-center items-center md:items-stretch md:p-8 text-[#FAFAFA] mb-14 gap-8 md:gap-0 mx-4">
          <div className="text-center card border-solid border-[#a3a3a3] border-r-[0.5px] px-4 md:px-20">
            <h1 className="font-[600] text-[48px] md:text-[70px]">{impactOne}</h1>
            <p className="text-[#B9B9B9] text-[10px] md:text-xs font-[500] text-nowrap">
              {AreaOne}
            </p>
          </div>
          <div className="text-center card border-none md:px-20">
            <h1 className="font-[600] text-[48px] md:text-[70px]">{impactTwo}</h1>
            <p className="text-[#B9B9B9] text-[10px] md:text-xs font-[500] text-nowrap">
              {AreaTwo}
            </p>
          </div>
          <div className="text-center card border-solid border-[#a3a3a3] border-l-[0.5px] px-4 md:px-20">
            <h1 className="font-[600] text-[48px] md:text-[70px]">{impactThree}</h1>
            <p className="text-[#B9B9B9] text-[10px] md:text-xs font-[500] text-nowrap">
              {AreaThree}
            </p>
          </div>
        </div>
      </section>
  )
}

Impact.propTypes = {
    impactOne: propType.string.isRequired,
    impactTwo: propType.string.isRequired,
    impactThree: propType.string.isRequired,
    AreaOne: propType.string.isRequired,
    AreaTwo: propType.string.isRequired,
    AreaThree: propType.string.isRequired,
}

export default Impact
