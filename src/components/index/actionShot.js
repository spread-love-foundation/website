import React from "React"
import styled from "@emotion/styled";


const ActionStyle = styled("div")`
    img {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        object-fit: cover;
    }
`


const actionShot = (props) => {
    return <ActionStyle style={{marginTop: "60px"}}> <img src={props.url}/></ActionStyle>       
}

export default actionShot