import { IoMdMenu } from "react-icons/io";
import logo from "../assets/logo-text.png"

const Nav = () => {
  return (
    <div className="border-[#F1F5F9] border-b bg-white sticky top-0 z-50">
      <header className="max-w-7xl mx-auto flex justify-between items-center py-4 px-3">
        <div className="xl:hidden">
          <IoMdMenu size={30} />
        </div>
        <div className="cursor-pointer">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="hidden xl:block">
          <ul className="text-base text-[#334155] flex items-center gap-6 cursor-pointer font-medium">
            <li className="hover:text-[#DB2777]">Home</li>
            <li className="hover:text-[#DB2777]">Technologies</li>
            <li className="hover:text-[#DB2777]">Projects</li>
            <li className="hover:text-[#DB2777]">About</li>
            <li className="hover:text-[#DB2777]">Contact</li>
          </ul>
        </nav>
        <div className="flex gap-5 items-center">
          <a className="xl:text-base text-[#334155] font-medium text-[12px] hover:text-[#DB2777]" href="#">Sign in</a>
          <button className="xl:text-base text-white font-medium xl:px-5 xl:py-2.5 bg-[#D91B7E] hover:bg-[#b8176a] rounded-full text-[12px] px-2.5 py-1.5 cursor-pointer">Sign up</button>
        </div>
      </header>
    </div>
  );
};

export default Nav;
