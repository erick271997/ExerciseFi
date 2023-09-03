
import './App.css';
import {  Route,  Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './componets/Footer';


function App() {
  return (


 <Box width='400px' sx={{width: {xl:'1488px'}}} m='auto'>     
     <Navbar/>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
    </Routes>   
 
    <Footer/>
    
    </Box>
 
    
   
  );
}

export default App;
