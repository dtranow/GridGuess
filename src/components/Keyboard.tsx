import React from 'react'

const Keyboard = () => {
  const keyboardrow1: string[] = 'qwertyuiop'.split("")
  const keyboardrow2: string[] = 'asdfghjkl'.split("")
  const keyboardrow3: string[] = 'zxcvbnm'.split("")
  return (
    <div>
      <div>
        {keyboardrow1.map((k, index) => (
          <span key={index}>{k}</span>
        ))}
      </div>
      <div>
        {keyboardrow2.map((k, index) => (
          <span key={index}>{k}</span>
        ))}
      </div>
      <div>
        {keyboardrow3.map((k, index) => (
          <span key={index}>{k}</span>
        ))}
      </div>
    </div>
  )
}

export default Keyboard