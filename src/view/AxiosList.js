import React from "react";



const AxiosList = ({dtoList}) => {
    return(
        <div>
            {dtoList.map(dtoList =>{
                return (<div key={dtoList.bno}>
                        {dtoList.author}
                </div>)
            })}
        </div>
    )
}

export default  AxiosList;