'use client';
import { ReactNode } from 'react';

export default function Content({ children }: { children: ReactNode }) {
    return (
        <div className="container pt-16 pl-24 pr-24">
            {children}
        </div>
    );
}