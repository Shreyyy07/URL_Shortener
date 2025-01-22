import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LinkIcon, LogOut } from "lucide-react";

const Header = () => {
    const navigator= useNavigate();
    const user=false;
  return (
    <nav className=" py-4 flex justify-between items-center">
        <Link>
        <img src="Logo.webp" className=" h-16 ml-6 mt-3 rounded-full" alt ="Logo"/>
        </Link>
        <div className="mr-8 mt-3 ">
            {!user ? (  // if user is not logged in then show this button //
            <Button onClick={()=> navigator("/auth")}>Login</Button>
            // else show this dropdown menu //
            ) :(<DropdownMenu>    
                <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden">

                <Avatar>
                   <AvatarImage src="https://github.com/shadcn.png" />
                   <AvatarFallback>SJ</AvatarFallback>
                 </Avatar>

                </DropdownMenuTrigger >
                <DropdownMenuContent>
                  <DropdownMenuLabel>Shrey Joshi</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                  <LinkIcon className="mr-2 h-4 w-4"/>
                  My Links</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-500">
                    <LogOut className="mr-1 h-4 w-4"/>
                     Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              )}
        </div>
    </nav>
  )
}

export default Header;

