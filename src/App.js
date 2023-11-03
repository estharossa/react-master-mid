import './App.css';
import Main from './components/Main'
import { createBrowserRouter, redirect, RouterProvider, Router } from "react-router-dom";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: Main,
    children: [
      
    ],
  }
]);


function App() {
  return (
    // <div className="app">
    //   <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    // </div>
    <div className="app">
      <Main/>
    </div>
  )
}

export default App
