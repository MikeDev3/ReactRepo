import React from'react';
const Whether =(props) => 
{
return( 
    <div>
    {props.temperature && <p>temperature: {props.temperature}</p>}
    </div>
    ) 
}
export default Whether;