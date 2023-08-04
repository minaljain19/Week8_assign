import logo from "./logo.svg";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./App.css";
import Users from "./component/Users";
import { Route, Routes } from "react-router-dom";
import { Typography } from "@mui/material";
import Profile from "./component/Profile";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Users />}></Route>
    <Route path="/profile" element={<Profile />}></Route>
  </Routes>
  
  );
}

export default App;
