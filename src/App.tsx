import { Suspense, useState } from "react";
import Bottom from "./Components/Bottom"
import Hero from "./Components/Hero"
import Nav from "./Components/Nav"
import TechStack from "./Components/TechStack";
import type { techType } from "./type";
import SectionTwo from "./Components/SectionTwo";
import LoadingComp from "./Components/LoadingComp";

function App() {
  const techStack = async():Promise<techType[]> => {
    const res = await fetch('/data.json');
    const data = await res.json();
    return data;
  }

  const [techPromise] = useState<Promise<techType[]>>(techStack());
  return (
    <>
        <Nav />
        <Hero />
        <SectionTwo/>
        <Suspense fallback={<LoadingComp/>}>
            <TechStack techPromise={techPromise}/>
        </Suspense>        
        <Bottom/>
    </>
  )
}

export default App
