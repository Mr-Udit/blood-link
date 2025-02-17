
import DonationImportance from "./assets/constants";
import Emergency from "./components/Emergency";
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Infor from "./components/Infor";
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home />
    },{
      path:"/about",
      element : <><Navbar/> <Infor heading={DonationImportance.heading}> {DonationImportance.description} </Infor></>
    },{
      path:"/emergency",
      element : <><Navbar/> <Emergency/> </>
    }])
  return(
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  );
}


export default App



