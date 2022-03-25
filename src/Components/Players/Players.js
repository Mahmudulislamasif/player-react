import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './Players.css'

const Players = () => {
    const [players,setPlayers]=useState([]);
    const [addInfo,setInfo]=useState([]);
    useEffect(()=>{
        fetch('players.json')
        .then(res=>res.json())
        .then(data=>setPlayers(data))
    },[])
    const addInfoToBox=(player)=>{
        setInfo(player) 
    }
    return (
        <div className='container content-class'>
          <div className='row g-4'>
            {
                players.map(player=><Player key={player.id} player={player} addInfoToBox={addInfoToBox}></Player>)
            }
        </div>
        <div className='section-container'>
          <div className='section-details'>
            <h6>Name: {addInfo.name}</h6>
            <h6>Age:{addInfo.age}</h6>
            <h6>Price:{addInfo.price}</h6>
          </div>
        </div>
        </div>
       
    );
};

export default Players;