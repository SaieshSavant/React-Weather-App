
import {Box ,styled} from '@mui/material'
import sunset from '../assets/images/flower.jpg';
import { useState } from 'react';
import Form from '../Components/Form';
import Information from '../Components/Information';

const Component=styled(Box)({
    height:'100vh',
    display:'flex',
    alignItems:'center',
    width:'65%',
    margin:'0 auto'
})


const Image=styled(Box)({
    backgroundImage:`url(${sunset})`,
    height:'80%',
    width:'27%',
    backgroundSize:'cover',
    borderRadius:'20px 0 0 20px'

    
})


export default function Home() {
   const [result, setresult]=useState();
    
  return (
    <Component>
        <Image></Image>
        <Box style={{height:'80%',width:'73%'}}>
            <Form setresult={setresult}/>
            <Information result={result}/>
        </Box>
    </Component>
  )
};
