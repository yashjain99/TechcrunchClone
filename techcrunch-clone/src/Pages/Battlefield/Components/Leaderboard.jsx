import ArrowDropDownRounded from '@material-ui/icons/ArrowDropDownRounded'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../../Homepage/Components/Loader'
import { getLeaderboardData } from '../Redux/action'
import FilterForm from './FilterForm'
import PaginationBlock from './PaginationBlock'

const Leaderboard = (props) => {
    const [page,setPage]=useState(1)
    const [sortName,setSort]=useState("")
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getLeaderboardData(`https://techcrunch-clone.herokuapp.com/leaderboard?_page=${page}&_limit=10&_sort=${sortName}`))
    },[page,sortName])
    const leaderboard=useSelector(state=>state.leaderboard.leaderboardData)
    const [animatedLoader,setAnimatedLoader]=useState(true)
  
    useEffect(()=>{
      setTimeout(()=>{
        setAnimatedLoader(false)
      },1500)
    })
    return (
        <div >
              <h1 style={{color:"black",fontWeight:900,margin:"50px 300px"}}>Battlefield Leaderboard</h1>
            <FilterForm page={page} sort={sortName}/>
           { animatedLoader?(<Loader/>): <div style={{marginLeft:"300px",marginRight:"300px"}}>
            <table className="table table-striped" >
                <thead>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Name <span onClick={()=>setSort("name")}> <ArrowDropDownRounded/></span></td>
                        <td>Event <span onClick={()=>setSort("event")}> <ArrowDropDownRounded/></span></td>
                        <td>Outcome <span onClick={()=>setSort("outcome")}> <ArrowDropDownRounded/></span></td>
                        <td>Status <span onClick={()=>setSort("status")}> <ArrowDropDownRounded/></span></td>
                    </tr>
                </thead>
                <tbody>
                    {  leaderboard && leaderboard 
                    .map((item,idx)=><tr key={item.id}>
                        <td>{item.id}</td>
                        <td><img src={item.url} width="40px"/></td>
                        <td>{item.name}</td>
                        <td>{item.event}</td>
                        <td>{item.outcome}</td>
                        <td>{item.status}</td>
                    </tr>)}
                </tbody>
            </table>
            <PaginationBlock setPage={setPage} page={page} data={leaderboard} />
            </div>}
        </div>
    )
}

export default Leaderboard
