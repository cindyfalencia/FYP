import * as React from "react";
import {alpha} from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Header from './components/Header';
// import MainGrid from './components/MainGrid';
// import SideMenu from './components/SideMenu';


export default function Dashboard(props:{disabledCustomTheme? :Boolean}){
  return (
    <CssBaseline>
      <Box sx={{display:'flex', flexDirection:'column', height:'100vh'}}>
        {/* Header Component */}
        <Header/>
        {/* Main Content Area */}
        <Stack direction="row" sx={{flexGrow: 1}}>
          {/* Side Menu */}
          <Box>
            <Image src="/images/avatar.jpg" alt="Avatar" width={150} height={150}></Image>
            <Box sx={{ mt: 2 }}>
              {/* Placeholder for Chat UI */}
              <p>Chatbot placeholder goes here</p>
          </Box>
          </Box>
        </Stack>
    </Box>
    </CssBaseline>
  )
}
