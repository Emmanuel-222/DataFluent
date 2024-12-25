import { IoArrowForward } from "react-icons/io5";

const Pagination = () => {
  return (
    <div className="bg-transparent flex justify-center items-center my-8">
      <ul className="flex justify-center items-stretch gap-3">
        <li className="py-2 px-4 rounded-lg text-center bg-[#20E4D1] text-black">1</li>
        <li className="py-2 px-4 rounded-lg text-center bg-transparent border-[#20E4D1] border-[1px] text-[#FAFAFA]">2</li>
        <li className="py-2 px-4 rounded-lg text-center bg-transparent border-[#20E4D1] border-[1px] text-[#FAFAFA]">3</li>
        <li className="py-2 px-4 rounded-lg text-center bg-[#20E4D1] border-[#20E4D1] border-[1px] text-black"><IoArrowForward /></li>
      </ul>
    </div>
  )
}

export default Pagination;