import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaBreadSlice } from "react-icons/fa";
import { Nav } from "../Nav";
import { NavMobile } from "../NavMobile";

export function Header() {
  // Header background color change on scroll
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      style={{ textShadow: "0 0 10px rgba(0,0,0,1.5)" }}
      className={`${isActive ? 'bg-[#daa520] h-20 opacity-80' : 'h-24'}   flex items-center 
      fixed right-0 top-0 w-full text-black z-10 transition-all duration-300 `}
    >
      <div className="container mx-auto h-full flex items-center justify-evenly mb-4">
        <div className="flex items-center gap-2 ml-2">
          <a href="#">
            <FaBreadSlice size={32} />
          </a>
          <span className="text-[2rem] font-bold opacity-70">
            <i className="text-[secondary]">bakery</i>
          </span>
        </div>
        {/* nav - initially hidden - show on desktop */}
        <Nav />
        <div className="hover:text-primary mr-12">
          <FaShoppingCart className="text-[secondary]" size={32} />
        </div>
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
}
