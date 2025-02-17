
import DonationImportance from "./assets/constants";
import Emergency from "./components/Emergency";
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Infor from "./components/Infor";
import BloodGroupFinder from "./components/BloodGroupFinder";
import Donors from "./components/Donors";
import DonorsFeedback from "./components/DonorsFeedback";
import Footer from "./components/Footer";
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home />
    },{
      path:"/about",
      element : <><div className=" w-[1280px] m-auto"><Navbar/> <Infor heading={DonationImportance.heading}> {DonationImportance.description} </Infor> <Footer/> </div></>
    },
    {
      path: "/bloodgroup-finder",
      element : <div className=" w-[1280px] m-auto"> <Navbar/> <BloodGroupFinder/><Footer/></div>
    },
    {
      path : "/donors",
      element : <div className=" w-[1280px] m-auto"> <Navbar/> <Donors/> <Footer/></div>
    },
    {
      path : "/donars-feedback",
      element : <div className=" w-[1280px] m-auto"> <Navbar/> <DonorsFeedback/>  <Footer/></div>
    },

    {
      path:"/emergency",
      element : <div className=" w-[1280px] m-auto"><Navbar/> <Emergency/> <Footer/></div>
    }])
  return(
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  );
}


export default App



