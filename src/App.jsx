
import DonationImportance from "./assets/constants";
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
    }])
  return(
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  );
}


export default App



