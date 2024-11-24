const Card = () => {
  return (
    <div>
      <section className="flex items-center py-14 px-4 md:px-32 justify-between gap-8 flex-col bg-black w-screen">
        <div className="bg-[#1A1A1A] left-bg rounded-[32px] w-full p-16 md:p-28 flex justify-center items-center flex-col border-[#2F2F2F] border-solid border-[1px]">
          <h1 className="font-[600] text-[32px] text-center md:text-5xl mb-12">
            Take the Next Step with DataFluent
          </h1>
          <button className="btn bg-[#20E4D1] text-black font-[500] text-center">
            Request a Consultation
          </button>
        </div>
      </section>
    </div>
  )
}

export default Card;
