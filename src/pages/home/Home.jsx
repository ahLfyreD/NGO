import React from 'react'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom';
import { FaPeopleGroup } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import PaginationContent from '../../components/paginationContent/PaginationContent';
import { eventData } from '../../components/Event_Data/EventData';

const Home = ({ toggleModal }) => {


    return (
        <>
            <section className="w-full h-[50vh] flex flex-col lg:h-screen bg-cover bg-homeBgImage relative">
                {/* <div className='absolute inset-0 opacity-[30%] bg-[#333333]' /> */}
                <Header toggleModal={toggleModal} />
                <div className="relative max-w-7xl mx-auto flex-1 flex flex-col justify-center items-center">
                    <div className='w-full mb-12'>
                        <h1 className='font-normal text-white text-2xl sm:text-7xl text-center'>Together We Can Transform Lives</h1>
                        <h2 className='font-light text-white text-xl sm:text-5xl text-center'>Every Gift Changes a Life</h2>
                    </div>
                    <div>
                        <button className='border border-white text-white p-3 font-semibold hover:text-[white] hover:bg-blue-600 transition-all ease-in-out duration-300'>
                            Donate Now
                        </button>
                    </div>
                </div>
            </section>
            <section className='bg-[#f4f4f4]'>
                <div className="w-full p-14">
                    <h2 className='text-center text-xl lg:text-3xl font-semibold text-[#333333] mb-4'>WHO WE ARE</h2>
                    <p className='max-w-2xl mx-auto font-medium sm:text-lg text-center text-[#686868]'>SaveLife is a NGO organisation founded in 2012 that partners with over 100 million people living with inequality and poverty to create opportunities to realise human potential.</p>
                    <div className='mx-auto mt-5 flex justify-center'>
                        <Link to='/who_we_are'>
                            <button className='border border-[#333333] text-[#686868] p-3 font-semibold hover:text-[#333333] hover:bg-blue-600 transition-all ease-in-out duration-300'>
                                Learn More
                            </button>
                        </Link>

                    </div>
                </div>
            </section>
            <section className='p-5'>
                <div className="relative sm:p-10  max-w-7xl mx-auto">
                    <h2 className='text-center text-xl lg:text-3xl font-semibold text-[#333333] mb-4'>WHAT WE DO</h2>
                    <div className='grid lg:grid-cols-3 lg:gap-5 m-auto'>
                        <div className='bg-homeBgImage bg-cover min-w-[325px] w-full h-56  transition-all ease-in-out duration-500 flex flex-col justify-end mb-8'>
                            <div className='relative w-full p-3 bg-[#333333]'>
                                <h2 className='relative text-center text-2xl font-semibold text-white'>Community Support</h2>

                            </div>
                        </div>
                        <div className='bg-homeBgImage bg-cover min-w-[325px] w-full h-56  transition-all ease-in-out duration-500 flex flex-col justify-end mb-8'>
                            <div className='w-full p-3 bg-[#333333]'>
                                <h2 className='relative text-center text-2xl font-semibold text-white'>Health Care</h2>

                            </div>

                        </div>
                        <div className='bg-homeBgImage bg-cover min-w-[325px] w-full h-56 transition-all ease-in-out duration-500 flex flex-col justify-end mb-8'>
                            <div className='w-full p-3 bg-[#333333]'>
                                <h2 className='relative text-center text-2xl font-semibold text-white'>Skill Development</h2>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='p-5'>
                <div className="relative p-5 sm:p-10 bg-[#ec7d49] max-w-7xl mx-auto">
                    <p className='font-bold text-white text-5xl mb-2'>In The News</p>
                    <p className='font-normal text-2xl mb-6 text-white'>Get the latest news here</p>
                    <div>
                        <PaginationContent />
                    </div>
                </div>
            </section>
            <section className='relative'>
                {/* <div className='absolute w-full h-[50%] bottom-0 bg-blue-600'></div> */}
                <div className="relative max-w-7xl mx-auto p-5">
                    <div className="lg:flex lg:justify-between w-full mb-5">
                        <div className='lg:w-[50%] mb-5'>
                            <p className='font-bold text-[#333333] text-5xl mb-3'>Upcoming Events</p>
                            <p>We offer events and resources to support the movement, reaching out to more than 70% of the country and West Africa in general</p>
                        </div>
                        <div className='w-full lg:w-fit'>
                            <div className='flex justify-end items-center gap-2 '>
                                <p className='font-normal text-2xl text-[#333333]'>All Events</p>
                                <FaArrowRight className='mt-1' />
                            </div>
                        </div>

                    </div>

                    <div className='grid lg:grid-cols-3 lg:gap-5 m-auto'>
                        {eventData.map((item, index) => {
                            return <>
                                <div className='mb-10 shadow-sm shadow-[#686868] min-w-[300px] w-full sm:flex lg:flex-col justify-between relative bg-white'
                                    key={index}
                                >
                                    <div className='absolute top-0 left-0 p-3 bg-blue-600 text-white'>
                                        {item.date}
                                    </div>
                                    <div className='w-full h-[300px] bg-cover' style={{ backgroundImage: `url(${item.image})` }} />
                                    <div className='p-5'>
                                        <p className='font-bold text-[#333333] text-3xl mb-2'>{item.title}</p>
                                        <p className='font-normal text-lg mb-6 text-[#333333]'>{item.description}</p>
                                    </div>
                                    <div className='absolute bottom-0 right-0'>
                                        <button className='border border-blue-600 bg-blue-600 text- p-3 font-semibold text-white hover:bg-blue-800 transition-all ease-in-out duration-300'>
                                            Learn More
                                        </button>

                                    </div>

                                </div>
                            </>
                        })}
                    </div>



                </div>
            </section>
            <section className="w-full h-[fit-content] flex flex-col lg:h-screen bg-cover bg-bgImage relative">
                <div className='absolute inset-0 opacity-[70%] bg-[#333333]' />
                <div className="relative max-w-7xl p-10">
                    <div className='w-full mb-12 lg:max-w-[50%]'>
                        <h1 className='font-bold text-white text-2xl lg:text-6xl'>Fundraising For The People And Causes You Care About</h1>
                        <h2 className='font-normal text-white text-xl lg:text-2xl'>Join us in making the difference in the lives o impoverished community and children by supporting our fundraising campaign, your contribution will provide education, healthcare and community support to the ones in need. Together we can create a lasting impact and bring hope to the ones who needs it the most.</h2>
                    </div>
                    <div>
                        <button className='border border-white text-white p-3 font-semibold hover:text-[white] hover:bg-blue-600 transition-all ease-in-out duration-300'>
                            Donate Now
                        </button>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Home
