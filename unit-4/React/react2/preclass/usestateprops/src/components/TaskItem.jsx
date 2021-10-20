import React from "react";

function TaskItem({title, color}){

    return (
        <div>
            <h3 style={{color}}>{`${title}`}</h3>
        </div>
    )
}
export {TaskItem}