import React from 'react'

function Button({text}) {
  return (
    <button className='bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-900 '>{`${text ? text:'Submit'}`}</button>
  )
}

export default Button