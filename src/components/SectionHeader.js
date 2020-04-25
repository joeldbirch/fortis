import React from 'react';

export default ({
  className = '', absolute = 'true', children, ...props
}) => (
  <header
    className={`
        ${className}
        ${
          absolute
            ? `
            position:absolute
            pos-top:0
            padding-vertical:600
            @mq-lap--padding-vertical:800
          `
            : 'position:relative'
        }
        margin-horizontal:auto
        max-width:container
        padding-vertical:600
        @mq-lap--padding-vertical:800
        pointer-events:none
        pos-top-left:0
        width:100
        z-index:300
      `}
    {...props}
  >
    <div
      className={`
          @mq-max-palm--text-align:center
          @mq-palm--padding-left:columns-3-1/2
          @mq-palm--padding-right:columns-1-1/2
          padding-horizontal:columns-0-1/2
          width:100
        `}
    >
      {children}
    </div>
  </header>
);
