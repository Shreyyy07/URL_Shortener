import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LinkIcon, LogOut } from "lucide-react";
import { UrlState } from "@/context";
import { logout } from "@/db/apiAuth";
import useFetch from "@/hooks/use-fetch";
import { BarLoader } from "react-spinners";

const Header = () => {
  const {loading, fn:fnLogout} = useFetch(logout);
    const navigate= useNavigate();

    const{user,fetchUser}= UrlState();

   
  return (
    <>
    <nav className=" py-4 flex justify-between items-center">
        <Link to="/">
        <img src="Logo.webp" className=" h-16 ml-6 mt-3 rounded-full" alt ="Logo"/>
        </Link>
        <div className="mr-8 mt-3 ">
            {!user ? (  // if user is not logged in then show this button //
            <Button onClick={()=> navigator("/auth")}>Login</Button>
            // else show this dropdown menu //
            ) :(<DropdownMenu>    
                <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden">

                <Avatar>
                   <AvatarImage src={user?.user_metadata?.profile_pic} className="object-contain" />
                   <AvatarFallback>SJ</AvatarFallback>
                 </Avatar>

                </DropdownMenuTrigger >
                <DropdownMenuContent>
                  <DropdownMenuLabel>{user?.user_metadata?.name}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                  <LinkIcon className="mr-2 h-4 w-4"/>
                  My Links</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-500">
                    <LogOut className="mr-1 h-4 w-4"/>
                     <span 
                      onClick={()=>{
                        fnLogout().then(()=> {
                          fetchUser();
                      navigate("/");
                      });
                  }}
                  //  className="text-red-400"
                  >
                    Logout
                  </span>
                     </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              )}
        </div>
    </nav>
    {loading && <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />}
    </>
  )
}

export default Header;

