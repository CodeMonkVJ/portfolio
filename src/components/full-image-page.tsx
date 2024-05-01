import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "~/components/ui/button";

export default async function FullPageImageView(props: { photoId: number }) {
    const image = await getImage(props.photoId);
    const uploaderInfo = await clerkClient.users.getUser(image.userId);
    console.log(uploaderInfo);
    return (
        <div className="flex h-full w-full min-w-0">
            <div className="flex-shrink flex justify-center items-center">
                <img src={image.url} className="flex-shrink object-contain" />
            </div>

            <div className="flex w-48 flex-shrink-0 flex-col border-l">
                <div className="text-lg text-center border-b p-2">{image.name}</div>
                <div className="flex flex-col p-2">
                    <span>Uploaded By:</span>
                    <span>{uploaderInfo.username}</span>
                </div>
                <div className="flex flex-col p-2">
                    <span>Created On:</span>
                    <span>{new Date(uploaderInfo.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex flex-col p-2">
                    <form action={async () => {
                        "use server";
                        await deleteImage(props.photoId);
                    }}>
                        <Button type="submit" variant="destructive">Delete</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
