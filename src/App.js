import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes/Routes";
// import { Toaster } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div data-theme="light" className="max-w-screen-xl mx-auto">
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
