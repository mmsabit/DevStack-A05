import { IoMdMenu } from "react-icons/io";
import logo from "../assets/logo-text.png"

const Nav = () => {
  return (
    <div className="border-[#F1F5F9] border-b ">
      <header className="max-w-7xl mx-auto flex justify-between items-center py-6 px-3">
        <div className="xl:hidden">
          <IoMdMenu size={30} />
        </div>
        <div className="">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="hidden xl:block">
          <ul className="text-base text-[#334155] flex items-center gap-6 cursor-pointer font-medium">
            <li className="text-[#DB2777]">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="flex gap-5 items-center">
          <a className="xl:text-base text-[#334155] font-medium text-[12px]" href="">Sign in</a>
          <button className="xl:text-base text-white font-medium xl:px-5 xl:py-2.5 bg-[#D91B7E] rounded-full text-[12px] px-2.5 py-1.5">Sign up</button>
        </div>
      </header>
    </div>
  );
};

export default Nav;
