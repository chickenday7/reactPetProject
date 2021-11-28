import React from "react";
import AddedMessageItem from "./AddedMessageItem";



const AddedMessageArray:any = (props:any) =>{

    let messagesItemComponent: any = props.messagesData!.map((elem: any) => {
        return <AddedMessageItem text={elem.message} key ={elem.id} />;
    })


    return(
        <div>
            {messagesItemComponent}
        </div>
    )
}

export default AddedMessageArray