import React from "react"
import { useDispatch, useSelector } from 'react-redux';

const Component2 = () => {
    return (
        <div>
            <h1>This is component 2</h1>
            <div>{console.log(useSelector((state) => state.users))}</div>
        </div>
    )
}

export default Component2;