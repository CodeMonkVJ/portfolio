const urls = [
    "https://utfs.io/f/76c34a94-d8db-40fc-aaa4-2a5e322b7ede-bz2sor.jpg"
];

const images = urls.map((url, index) => ({
    id: index + 1,
    url,
}));

export default function HomePage() {
    return (
        <main className="">
            <div className="flex flex-wrap gap-4">
                {[...images, ...images, ...images, ...images].map((image) => {
                    return (
                        <div key={image.id} className="w-36">
                            <img src={image.url} />
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
