  
import React, { useState, useEffect } from "react";

function Pagination({ showPerPage,onPaginationChange,total}) {
 
    const [counter, setCounter] = useState(1);
    // console.log( showPerPage)

    const [numberOfButtons, setNumberOfButoons] = useState(
        Math.ceil(total / showPerPage)
      );

    useEffect(()=>{
        const value=showPerPage*counter;
        // console.log('start value',value-showPerPage)
        // console.log('end value',value)
        onPaginationChange(value-showPerPage,value)
    },[counter])


    const handleClick=(type)=>{
        // setCounter(counter+1)

        if(type === 'next')
        {
            if(numberOfButtons === counter)
            {
                setCounter(counter)
            }
            else
            {
                setCounter(counter+1)
            }
        }

    }


    const handleClicks=(type)=>{
        // setCounter(counter-1)
       if(type==='prev')
       {
            if(counter===1)
            {
                setCounter(1)
            }  
            else
            {
                setCounter(counter-1)
            }
       }

    }


    
    return (
        <>
                   <div className="d-flex justify-content-center">
                          <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item"><a class="page-link" href="#" onClick={()=>handleClicks('prev')}>Previous</a></li>

                                                 {new Array(numberOfButtons).fill("").map((el, index) => (
                                                        <li class={`page-item ${index + 1 === counter ? "active" : null}`}>
                                                        <a
                                                            class="page-link"
                                                            href="!#"
                                                            onClick={() => setCounter(index + 1)}
                                                        >
                                                            {index + 1}
                                                        </a>
                                                        </li>
                                                     ))}
                                   
                                    <li class="page-item">
                                            <a
                                            class="page-link"
                                            href="!#"
                                            onClick={() => handleClick("next")}
                                            >
                                            Next
                                            </a>
                                     </li>
                                </ul>
                          </nav>
                  
           
            
           
                   </div>
        </>
    )
}

export default Pagination
