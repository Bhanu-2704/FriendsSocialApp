import HomePage from "./Pages/HomePage/HomePage.jsx";
import "./App.css";
import {createBrowserRouter , RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage option={0}/>
  },
  {
    path: "/search",
    element: <HomePage option={1}/>
  },{
    path: "/chats",
    element: <HomePage option={2}/>
  },
  {
    path: "/bookmarks",
    element: <HomePage option={3}/>
  },
  {
    path: "/friends",
    element: <HomePage option={4}/>
  },
  {
    path: "/profile",
    element: <HomePage option={5}/>
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
