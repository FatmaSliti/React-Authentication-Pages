import "./App.css";
import RootLayout from "./components/RootLayout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
// import MainHeader from "./components/mainNavigation";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/signIn", element: <SignIn /> },
      { path: "/signUp", element: <SignUp /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
