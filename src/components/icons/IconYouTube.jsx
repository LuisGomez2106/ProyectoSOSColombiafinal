import React from 'react'
import classnames from 'classnames'


const IconYouTube = ({ link, margin }) => {
  return (
    <a href={link}
      className={classnames(`m-${margin}`)}
      target="_blank"
      rel="noopener noreferrer">
      <svg height="40pt" viewBox="0 -77 512.00213 512" width="40pt"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="m501.453125 
  56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 
  0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 
  123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 
  40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 
  39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 
  10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0" fill="#000000" />
        <path d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0" fill="#fff" />
      </svg>
    </a>
  )
};


export default IconYouTube;
