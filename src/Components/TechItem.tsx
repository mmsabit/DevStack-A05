import type { Dispatch, SetStateAction } from "react";
import type { techType } from "../type";
import TechCard from "./TechCard";

interface techsProps{
    technologies:techType[];
    techSelected:techType[];
    setTechSelected:Dispatch<SetStateAction<techType[]>>
}

const TechItem = ({technologies,techSelected, setTechSelected}:techsProps) => {
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            {technologies.map((technology:techType)=>{
                return(
                    <TechCard key={technology.id} technology={technology} techSelected={techSelected} setTechSelected={setTechSelected}/>
                );
            })}
        </div>
    );
};

export default TechItem;