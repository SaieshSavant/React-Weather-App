import { Box,Typography ,styled} from '@mui/material'
import React from 'react'
import {LocationOn,SettingsBrightness,Opacity,Brightness6,Dehaze,Cloud} from '@mui/icons-material'


const Container= styled(Box)({
  padding:25
})

const Row= styled(Typography)({
  padding:7
})


export default function Information({ result}) {
  return (
    
    result && Object.keys(result).length >0 ?
    <Container>
       <Row><LocationOn/>  Location : {result.name},{result.sys.country}</Row>
       <Row><SettingsBrightness/>  Temperature : {result.main.temp}</Row>
       <Row><Opacity/>  Humidity : {result.main.humidity}</Row>
       <Row><Brightness6/>  Sunrise : {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
       <Row><Brightness6/>  Sunset : {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row>
       <Row><Dehaze/>  Weather : {result.weather[0].main}</Row>
       <Row><Cloud/>  Clouds : {result.clouds.all}%</Row>
       

       
       
    </Container>
    : null
  )
}
