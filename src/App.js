import './App.css';
import { Box,Button } from '@chakra-ui/react';
import {Link} from "react-router-dom"
import Mainroute from './Comp/Mainroute';

function App() {
  return (
    <Box textAlign="center" >
      <Link to={"/"}><Button bgColor="blue">Homepage</Button></Link>
      <Link to={"/data"}><Button bgColor="red">Piechart</Button></Link>
      <Mainroute/>
    </Box>
  );
}

export default App;
