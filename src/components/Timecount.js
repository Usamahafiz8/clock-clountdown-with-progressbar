import React from 'react';
import Progressbar from './Progress_bar';


function Timecount({ startTime, requiredTime }) {
var currentTime = new Date();
var sTime = new Date(startTime);
const difeence = [currentTime - sTime]/60000
const req = [requiredTime]
if(difeence<req){
    const percentage = difeence/requiredTime * 100;
return <div> Time is remaining.
    {percentage.toFixed(2)}
    <Progressbar bgcolor="green" progress={percentage.toFixed(2)}  height={30} />

</div>
}
else {
    return<div>Time has been Completed <br/>
    <Progressbar bgcolor="green" progress="Completed"  height={30} />
</div>
}
}

export default Timecount;
