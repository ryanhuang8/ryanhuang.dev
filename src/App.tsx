import { RouterProvider } from "react-router-dom";
import {router} from "./utils/routing";

function App() {
  return (
    <div>
      hi
    <RouterProvider 
    router={router} /> 
    </div>
    
  )
}

export default App