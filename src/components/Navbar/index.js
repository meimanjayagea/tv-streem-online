/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { dataMenu } from './data';
import { ReactComponent as Icon } from '../../asset/icon/tv.svg';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  return (
<<<<<<< HEAD
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
=======
    <Disclosure as="nav" className="bg-white fixed top-0 left-0 right-0">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md bg-zinc-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6 bg-white" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Icon />
                </div>
                <div className="hidden sm:block sm:ml-6 text-center">
                  <div className="flex space-x-4">
                    {dataMenu.map((item) => (
                      <a
                        key={item.id}
                        href={item.path}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-zinc'
                            : 'text-zinc-900 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}>
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {dataMenu.map((item) => (
                <Disclosure.Button
                  key={item.id}
                  as="a"
                  href={item.path}
                  className={classNames(
                    item.current ? 'bg-white text-black' : 'text-zinc-900 hover:bg-gray-700',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}>
                  {item.title}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
>>>>>>> 230d4d4afb55b6bb169c73cec16e1792a89640d9
  );
};

export default Navbar;
