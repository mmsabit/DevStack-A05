import { FaStar } from "react-icons/fa";
import type { techType } from "../type";
import { type Dispatch, type SetStateAction } from "react";
import { Bounce, Slide, toast } from "react-toastify";

interface techProps {
  technology: techType;
  techSelected: techType[];
  setTechSelected: Dispatch<SetStateAction<techType[]>>;
}

const TechCard = ({ technology, techSelected, setTechSelected }: techProps) => {
  // const [isClicked, setClecked] = useState(false);

  const isClicked = techSelected.some(
    (techSelected) => techSelected.name === technology.name,
  );

  const handleSelect = () => {
    if (isClicked) {
      toast.error(`${technology.name} Already in your stack`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    toast.success(`${technology.name} Added in your stack`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
    // setClecked(true);
    setTechSelected([...techSelected, technology]);
  };

  return (
    <div>
      <div
        className={`max-w-sm rounded-3xl border transition duration-300 bg-white p-6 hover:shadow-xl shadow-gray-100 ${isClicked ? "border-[#d91b7e]" : "border-gray-200"}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center">
            <img src={technology.icon} alt="" />
          </div>
          <span className="rounded-full bg-sky-50 px-3.5 py-1.5 text-xs font-semibold text-sky-500">
            {technology.badge}
          </span>
        </div>
        <h2 className="mt-5 text-2xl font-bold tracking-tight text-gray-900">
          {technology.name}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">
          {technology.description}
        </p>
        <hr className="my-5 border-gray-50" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-slate-600">
              {technology.category}
            </span>
            <span className="text-xs font-medium text-slate-500">
              {technology.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-1 text-sm font-semibold text-gray-900">
            <FaStar className="text-[#FBBF24]" />
            <span>{technology.rating}</span>
          </div>
        </div>

        <button
          className={`mt-5 w-full rounded-xl bg-[#0b0f19] py-3 text-sm font-semibold text-white border  hover:bg-gray-800 cursor-pointer transition duration-300 ${isClicked ? "dev-btn-disabled" : "cursor-pointer"}`}
          onClick={handleSelect}
          
        >
          {isClicked ? "Added to stack" : "Add to stack"}
        </button>
      </div>
    </div>
  );
};

export default TechCard;
