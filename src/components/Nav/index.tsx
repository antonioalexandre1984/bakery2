import { Link } from 'react-scroll';
import { Social } from '../Social';

export function Nav() {

  return (
    <nav className="hidden lg:flex">
      <ul className="flex gap-x-8 capitalize text-[1.7rem] text-body-md ">
        <li>
          <Link
            to="/home"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            href="/" className="hover:text-primary">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/home"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            href="about" className="hover:text-primary">
            About
          </Link>
        </li>
        <li>
          <Link
            to="/home"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            href="product" className="hover:text-primary">
            Product
          </Link>
        </li>
        <li>
          <Link
            to="/home"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            href="gallery" className="hover:text-primary">
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="/home"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            href="team" className="hover:text-primary">
            Team
          </Link>
        </li>
        <li>
          <Link
            to="/home"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            href="review" className="hover:text-primary">
            Review
          </Link>
        </li>
        <li>
          <Link
            to="/home"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            href="order" className="hover:text-primary">
            Order
          </Link>
        </li>

        <Social />
      </ul>
    </nav >
  );
}
