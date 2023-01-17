import React, { useState, useRef, useEffect } from 'react'
import Timecount from './components/Timecount'
const App =  () => {
    var [date,setDate] = useState(new Date());
    var timer = setInterval(()=>setDate(new Date()), 1000 )
    var currentTime = new Date();
    var requiredtime  = 40662;
    var startTime ;
const [sdate, setsdate] = useState();
    useEffect (() =>{
        async function re1 () {
            const result = await fetch("https://dev-explorer-api.herokuapp.com/api?fromHash=0x820b379daa196a51cf32d134d65e1b7a33d1c69ab236aef9361949267968c681&fromChain=12")
            const jsonresult = await result.json()
            var newstartTime = jsonresult.events[0].createdAt
            console.log(newstartTime);
            setsdate(newstartTime)
            return   newstartTime;
        }
        startTime   = re1();
    })
      return (
        <div className="App"> 
        Time :  {Date()}        
        <br/>
        currenttime : {currentTime.toISOString()}
        <br/>
        startTime : {sdate}
        <br/>
        requiredTime : {requiredtime}df
        <Timecount startTime={sdate} requiredTime={requiredtime}  />
        
        </div>
    )
}
  
export default App;