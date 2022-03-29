import React from 'react'

import './SingleNews.css'

const SingleNews = ({ heading, subheading, date, time, details, image }) => {
  return (
      <div className='single-news'>
          <h1 className='news-heading'>{heading}</h1>
          <h3 className='news-subheading'>{subheading}</h3>
          <p className='news-time'>{date} {time}</p>
          <p className='news-details'>{details}</p>
          <img className='image-news' src={`data:image/jpeg;base64,${image}`} alt='img' />
    </div>
  )
}

export default SingleNews