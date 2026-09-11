import { IoCloseOutline } from "react-icons/io5";
import type { techType } from "../type";
import type { Dispatch, SetStateAction } from "react";

interface techProps {
  technology: techType;
  techSelected: techType[];
  setTechSelected: Dispatch<SetStateAction<techType[]>>;
}

const SelectedTechList = ({ technology, techSelected, setTechSelected }: techProps) => {

  const handelRemove = (technology: techType) => {
    const resetTech = techSelected.filter(
      (selectTech) => selectTech.name != technology.name
    );

    setTechSelected(resetTech);
  }
  return (
      <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-2 mb-2">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center">
              <img src={technology.icon} alt="" width={"28px"} height={"28px"}/>
            </div>
            <div className="flex flex-col">
              <h2 className="text-[12px] font-bold text-[#111928]">{technology.name}</h2>
              <p className="text-[8px] font-medium text-[#6b7280]">{technology.category}</p>
            </div>
          </div>
          <button className="group flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-gray-100"
          onClick={() => handelRemove(technology)}>
            <IoCloseOutline />
          </button>
        </div>
      </div>
  );
};

export default SelectedTechList;
