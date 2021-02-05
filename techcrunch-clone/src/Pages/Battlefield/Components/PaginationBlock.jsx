import { Pagination } from '@material-ui/lab';
import React from 'react';

const PaginationBlock = ({setPage, data,page}) => {
     
    const totalPages = data && Math.ceil(data.length/3)
    console.log(data)
    console.log(totalPages)
    let pagesArr = []
    for(let i=1; i <= totalPages; i++){
        pagesArr.push(i)
    }
    console.log(pagesArr)
    const handleNext=()=>{
        if(page<pagesArr.length){
            setPage(page+1)
        }
        else{
            setPage(pagesArr.length)
        }
    }
    const handlePrev=()=>{
        if(page==1){
            setPage(page)
        }
        else{
            setPage(page-1)
        }
    }
    return (
        <div style={{display:"flex", justifyContent:"center"}} >
            <div style={{padding:10,border:"1px solid grey",borderRadius:"5px",margin:"5px"}} onClick={handlePrev}>Prev</div>
        {
            pagesArr.length > 0 && pagesArr.map((item)=> (
                <div style={{padding:10,border:"1px solid grey",borderRadius:"5px",margin:"5px",borderRadius:"5px"}} key={item}
                onClick={()=> setPage(item)}> {item} </div>
            ) )
        }
          <div style={{padding:10,border:"1px solid grey",borderRadius:"5px",margin:"5px"}} onClick={handleNext}>Next</div>
        </div>
    );
}

export default PaginationBlock;