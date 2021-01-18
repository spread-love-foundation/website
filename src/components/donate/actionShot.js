import React from "React"
import styled from "@emotion/styled";


const ActionStyle = styled("div")`
    img {
        width: 220px;
        height: 220px;

        @media screen and (min-width:390px){
            width: 355px;
            height: 340px;
          }
    }
`
// border-radius: 50%;
// object-fit: cover;


const actionShot = ({url}) => {
    //style={{marginTop: "60px"}}
    // return  <ActionStyle > 
    //             <img src={url} alt = "Classroom presentation"/>
    //         </ActionStyle>     
    return   <img src={url} alt = "Classroom presentation"/>
}

export default actionShot