import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import DarkMode from './DarkMode';

const user = {
    name: 'User',
    email: 'user@example.com',
    imageUrl:
        'data:image/jpeg;base64,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'
}
const navigation = [
    { name: 'Todo-List', href: '#', current: true },
    { name: 'About', href: '#', current: false }
]
const userNavigation = [
    { name: 'Hello User', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-8 w-8"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                                alt="Todo app"
                                            />
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-gray-900 text-white'
                                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'px-3 py-2 rounded-md text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            <button
                                                type="button"
                                                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            >
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>

                                            {/* Profile dropdown */}
                                            <Menu as="div" className="relative ml-3">
                                                <div>
                                                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                        <span className="sr-only">Open user menu</span>
                                                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        {userNavigation.map((item) => (
                                                            <Menu.Item key={item.name}>
                                                                {({ active }) => (
                                                                    <a
                                                                        href={item.href}
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100' : '',
                                                                            'block px-4 py-2 text-sm text-gray-700'
                                                                        )}
                                                                    >
                                                                        {item.name}
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block px-3 py-2 rounded-md text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="border-t border-gray-700 pt-4 pb-3">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                            <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                        </div>
                                        <button
                                            type="button"
                                            className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="mt-3 space-y-1 px-2">
                                        {userNavigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <DarkMode />

            </div>
        </>
    )
}
