import React from 'react'
import LayoutStyle from "./MarginLayout.module.css"

const MarginLayout = ({children}) => {
  return (
    <div className={LayoutStyle.Margin}>
        <div className={LayoutStyle.Center}>
            {children}
        </div>
    </div>
  )
}

export default MarginLayout