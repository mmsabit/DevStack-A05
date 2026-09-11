import { use } from "react";
import type { techType } from "../type";
import TechItem from "./TechItem";

interface techProps {
  techPromise: Promise<techType[]>;
}

const TechStack = ({ techPromise }: techProps) => {
    const technologies = use(techPromise);
  return (
    <div className="xl:max-w-7xl w-[90%] mx-auto">
      <div >
        <h2 className="text-4xl font-extrabold">
          Explore the <span className="dev-text">Technologies</span>
        </h2>
        <p className="text-[#64748B] mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="flex">
            <div className="w-3/4">
                <TechItem technologies={technologies}/>
            </div>
            <div className="w-1/4"></div>
      </div>
    </div>
  );
};

export default TechStack;
