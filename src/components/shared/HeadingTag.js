import React from 'react'

const HeadingTag = (props) => {
  return (
    <div className='display-3 text-center fw-bold mt-5 text-danger'>< span className='text-primary'>{props.first}</span> {props.second}</div>
  )
}

export default HeadingTag