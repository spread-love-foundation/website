import React from "React"
import styles from "./index.module.css"
// position: absolute;
// width: 364px;
// height: 89px;
// left: 88px;
// top: 1062px;


// position: absolute;
// width: 338px;
// height: 32px;
// left: 104px;
// top: 1107px;

//

{/* <div className = {styles.header}>
            {children}
        </div>
        <div className = {styles.highlight} style= {{position: "relative", top:'-45px'}}/> */}

const missionHeader = ({children}) => (
    <span className = {styles.highlight2}> {children} </span>
    
    
)

export default missionHeader