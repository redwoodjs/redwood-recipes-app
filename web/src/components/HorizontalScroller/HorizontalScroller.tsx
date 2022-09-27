import React from 'react'

const HorizontalScroller = ({ children }) => {
  return (
    <div className="hide-scroll-bar flex overflow-x-scroll pb-10">
      <div className="m-5 flex flex-nowrap">
        {React.Children.map(children, (child) => (
          <div className="inline-block px-3">{React.cloneElement(child)}</div>
        ))}
      </div>
    </div>
  )
}

export default HorizontalScroller
