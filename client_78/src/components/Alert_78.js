import React from 'react'

import { useAppContext } from '../context/appContext_78'

const Alert_78 = () => {
    const { alertText, alertType} = useAppContext();
  return (
    <div className={`alert alert-${alertType}`}>
      {alertText}
    </div>
  )
}

export default Alert_78
