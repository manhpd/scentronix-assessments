// header with logo and horizontal menu
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SubMenu from './sub-menu/sub-menu.component';
import { useParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export interface HeaderData {
    logo: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    menu: {
        label: string;
        url: string;
        subMenu: {
            label: string;
            url: string;
        }[];
    }[];
}

export interface HeaderMenuItem {
    label: string;
    url: string;
    subMenu: {
        label: string;
        url: string;
    }[];
}
// sample header data
const headerData = {
    logo: {
        src: '/logo.png',
        alt: 'Next.js Logo',
        width: 40,
        height: 40
    },
    menu: [
        {
            label: 'Home',
            url: '/',
            subMenu: [
            ]
        },
        {
            label: 'About',
            url: '/about',
            subMenu: []
        },
        {
            label: 'Recipes',
            url: '/recipes',
            subMenu: [
                {
                    label: 'Recipe 1',
                    url: '/recipe-1'
                },
                {
                    label: 'Recipe 2',
                    url: '/recipe-2'
                }
            ]
        }
    ]
};

export default function Header() {
    const [ menuItem, setMenuItem ] = React.useState<HeaderMenuItem | undefined>(undefined);
    const [ isShowSubMenu, setIsShowSubMenu ] = React.useState(false);

    const pathname = usePathname();

    const onMouseEnter = (menuItem: HeaderMenuItem) => {
        setMenuItem(menuItem);
        if (menuItem.subMenu.length > 0) {
            setIsShowSubMenu(true);
        } else {
            setIsShowSubMenu(false);
        }
    }

    return (
        <header className="flex justify-between items-center p-4">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold">Next.js</h1>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    {headerData.menu.map((item, index) => (
                        <li key={index}>
                            <Link className='' href={item.url} onMouseEnter={() => onMouseEnter(item)} >
                                <p className={clsx(
                                    'text-sm',
                                    pathname === item.url ? 'underline' : 'no-underline'
                                )}>{item.label}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <SubMenu menuItem={menuItem} isShowSubMenu={isShowSubMenu} />
        </header>
    );
}
