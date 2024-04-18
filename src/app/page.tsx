import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
    const images = await db.query.images.findMany({
        orderBy: (model, { desc }) => desc(model.id),
    });
    return (
        <main className="">
            <SignedOut>
                <div className="h-full w-full text-2xl text-center">Please sign in above</div>
            </SignedOut>
            <SignedIn>
                <div className="flex flex-wrap gap-4">
                    {images.map((image) => {
                        return (
                            <div key={image.id} className="w-36 flex flex-col">
                                <img src={image.url} />
                                <div>{image.name}</div>
                            </div>
                        );
                    })}
                </div>
            </SignedIn>
        </main>
    );
}

