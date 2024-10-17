import * as React from "react";
import {alpha} from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
// import AppNavbar from './components/AppNavBar';
import Header from './components/Header';
// import MainGrid from './components/MainGrid';
// import SideMenu from './components/SideMenu';

import Image from "next/image";

export default function Dashboard(props:{disabledCustomTheme? :Boolean}){
  return (
    <Box sx={{display:'flex'}}>
      {/* add side menu here */}
      {/* <AppNavbar/> */}
      {/* this is the main content */}
      <Box>
        <Stack>
          <Header/>
          {/* the main grid is here  */}
        </Stack>
      </Box>
    </Box>
  )
}
