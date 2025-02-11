'use client';
import { UserButton, useAuth } from "@clerk/nextjs";
import Container from "../Container";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import SearchInput from "../Searchinput";
import { ModeToggle } from "../theme-toggle";
import { NavMenu } from "./NavMenu";
import { Bed } from "lucide-react";
const NavBar = () => {
    const router = useRouter()
    const { userId } = useAuth()
    return (
        <div className="sticky top-0 border border-b-primary/10 bg-secondary ">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 cursor-pointer" onClick={() => router.push('/')}>
                        <Bed size={28} color="#161ddf" absoluteStrokeWidth />
                        <div className="font-bold text-xl">StaySleek</div>
                    </div>
                    <SearchInput />
                    <div className="flex gap-3 items-center" >
                        <div>
                            <ModeToggle />
                            <NavMenu />
                        
                        </div>
                        <UserButton afterSignOutUrl="/" />
                        {!userId && <>
                            <Button onClick={() => router.push('/sign-in')} variant="outline" size='sm'>Sign-in</Button>
                            <Button onClick={() => router.push('/sign-up')} size='sm'>Sign-up</Button>

                        </>}
                    </div>
                </div>
            </Container>

        </div>
    );
}

export default NavBar;