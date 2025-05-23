import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { myroute } from "./Routes/index.jsx";
import Usercontext from "./components/UseContext/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  
<Usercontext>
  <RouterProvider router={myroute} />

</Usercontext>
    

);
