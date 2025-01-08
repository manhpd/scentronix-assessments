import { HeaderMenuItem } from "@/lib/model/header.model";
import Link from "next/link";

export default function SubMenu({menuItem, isShowSubMenu} : {menuItem?: HeaderMenuItem, isShowSubMenu: boolean}) {
    return (
        <div className={`relative w-full bg-[#f8f5f0] pt-4 pb-4 pl-72 ${isShowSubMenu ? 'block' : 'hidden'}`}>
            <ul className="flex space-x-8">
                {menuItem?.subMenu?.map((item, index) => (
                    <li key={index}>
                        <Link href={`${menuItem.url}${item.url}`} className="text-sm">
                            <p className="font-bold">{item.label}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}