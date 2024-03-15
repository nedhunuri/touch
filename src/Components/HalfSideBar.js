import React from 'react'
import { useParams } from 'react-router-dom';
import BoardData from './BoardData';
import Home from './Home';



const HalfSideBar = () => {

    const path=useParams();
    console.log(path);
    switch(path.text){
      case "HOME":
        return   <Home/>
       case "LEADER BOARD":
        return   <BoardData/>
      
    }
  
}


export default HalfSideBar;
