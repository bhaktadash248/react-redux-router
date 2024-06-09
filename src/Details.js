import React from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Details = () => {

    const state = useSelector((store) => store.fetchDataReducer.data)
    const params = useParams()

    const filteredData = state && state.filter((el) => {
        return el.userId == params.id
    })

    console.log(filteredData)

    return (
        <div>
            {
                filteredData && filteredData.map((res) =>(
                    <div key={res.id}>
                        <h3>{res.title}</h3>
                        <hr/>
                    </div>
                ))
            }
        </div>
    )
}

export default Details;