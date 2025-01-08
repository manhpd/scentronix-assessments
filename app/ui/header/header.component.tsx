// header with logo and horizontal menu
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SubMenu from './sub-menu/sub-menu.component';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { HeaderMenuItem } from '@/lib/model/header.model';

// sample header data
const headerData = {
    logo: {
        src: '/logo.png',
        alt: 'Next.js Logo',
        width: 100,
        height: 100
    },
    menu: [
        {
            label: 'SHOP',
            url: '/shop',
            subMenu: [
            ]
        },
        {
            label: 'RECIPES',
            url: '/recipes',
            subMenu: [
                {
                    label: 'CATEGORIES',
                    url: '/categories'
                },
                {
                    label: 'COLLECTIONS',
                    url: '/my-collections'
                },
                {
                    label: 'RESOURCES',
                    url: '/resources'
                }
            ]
        },
        {
            label: 'ABOUT',
            url: '/about',
            subMenu: []
        },
        {
            label: 'BLOG',
            url: '/blog',
            subMenu: []
        }

    ]
};

export default function Header() {
    const [menuItem, setMenuItem] = React.useState<HeaderMenuItem | undefined>(undefined);
    const [isShowSubMenu, setIsShowSubMenu] = React.useState(false);

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
        <div className="h-36">
            <div className="flex items-center absolute top-1 left-24 pl-8 z-10">
                <Image src={headerData.logo.src} alt={headerData.logo.alt} width={headerData.logo.width} height={headerData.logo.height} />
            </div>
            <header className="flex items-center pt-8 pb-8 pl-72 ">
                <nav >
                    <ul className="flex space-x-16 ">
                        {headerData.menu.map((item, index) => (
                            <li key={index}>
                                <Link className='' href={item.url} onMouseEnter={() => onMouseEnter(item)} >
                                    <p className={clsx(
                                        'text-base font-bold border-b-2 hover:border-[#ab464b] transition transform hover:-translate-y-1',
                                        pathname.includes(item.url) ? 'border-[#ab464b]' : 'border-transparent'
                                    )}>{item.label}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <SubMenu menuItem={menuItem} isShowSubMenu={isShowSubMenu} />
        </div>

    );
}
