import { ReactNode } from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';


export function Social() {
  return (
    <ul>
      <li className="flex items-center justify-between">
        <a href="" className="hover:text-primary">
          <FaFacebookSquare size={32} />
        </a>
        <a href="" className="hover:text-primary">
          <FaTwitterSquare size={32} />
        </a>
        <a href="" className="hover:text-primary">
          <FaInstagramSquare className="hover:text-primary" size={32} />
        </a>
      </li>
    </ul>
  );
}
