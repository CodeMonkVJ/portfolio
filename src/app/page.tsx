import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const urls = [
    "https://utfs.io/f/76c34a94-d8db-40fc-aaa4-2a5e322b7ede-bz2sor.jpg"
];

const images = urls.map((url, index) => ({
    id: index + 1,
    url,
}));

export default async function HomePage() {
    const posts = await db.query.posts.findMany();
    return (
        <main className="">
            <div className="flex flex-wrap gap-4">
                {posts.map((post) => (
                    <div key={post.id}>{post.name}</div>
                ))}
                {[...images, ...images, ...images, ...images].map((image, index) => {
                    return (
                        <div key={image.id + "-" + index} className="w-36">
                            <img src={image.url} />
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
