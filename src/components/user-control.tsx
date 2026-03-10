"use client"

import { dark } from "@clerk/themes";
import { UserButton } from "@clerk/nextjs";

import { userCurrentTheme } from "@/hooks/use-current-theme";

interface Props {
    showName?: boolean;
}

export const UserControl = ({ showName }: Props) => {

    const currentTheme = userCurrentTheme();

    return (
        <UserButton 
            showName={showName}
            appearance={{
                elements: {
                    userButtonBox: "rounded-md!",
                    userButtonAvatarBox: "rounded-md! size-8!",
                    userButtonTrigger: "rounded-md!"
                },
                baseTheme: currentTheme === "dark" ? dark : undefined,
            }}
        />
    );
}
