import React from 'react'
import { useState } from 'react'
import { Box,Button,InputBase,styled } from '@mui/material'
import { Getweather } from '../services/api'

const Container= styled(Box)({
  backgroundColor:'#445A6F',
  padding:10
})



const Getbutton=styled(Button)({
  backgroundColor:'#e67e22'
})
const Input= styled(InputBase)({
  color:"#FFF",
  marginRight:20,
  fontSize:18
})

export default function Form({ setresult}) {
  const [data,setData]=useState({ city : '',country: ''})
    
    const Handlechange=(e) =>{
      setData({ ...data,[e.target.name]: e.target.value});
      console.log(data);
    }
    const Getweatherinfo=async ()=>{
      let result=await Getweather(data.city,data.country);
      setresult(result);
    }

  return (
    <Container>
      <Input placeholder='city'name='city' onChange={(e)=> Handlechange(e)}/>
      <Input placeholder='country' name='country' onChange={(e)=> Handlechange(e)}/>
      <Getbutton variant='contained' onClick={Getweatherinfo}>Get Weather</Getbutton>
    </Container>
  )
}
