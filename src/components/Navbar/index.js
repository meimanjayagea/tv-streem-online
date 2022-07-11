import React from 'react';
import { ReactComponent as Icon } from '../../asset/icon/tv.svg';
import { dataMenu } from './data';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white  p-4 shadow-lg space-y-3 hover:bg-white hover:ring-sky-500">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Icon />
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <MenuList data={dataMenu} />
      </div>
    </nav>
  );
};

const MenuList = ({ data }) => {
  return (
    <>
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium lg:flex-row list-none lg:ml-auto md:font-medium">
        {data.map((item) => {
          return (
            <li className="nav-item" key={item.id}>
              <a
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 md:border-0  md:p-0  dark:text-gray-400 dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                href={() => console.log('ini path')}>
                <span className="ml-2">{item.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Navbar;
