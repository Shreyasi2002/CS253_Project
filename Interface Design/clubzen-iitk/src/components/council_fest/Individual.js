import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { StyledLink } from '../Links.styled'
import './Individual.css'


const Individual = () => {
    return (
        <>
            <div className='row-council'>
                <div className='column-council'>
                    <div className='row-content'>
                        <h4>Science and Technology (SnT) Council</h4>
                        <p>
                            The SnT Council of IIT Kanpur is a community of science
                            and technology enthusiasts who love to explore the
                            unthinkable. The council encourages innovation and learning
                            and caters to the need of all in the campus community
                            through 20 clubs, hobby groups and teams. Arranging an
                            array of workshops, lectures and competitions, the council
                            is the best place to work and show of your skills. So join
                            us in this journey to explore the unknown.
                        </p>
                    </div>
                    <StyledLink to='/clubs' className='row-button'>
                        <n>Explore Clubs</n>
                        <FontAwesomeIcon className='icon-button' icon={faArrowRight} />
                    </StyledLink>
                </div>
                <div className='column-council image-council'>
                    <img src='/Images/Snt_picture.png' alt='snt' />
                </div>
            </div>
            <br/><br/>
            <div className='row-council2'>
                <div className='column-council image-council'>
                    <img src='/Images/MnC_pic.png' alt='snt' />
                </div>
                <div className='column-council'>
                    <div className='row-content2'>
                        <h4>Media and Cultural (MnC) Council</h4>
                        <p>
                            IIT Kanpur's Media and Cultural Council has a
                            basket full of new activities to offer! Amidst
                            the student junta, MnC plays one of the most exciting
                            and involving roles. Offering a wide spectrum of
                            clubs and societies, MnC brings you a myriad of
                            opportunities so that you can explore your long
                            lost talents, or maybe even pick up a new one.
                            Under the hoods of these clubs and societies,
                            you'll get the chance to interact with talented
                            and passion-driven people who will guide you and
                            help you excel in whichever field you choose to;
                            all you do need is a pinch of 'enthu'! 
                        </p>
                    </div>
                    <StyledLink to='/clubs' className='row-button'>
                        <n>Explore Clubs</n>
                        <FontAwesomeIcon className='icon-button' icon={faArrowRight} />
                    </StyledLink>
                </div>
            </div>
            <br/><br/>
            <div className='row-council'>
                <div className='column-council'>
                    <div className='row-content'>
                        <h4>Games and Sports (GnS) Council</h4>
                        <p>
                            Games and Sports Council is the voice and face of IIT
                            Kanpur sports community, responsible for management
                            and conduction of all sporting events in the campus.
                            This website is a forum for reaching out to the campus
                            junta and beyond with news, achievements and experiences!
                            A legacy of a determined struggle and expression of
                            selfless passion!<br />
                            Since its conception in 1962, the GnS Council
                            has worked to promote more and more sports in the campus.
                            We have come a long way, and have a lot further to go.
                        </p>
                    </div>
                    <StyledLink to='/clubs' className='row-button'>
                        <n>Explore Clubs</n>
                        <FontAwesomeIcon className='icon-button' icon={faArrowRight} />
                    </StyledLink>
                </div>
                <div className='column-council image-council'>
                    <img src='/Images/GnS_pic.png' alt='snt' />
                </div>
            </div>
            <br/><br/>
            <div className='row-council2'>
                <div className='column-council image-council'>
                    <img src='/Images/AnC_pic.png' alt='snt' />
                </div>
                <div className='column-council'>
                    <div className='row-content2'>
                        <h4>Academics and Career (AnC) Council</h4>
                        <p>
                            The Academics and Career Council of the Indian Institute
                            of Technology, Kanpur is a council directly placed
                            under the Student's Gymkhana, that aims to foster
                            all needs related to academics and research for
                            the campus dwellers. <br/><br/>
                            AnC Council has been trusted with the responsibility
                            of managing executive activities in two of the
                            most crucial aspects of student life - Academics and Career. 
                            It acts as an interface between the institute policy
                            makers and the students on matters related to academia.
                            <br />
                            The Career Development Wing of the Council, with the
                            mandate of Career Development of students, shall
                            provide an extraordinary boost in regard to Career Aspects.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Individual