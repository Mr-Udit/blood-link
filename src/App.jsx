
import Home from "./components/Home"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home />
    }])
  return(
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  );
}


export default App



