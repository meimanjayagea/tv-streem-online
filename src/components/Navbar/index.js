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
    <Disclosure as="nav" className="bg-white top-0 left-0 right-0 z-50 sticky bottom-5">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex justify-between h-16 px-2">
              <div className="absolute inset-y-0 left-0 flex px-2 items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-3 rounded-md bg-zinc-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-end sm:items-center sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Icon />
                </div>
                <div className="hidden sm:block sm:ml-6 text-right">
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
          <Disclosure.Panel className="sm:hidden z-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {dataMenu.map((item) => (
                <Disclosure.Button
                  key={item.id}
                  as="a"
                  href={item.path}
                  className={classNames(
                    item.current ? 'bg-white text-black' : 'text-zinc-900 hover:bg-slate-400',
                    'block px-3 py-2 rounded-md text-center font-medium'
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
  );
};

export default Navbar;
