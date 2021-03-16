import React, { useState } from 'react'
import { options } from '../material/data/fussballData.js'

export default function CityFilter() {
  const [userInput, setUserInput] = useState('')

  return (
    <div>
      <input
        value={userInput}
        onChange={event => setUserInput(event.target.value)}
        placeholder="Filter name"
      />
    </div>
  )
}
