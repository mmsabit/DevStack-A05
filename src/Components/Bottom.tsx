import logo from "../assets/logo-text.png";

const Bottom = () => {
  return (
    <div className="border-[#F1F5F9] border-t ">
      <footer className="xl:max-w-7xl mx-auto max-w-[90%]">
        <div className="my-14 flex gap-10">
          <div className="lg:w-2/5 w-full flex flex-col gap-3 justify-center lg:items-start items-center">
            <img src={logo} alt="" />
            <p className="text-sm lg:text-start text-center">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <ul className="flex gap-4">
                <li><a href="">Github</a></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">Linkdin</a></li>
            </ul>
          </div>
          <div className="w-1/5 hidden lg:block">
            <h5 className="font-bold text-[#0F172A] mb-4">PRODUCT</h5>
            <ul className="text-[#64748B]">
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
            </ul>
          </div>
          <div className="w-1/5 hidden lg:block">
            <h5 className="font-bold text-[#0F172A] mb-4">COMPANY</h5>
            <ul className="text-[#64748B]">
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
            </ul>
          </div>
          <div className="w-1/5 hidden lg:block">
            <h5 className="font-bold text-[#0F172A] mb-4">LEGAL</h5>
            <ul className="text-[#64748B]">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="py-5 border-[#F1F5F9] border-t flex justify-between items-center">
            <p className="text-[#94A3B8] text-[10px] lg:text-[14px]">© 2026 Dev Stack. All rights reserved.</p>
            <ul className="flex gap-3 text-[#94A3B8] text-[10px] lg:text-[14px]">
                <li>Privacy</li>
                <li>Terms</li>
            </ul>
        </div>
      </footer>
    </div>
  );
};

export default Bottom;
