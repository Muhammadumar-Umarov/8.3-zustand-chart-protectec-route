import React from 'react'
import { useStore } from '../zustand/store'


const Header = () => {
  const {count, } = useStore()
  return (
    <div>
      <h2>header {count}</h2>
    </div>
  )
}

export default React.memo(Header)