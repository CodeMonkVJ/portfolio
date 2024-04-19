import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { UploadButton } from "./upload-button";

export function TopNav() {
    return (
        <nav className="flex items-center justify-between w-full p-4 text-xl 
            font-semibold border-b">
            <div>Portfolio</div>
            <div className="flex flex-row gap-4 items-center">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UploadButton/>                 
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
}

