
import DonationImportance from "./assets/constants";
import Emergency from "./components/Emergency";
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Infor from "./components/Infor";
import BloodGroupFinder from "./components/BloodGroupFinder";
import Donors from "./components/Donors";
import DonorsFeedback from "./components/DonorsFeedback";
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home />
    },{
      path:"/about",
      element : <><div className=" w-[1280px] m-auto"><Navbar/> <Infor heading={DonationImportance.heading}> {DonationImportance.description} </Infor></div></>
    },
    {
      path: "/bloodgroup-finder",
      element : <div className=" w-[1280px] m-auto"> <Navbar/> <BloodGroupFinder/></div>
    },
    {
      path : "/donors",
      element : <div className=" w-[1280px] m-auto"> <Navbar/> <Donors/> </div>
    },
    {
      path : "/donars-feedback",
      element : <div className=" w-[1280px] m-auto"> <Navbar/> <DonorsFeedback/>  </div>
    },

    {
      path:"/emergency",
      element : <div className=" w-[1280px] m-auto"><Navbar/> <Emergency/> </div>
    }])
  return(
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  );
}


export default App



