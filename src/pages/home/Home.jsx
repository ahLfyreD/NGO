import React from 'react'
import Header from '../../components/Header/Header'
import { FaPeopleGroup } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import PaginationContent from '../../components/paginationContent/PaginationContent';
import { eventData } from '../../components/Event_Data/EventData';

const Home = () => {

    const style = {
        input: "block w-full flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none",
        button: "border border-[#1f4717] bg-[#1f4717] text- p-3 font-semibold hover:text-[white] hover:bg-[#15300f] transition-all ease-in-out duration-300"
    }


    return (
        <>
            <section className="w-full h-[50vh] flex flex-col lg:h-screen bg-cover bg-homeBgImage relative">
                <div className='absolute inset-0 opacity-[30%] bg-black' />
                <Header />
                <div className="relative max-w-7xl mx-auto flex-1 flex flex-col justify-center items-center">
                    <div className='w-full mb-12'>
                        <h1 className='font-normal text-white text-2xl sm:text-7xl text-center'>Together We Can Transform Lives</h1>
                        <h2 className='font-light text-white text-xl sm:text-5xl text-center'>Every Gift Changes a Life</h2>
                    </div>
                    <div>
                        <button className='border border-white text-white p-3 font-semibold hover:text-[white] hover:bg-[#15300f] transition-all ease-in-out duration-300'>
                            Join Us Now
                        </button>
                    </div>
                </div>
            </section>
            <section className='p-5'>
                <div className="relative max-w-7xl mx-auto flex flex-col justify-center items-center">
                    <div className='lg:-mt-16 grid lg:grid-cols-3 lg:gap-10 m-auto'>

                        <div className='group mb-10 bg-white border-b-[6px] border-[#15300f] shadow shadow-[#686868] rounded-lg min-w-[325px] w-full p-5 flex flex-col items-center justify-between hover:bg-[#15300f] cursor-pointer transition-all ease-in-out duration-500'>

                            <FaPeopleGroup className='text-8xl font-medium mb-4 group-hover:text-white' />
                            <p className='text-3xl mb-6 group-hover:text-white'>Membership</p>
                            <p className='text-xl mb-6 group-hover:text-white'>Learn More</p>

                        </div>
                        <div className='group mb-10 bg-white border-b-[6px] border-[#15300f] shadow shadow-[#686868] rounded-lg min-w-[325px] w-full p-5 flex flex-col items-center justify-between hover:bg-[#15300f] cursor-pointer transition-all ease-in-out duration-500'>

                            <FaPeopleGroup className='text-8xl font-medium mb-4 group-hover:text-white' />
                            <p className='text-3xl mb-6 group-hover:text-white'>Membership</p>
                            <p className='text-xl mb-6 group-hover:text-white'>Learn More</p>

                        </div>
                        <div className='group mb-10 bg-white border-b-[6px] border-[#15300f] shadow shadow-[#686868] rounded-lg min-w-[325px] w-full p-5 flex flex-col items-center justify-between hover:bg-[#15300f] cursor-pointer transition-all ease-in-out duration-500'>

                            <FaPeopleGroup className='text-8xl font-medium mb-4 group-hover:text-white' />
                            <p className='text-3xl mb-6 group-hover:text-white'>Membership</p>
                            <p className='text-xl mb-6 group-hover:text-white'>Learn More</p>

                        </div>



                    </div>
                </div>
            </section>
            <section className='p-5'>
                <div className="relative p-5 sm:p-10 bg-[#15300f] max-w-6xl mx-auto">
                    <p className='font-bold text-white text-5xl mb-2'>In The News</p>
                    <p className='font-normal text-2xl mb-6 text-white'>Get the latest news here</p>
                    <div>
                        <PaginationContent />
                    </div>
                </div>
            </section>
            <section className='relative'>
                <div className='absolute w-full h-[50%] bottom-0 bg-[#48743f]'></div>
                <div className="relative max-w-6xl mx-auto p-5">
                    <div className="lg:flex lg:justify-between w-full mb-5">
                        <div className='lg:w-[50%] mb-5'>
                            <p className='font-bold text-black text-5xl mb-3'>Upcoming Events</p>
                            <p>We offer events and resources to support the movement, reaching out to more than 70% of the country and West Africa in general</p>
                        </div>
                        <div className='w-full lg:w-fit'>
                            <div className='flex justify-end items-center gap-2 '>
                                <p className='font-normal text-2xl text-black'>All Events</p>
                                <FaArrowRight className='mt-1' />
                            </div>
                        </div>

                    </div>

                    <div className='grid lg:grid-cols-3 lg:gap-5 m-auto'>
                        {eventData.map((item, index) => {
                            return <>
                                <div className='mb-10 shadow-sm shadow-[#686868] min-w-[300px] w-full sm:flex lg:flex-col justify-between relative bg-white'>
                                    <div className='absolute top-0 left-0 p-3 bg-[#1f4717] text-white'>
                                        {item.date}
                                    </div>
                                    <div className='w-full h-[300px] bg-cover' style={{ backgroundImage: `url(${item.image})` }} />
                                    <div className='p-5'>
                                        <p className='font-bold text-black text-3xl mb-2'>{item.title}</p>
                                        <p className='font-normal text-lg mb-6 text-black'>{item.description}</p>
                                    </div>
                                    <div className='absolute bottom-0 right-0'>
                                        <button className='border border-[#1f4717] bg-[#1f4717] text- p-3 font-semibold hover:text-[white] hover:bg-[#15300f] transition-all ease-in-out duration-300'>
                                            Learn More
                                        </button>

                                    </div>

                                </div>
                            </>
                        })}
                    </div>

                    <div className='max-w-lg my-12'>
                        <h2 className='font-bold text-black text-3xl mb-2'>Get Updated</h2>
                        <p className='font-normal text-lg mb-6 text-black'>Subscribe to our Newsletter</p>
                        <form>
                            <div className='sm:flex gap-5 sm:items-center'>
                                <input
                                    type="email"
                                    className={style.input}
                                    placeholder="Enter Emial"
                                    required
                                />
                                <button type='submit' className={style.button}>Subscribe</button>
                            </div>

                        </form>
                    </div>

                </div>
            </section>
            

        </>
    )
}

export default Home
