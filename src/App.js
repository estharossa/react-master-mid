import './App.css';
import Main from './components/Main'
import { createBrowserRouter, redirect, RouterProvider, Router } from "react-router-dom";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Main />,
  }
]);


function App() {
  return (
      <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  )
}

export default App
