// import { Button ,Stack} from '@mui/material'
// import { Delete, Send, Photo } from "@mui/icons-material"
// import AppHeader from './components/AppHeader';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from './layouts/AuthLayout'
import Login from "./pages/Login";
import BackendLayout from "./layouts/BackendLayout";
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import Setting from './pages/Setting';
import Report from './pages/Report';
import { DASHBOARD_PATH, PRODUCT_PATH, REPORT_PATH, SETTING_PATH  } from './config/constants'


// function App() {

  // return (
  //   <>
  //   <h1>MUI Button</h1>
  //   <Stack spacing = {2} direction='row'>
  //     <Button variant= 'text'>Text</Button>
  //     <Button variant='contained'>contained</Button>
  //     <Button variant='outlined'>Textoutlined</Button>
  //   </Stack>
  //   <Stack spacing={2} direct="row">
  //     <Button variant='text' startIcon = {<Send />}> Start </Button>
  //     <Button variant='contained' startIcon = {<Delete />}>Delete </Button>
  //     <Button variant='outlined' starIcon= { <Photo />}>Photo</Button>
  //   </Stack>
      
  //   </>
  // )

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<BackendLayout />}>
            <Route path={DASHBOARD_PATH} element={<Dashboard />} />
            <Route path={PRODUCT_PATH} element={<Product />} />
            <Route path={REPORT_PATH} element={<Report />} />
            <Route path={SETTING_PATH} element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  
  }
  
  export default App
