import React from "React"
import styles from "./index.module.css"

const missionText = ({children}) => (
    <div className = {styles.sometext} styles = {{    maxWidth: "800px",
        marginTop: "1em",
        marginTight: "2em"}}>
        {children}
    </div>
)

export default missionText