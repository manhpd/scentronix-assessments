import Link from "next/link";
import { HeaderMenuItem } from "../header.component";

export default function SubMenu({menuItem, isShowSubMenu} : {menuItem?: HeaderMenuItem, isShowSubMenu: boolean}) {
    return (
        <div className={`absolute w-full top-16 left-0 bg-[#f8f5f0] p-4 ${isShowSubMenu ? 'block' : 'hidden'}`}>
            <ul className="flex space-x-4">
                {menuItem?.subMenu?.map((item, index) => (
                    <li key={index}>
                        <Link href={`${menuItem.url}/${item.url}`} className="text-sm">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}