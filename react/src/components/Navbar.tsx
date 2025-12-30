import { Link, useLocation } from "react-router-dom";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import logo from '../assets/react.svg';

const navItems = [
    { name: 'Dashboard', to: '/dashboard' },
    { name: 'Playground', to: '/playground' },
    { name: 'About', to: '/about', },
];

function classNames(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
    // Get current location to highlight active link 
    const location = useLocation();
    return (
        <Disclosure as="nav" className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Menu
                                    aria-hidden="true"
                                    className="size-6 group-data-open:hidden"
                                />
                                <X
                                    aria-hidden="true"
                                    className="hidden size-6 group-data-open:block"
                                />
                            </DisclosureButton>
                        </div>
                    </div>

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <Link to='/'>
                                <img
                                    alt="Your Company"
                                    src={logo}
                                    className="h-8 w-auto px-4"
                                />
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className={classNames(
                                            location.pathname === item.to ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                                            'rounded-full px-4 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/*<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">.<span className="sr-only">View notifications</span>  */}

                    <div className="flex items-center justify-end pr-4">
                        <Link to='/login'>
                            <button type="button" className="cursor-pointer rounded-full px-4 py-2 bg-gray-950'/50 text-gray-300 p-2 hover:bg-white/5 hover:text-white text-sm font-medium">
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navItems.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as={Link}
                            to={item.to}
                            aria-current={location.pathname === item.to ? 'page' : undefined}
                            className={classNames(
                                location.pathname === item.to ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}

export default NavBar; 
