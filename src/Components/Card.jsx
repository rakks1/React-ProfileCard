import React from 'react'
import '../Components/Card.css'


const Card = (props) => {
  return (
    <div className='CardContainer'>
        <div className='card'>
            <span className={props.status? "status online" : "status offline"}>{props.status? "online" : "offline"}</span>
            <img src={props.image} width={100} height={100} alt="" />
            <h2>{props.name}</h2>
            <h3>{props.place}</h3>
            <h4>{props.role}</h4>
            <div>
                <button>Message</button>
                <button>Following</button>
            </div>
        </div>

        <div className='skills'>
            <h2>SKILLS</h2>
            <ul>
                { props.skills.map((SKILL,INDEX)=>{
                    return <li key={INDEX}>{SKILL}</li>
                })}
               
            </ul>
        </div>
      
    </div>
  )
}

export default Card
