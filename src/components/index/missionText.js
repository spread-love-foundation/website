import React from "React"
import styled from "@emotion/styled";

const Mission = styled('div')`    
    margin-top: 1em;
    margin-right: 1em;

    @media screen and (min-width:450px){
        margin-right: 2em;
    }

    font-family: Red Hat Display;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 34px;
    
    color: #000000;
`

const missionText = ({children}) => (
    <Mission>
        {children}
    </Mission>
)

export default missionText