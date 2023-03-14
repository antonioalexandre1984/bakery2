import { Social } from '../Social';
import { Link } from 'react-scroll';
import { XIcon } from '@heroicons/react/outline'
import { MenuAlt3Icon } from '@heroicons/react/outline'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export function NavMobile() {

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      }
    },
  }

  function handleMenuClick(section: string) {
    setActiveSection(section);
    setIsOpen(!isOpen);
  }

  return (
    <nav className="relative z-2">
      <div className="flex justify-between items-center cursor-pointer text-black m-4">
        <MenuAlt3Icon
          onClick={() => setIsOpen(!isOpen)}
          className="h-10 w-10"
        />
        <motion.div
          variants={circleVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          className="w-4 h-4 bg-[#daa520] rounded-full top-0 right-0 fixed">
        </motion.div>
        <motion.ul
          variants={ulVariants}
          initial='hidden'
          animate={isOpen ? 'visible' : 'hidden'}
          className={`${isOpen ? 'right-0' : 'right-full'} fixed top-0 bottom-0 w-full flex  justify-center items-center transition-all duration-300 `}>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer absolute top-8 right-12 text-primary">
            <XIcon className='h-8 w-8' />
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <li className="mb-6">
              <Link
                to="/home"
                smooth={true}
                spy={true}
                offset={-70}
                duration={1500}
                className="text-2xl font-bold cursor-pointer hover:text-primary"
                onClick={() => handleMenuClick('home')}
              >
                Home
              </Link>
            </li>
            <li className="mb-6">
              <Link
                onClick={() => handleMenuClick('about')}
                to="/about"
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                className="text-2xl font-bold cursor-pointer hover:text-primary"
              >
                About
              </Link>
            </li>
            <li className="mb-6">
              <Link
                onClick={() => handleMenuClick('product')}
                to="/product"
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                className="text-2xl font-bold cursor-pointer hover:text-primary"
              >
                Product
              </Link>
            </li>
            <li className="mb-6">
              <Link
                onClick={() => handleMenuClick('gallery')}
                to="/gallery"
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                className="text-2xl font-bold cursor-pointer hover:text-primary"
              >
                Gallery
              </Link>
            </li>
            <li className="mb-6">
              <Link
                onClick={() => handleMenuClick('team')}
                to="/team"
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                className="text-2xl font-bold cursor-pointer hover:text-primary"
              >
                Team
              </Link>
            </li>
            <li className="mb-6">
              <Link
                onClick={() => handleMenuClick('review')}
                to="/review"
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                className="text-2xl font-bold cursor-pointer hover:text-primary"
              >
                Review
              </Link>
            </li>
            <li className="mb-6">
              <Link
                onClick={() => handleMenuClick('order')}
                to="/order"
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                className="text-2xl font-bold cursor-pointer hover:text-primary"
              >
                Order
              </Link>
            </li>
            <div className="absolute bottom-6">
              <Social />
            </div>
          </div>
        </motion.ul>


      </div >
    </nav >
  );
}
