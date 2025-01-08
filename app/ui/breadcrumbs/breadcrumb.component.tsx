'use client';
import { Breadcrumbs } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MyBreadcrumbs() {
    // get breadcrumbs from the router
    const breadcrumbs = usePathname().split('/').map((path, index, paths) => {
        if (path === '') {
            return null;
        }
        const url = paths.slice(0, index + 1).join('/');
        return (
            <Link key={index} href={url}>
                <p className="uppercase font-bold text-sm">{path}</p>
            </Link>
        );
    });

    // add the a last separator
    breadcrumbs.push(
        <p key={breadcrumbs.length} className="uppercase font-bold text-sm"></p>
    );

    return (
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" style={{ color: '#ab464b', fontStyle: 'bold'}}/>}
            aria-label="breadcrumb"
        >
            {breadcrumbs}
            
      </Breadcrumbs>
    );
}