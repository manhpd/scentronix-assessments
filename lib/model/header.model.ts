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