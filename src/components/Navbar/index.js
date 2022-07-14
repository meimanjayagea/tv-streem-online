import React from 'react';
import { ReactComponent as Icon } from '../../asset/icon/tv.svg';
import { dataMenu } from './data';

const Navbar = () => {
  return (
    <nav className="flex md:flex items-center justify-between bg-whiteshadow-lg space-y-3 hover:bg-white">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Icon />
      </div>

      <div className="w-full block flex-grow justify-center lg:flex lg:items-center lg:w-auto">
        <MenuList data={dataMenu} />
      </div>
    </nav>
  );
};

const MenuList = ({ data }) => {
  return (
    <>
      <ul className="flex flex-col md:flex-row md:space-x-8 md:text-sm lg:flex-row list-none lg:ml-auto md:font-medium">
        {data.map((item) => {
          return (
            <li className="nav-item" key={item.id}>
              <a
                className="block pr-4 pl-4 text-center border-gray-800 text-gray-900  hover:bg-gray-400 hover:rounded-xl hover:border-gray-700 "
                href={item.path}>
                <span className="mx-2">{item.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Navbar;
