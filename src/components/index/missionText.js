import React from "React"
import styles from "./index.module.css"

const missionText = ({children}) => (
    <div className = {styles.sometext}>
        {children}
    </div>
)

export default missionText