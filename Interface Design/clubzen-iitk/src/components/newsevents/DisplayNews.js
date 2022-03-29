import React from 'react'
import SingleNews from './SingleNews'

import './SingleNews.css'

const DisplayNews = ({ data }) => {
    return (
        <li className='list-news'>
            {
                data.map(({ heading, sub_heading, date, time, details, image }) => {
                    return (
                        <SingleNews
                            heading={heading}
                            subheading={sub_heading}
                            date={date}
                            time={time}
                            details={details}
                            image={image}
                        />
                    )
                })
            }
        </li>
    );
}

export default DisplayNews