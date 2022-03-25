import React from 'react';
import './Player.css'
const Player = ({player,addInfoToBox}) => {
    const {name,role,image,team,price,id}=player;
    console.log(addInfoToBox)

    return (
        <div className='col-md-4'>
             <div className='shadow-lg p-3 player-info'>
             <img className='w-50' src={image} alt=''/>
             <div>
             <h5>Name: {name}</h5>
             <h6>Role: {role}</h6>
             <h6>Ipl team: {team}</h6>
             <h6>Price:{price}</h6>
             <button className='btn-class' onClick={()=>addInfoToBox(player)}>Details</button>
             </div>
             </div>
        </div>
    );
};

export default Player;