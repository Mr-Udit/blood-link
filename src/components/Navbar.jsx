
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
    <div className="h-16 mb-10 dark:bg-[#0A0A0A] mt-4 bg-white border-b dark:border-b-gray-800 border-b-gray-200 top-0 left-0 right-0 duration-300 z-10">
      <div className="bg-red-700 sticky top-0 z-50 items-center justify-between hidden mx-auto max-w-7xl md:flex">
        <nav className="text-white w-full flex justify-between items-center p-4">
          <div className="flex items-center gap-4 ">
            <HeartPulse size={30} className="text-white" />
            <h1 className="text-white font-semibold" >Blood Link</h1>
          </div>
          <div className="">
            <ul className=" flex text-white list-none  flex-row items-center justify-center font-medium">
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
      <div className="flex items-center justify-between h-full bg-red-700 px-4 md:hidden">
        <HeartPulse size={30} className="text-white" />
        <h1 className="text-white font-semibold" >Blood Link</h1>
        <MobileNavbar />
      </div>
    </div>
  )
};

export default Navbar;


const MobileNavbar = () => {
  const role = "mentor"

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-black bg-gray-100 rounded-full hover:bg-gray-200">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col" >
        <SheetHeader className="flex flex-col items-center justify-between mt-2">
          <SheetTitle>Blood Link</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4">
          <a to="/my-learning">My Learning</a>
          <a to="/profile">Edit Profile</a>



        </nav>
        {
          role === "mentor" && (
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Dashboard</Button>
              </SheetClose>
            </SheetFooter>
          )
        }
      </SheetContent>
    </Sheet>
  );
};

// import { Button } from "./ui/button";

// export default function Header() {
//   return (
//     <div
//       className="flex justify-between items-center p-4 bg-red-700 sticky font-medium text-white  px-10
//     "
//     >
//       {/* logo  */}
//       <div>
//         BloodLink
//       </div>

//       {/* navlinks */}
//       <div className="flex items-center gap-6  ">
//         <div>
//           <ul className="flex space-x-4 flex-row">
//             <li>Home</li>
//             <li>Donors</li>
//             <li>About</li>
//             <li>Emergency</li>
//           </ul>
//         </div>
//         <div>
//           <SignedOut>
//             <SignInButton>
//               <Button className="bg-transparent outline rounded">
//                 Login
//               </Button>
//             </SignInButton>
//           </SignedOut>

//           <SignedIn>
//             <UserButton></UserButton>
//           </SignedIn>
//         </div>
//       </div>
//     </div>
//   );
// }

