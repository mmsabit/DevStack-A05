import type { techType } from "../type";
import TechCard from "./TechCard";

interface techsProps{
    technologies:techType[];
}

const TechItem = ({technologies}:techsProps) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {technologies.map((technology:techType)=>{
                return(
                    <TechCard technology={technology}/>
                );
            })}
        </div>
    );
};

export default TechItem;