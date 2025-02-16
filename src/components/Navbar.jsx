
import { ArrowRight, HeartPulse, Menu } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";


const Navbar = () => {
  return (
    <div className="bg-red-700 sticky top-0 z-50">
      <nav className="text-white flex justify-between items-center p-4">
        <div className="flex items-center gap-4 ">
          <HeartPulse size={30} className="text-white" />
          <h1 className="text-white font-semibold" >Blood Link</h1>
        </div>
        <div>
          <ul className="flex text-white list-none  flex-row items-center justify-center font-medium">
            <li className="mr-4" style={{ textTransform: "capitalize" }}>
              <Link to="/">home</Link>
            </li>
            <li className="mr-4" style={{ textTransform: "capitalize" }}>
              <Link to="/">about</Link>
            </li>
            <li className="mr-4" style={{ textTransform: "capitalize" }}>
              <Link to="/">Donors</Link>
            </li>
            <li className="mr-4" style={{ textTransform: "capitalize" }}>
              <Link to="/">blood banks</Link>
            </li>
            <li className="mr-4" style={{ textTransform: "capitalize" }}>
              <Button variant="outline" className="text-white bg-red-700">Donate Now <ArrowRight /> </Button>
            </li>
            <li>
              <SignedOut>
                <SignInButton>
                  <Button className="bg-white text-red-700" >Login</Button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton></UserButton>
              </SignedIn>

            </li>
          </ul>
        </div>
      </nav>
      {/* user icon and dark mode icon */}
    </div>
  )
};

export default Navbar;


// const MobileNavbar = () => {
//   const role = "mentor"

//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button className="text-black bg-gray-100 rounded-full hover:bg-gray-200">
//           <Menu />
//         </Button>
//       </SheetTrigger>
//       <SheetContent className="flex flex-col" >
//         <SheetHeader className="flex flex-col items-center justify-between mt-2">
//           <SheetTitle>Blood Link</SheetTitle>
//         </SheetHeader>
//         <nav className="flex flex-col space-y-4">
//           <a to="/my-learning">My Learning</a>
//           <a to="/profile">Edit Profile</a>



//         </nav>
//         {
//           role === "mentor" && (
//             <SheetFooter>
//               <SheetClose asChild>
//                 <Button type="submit">Dashboard</Button>
//               </SheetClose>
//             </SheetFooter>
//           )
//         }
//       </SheetContent>
//     </Sheet>
//   );
// };

