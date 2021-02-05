import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'
 

const Table = (props) => {
    const leaderboard=useSelector(state=>state.leaderboard.leaderboardData)
     
    return (
        <div style={{marginLeft:"300px",marginRight:"300px"}}>
            <h1 style={{color:"black",fontWeight:700,margin:"50px 0"}}>Battlefield Leaderboard</h1>
            
            <table className="table table-striped" >
                <thead>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Name</td>
                        <td>Event</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard && leaderboard.filter((item)=>item.id<=10).map((item,idx)=><tr key={item.id}>
                        <td>{idx+1}</td>
                        <td><img src={item.url} width="40px"/></td>
                        <td>{item.name}</td>
                        <td>{item.event}</td>
                        <td>{item.status}</td>
                    </tr>)}
                </tbody>
            </table>
            <div style={{marginLeft:"550px",marginTop:"30px"}}><Link to="/startup-battlefield/leaderboard">View Full Leaderboard</Link></div>
           
        </div>
    )
}

export default Table
