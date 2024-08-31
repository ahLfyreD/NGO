import React from 'react'
import Header from '../../components/Header/Header'
import { FaPeopleGroup } from "react-icons/fa6";
import PaginationContent from '../../components/paginationContent/PaginationContent';

const Home = () => {
    return (
        <>
            <section className="w-full h-[50vh] flex flex-col lg:h-screen bg-cover bg-homeBgImage relative">
                <div className='absolute inset-0 opacity-[80%] bg-black' />
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

        </>
    )
}

export default Home
