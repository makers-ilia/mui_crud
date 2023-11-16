import { type } from "os";
import React from "react";
import Button from "./ui/Button/Button";
import { log } from "console";
import ResponsiveAppBar from "./components/Navbar";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <MainRoutes />
    </div>
  );
};

export default App;
