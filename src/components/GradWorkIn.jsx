import logoOne from "../../src/assets/getwork-in/logo-1.png";
import logoTwo from "../../src/assets/getwork-in/logo-2.png";
import logoThree from "../../src/assets/getwork-in/logo-3.png";
import logoFour from "../../src/assets/getwork-in/logo-4.png";


const GradWorkIn = () => {
  return (
    <div className="flex items-center pt-40 px-8 md:px-32 justify-between gap-8 flex-col bg-black w-screen">
      <h1 className="text-[#A2A2A2] font-[600] text-[20px] md:text-[40px]">Where Our Graduates get Hired</h1>
      <div className="bg-[#E0E0E0] flex justify-around gap-10 sm:gap-20 md:gap-0 items-center w-full">
        <img className="size-20 sm:size-32 md:size-24 object-contain" src={logoOne} alt="logo-barter" />
        <img className="size-20 sm:size-32 md:size-24 object-contain" src={logoTwo} alt="logo-busha" />
        <img className="size-40 md:size-32 object-contain hidden sm:block" src={logoThree} alt="logo-flutter-wave" />
        <img className="size-40 md:size-32 object-contain hidden md:block" src={logoFour} alt="logo-framer" />
      </div>
    </div>
  )
}

export default GradWorkIn
