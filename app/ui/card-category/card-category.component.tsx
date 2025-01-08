import Image from 'next/image';
import Link from 'next/link';

export default function CardCategory({ category } : { category: any }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer w-80" >
            <Image src={`/images/${category.image}`} alt={category.title} width={300} height={200} />
            <h2 className="text-2xl font-bold">
                <Link href={`/recipes/categories/${category.slug}`} className="text-[#4672ab] underline">
                    {category.title}
                </Link>
            </h2>
            <p>{category.description}</p>
        </div>
    );
}