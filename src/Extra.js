import React from 'react'

export default function Extra() {
    const amount =[];


    for (let i = 0; i<= 24; i = i + 1){
        amount.push(i) }

        return(
            amount.map(count=>{
                return<option value={count}>
                {count} </option>
            })
    
  );
}
