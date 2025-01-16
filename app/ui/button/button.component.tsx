'use client';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    props?: any;
}

export default function Button({ children, props }: ButtonProps) {
    return (
        <button {...props} className="text-black border-2 border-rose-500 px-4 py-2 ">
            {children}
        </button>
    );
}
