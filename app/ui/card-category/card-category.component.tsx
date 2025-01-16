'use client';
import Image from 'next/image';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';

export default function CardCategory({ category }: { category: any }) {
    const pathName = usePathname();
    const handleClick = (slug: string) => {
        // navigate to the slug
        redirect(`/recipes/categories/${slug}`);
    }

    return (
        // add hover effect
        <div className="bg-white shadow-md cursor-pointer w-80 hover:shadow-lg transition-transform duration-300 transform hover:scale-105" onClick={() => handleClick(category.slug)}>
            <div className="w-full h-48 relative">
                <Image src={`/images/${category.image}`} alt={category.title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-bold">
                    <Link href={`${pathName}/${category.slug}`} className="text-[#4672ab]">
                        {category.title}
                    </Link>
                </h2>
                <p>{category.description}</p>
            </div>
        </div>
    );
}