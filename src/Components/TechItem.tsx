import type { techType } from "../type";

interface techsProps{
    technologies:techType[];
}

const TechItem = ({technologies}:techsProps) => {
    return (
        <div>
            {technologies.map((technology:techType)=>{
                console.log(technology);
                return(
                    <h2>{technology.name}</h2>
                );
            })}
        </div>
    );
};

export default TechItem;