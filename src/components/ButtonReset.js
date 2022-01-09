import React from "react"

const ButtonReset = ({resetData}) => {

    return (
        <div className="inputBox">
            <button onClick={resetData} id="resetData">Reset</button>
        </div>
    )
}

export default ButtonReset