import type { Dispatch, SetStateAction } from "react";
import type { techType } from "../type";
import SelectedTechList from "./SelectedTechList";

interface techsProps {
  techSelected: techType[];
  setTechSelected: Dispatch<SetStateAction<techType[]>>;
}

const SelectedTech = ({ techSelected, setTechSelected }: techsProps) => {
  const handelRemoveAll = () =>{
    setTechSelected([]);
  }
  return (
    <div>
      <div className="p-5 border border-[#F1F5F9] rounded-2xl">
        <h5 className="text-[#0F172A]">Your Stack</h5>
        <small>
          {techSelected.length === 0
            ? "No technologies selected yet."
            : `${techSelected.length} Technology Selected`}
        </small>
        <div className="mt-3">
          {techSelected.length === 0 ? (
            <div className="py-6 w-full border border-dotted rounded-xl flex justify-center items-center border-[#E2E8F0]">
                <p className="text-[12px] text-[#94A3B8]">Your stack is empty.</p>
            </div>
          ) : (
            techSelected.map((technology: techType, ind: number) => {
              return <SelectedTechList technology={technology} key={ind} techSelected={techSelected} setTechSelected={setTechSelected}/>;
            })
          )}
        </div>
        <button className="text-red-600 border border-red-600 py-2 rounded-lg w-full hover:bg-red-600 hover:text-white mt-5 cursor-pointer" onClick={handelRemoveAll} > Reset All</button>
      </div>
    </div>
  );
};

export default SelectedTech;
