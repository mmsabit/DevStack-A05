import { use, useState } from "react";
import type { techType } from "../type";
import TechItem from "./TechItem";
import SelectedTech from "./SelectedTech";

interface techProps {
  techPromise: Promise<techType[]>;
}

const TechStack = ({ techPromise }: techProps) => {
  const technologies = use(techPromise);
  const [techSelected, setTechSelected] = useState<techType[]>([]);

  return (
    <div className="xl:max-w-7xl w-[90%] mx-auto mb-40">
      
      <div className="flex flex-col lg:flex-row mt-7 gap-8">
        <div className="lg:w-3/4 w-full">
          <TechItem
            technologies={technologies}
            techSelected={techSelected}
            setTechSelected={setTechSelected}
          />
        </div>
        <div className="lg:w-1/4 w-full">
          <SelectedTech
            techSelected={techSelected}
            setTechSelected={setTechSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
