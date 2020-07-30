import React from "React"
import styled from "@emotion/styled";


const ActionStyle = styled("div")`
    img {
        width: 220px;
        height: 220px;

        @media screen and (min-width:390px){
            width: 300px;
            height: 300px;
          }

        border-radius: 50%;
        object-fit: cover;
    }
`


const actionShot = ({url}) => {
    return  <ActionStyle style={{marginTop: "60px"}}> 
                <img src={url} alt = "Classroom presentation"/>
            </ActionStyle>       
}

export default actionShot