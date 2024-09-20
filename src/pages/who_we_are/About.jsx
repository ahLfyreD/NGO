import React from 'react';
import Header from '../../components/Header/Header';
import { InvolveData } from '../../components/get_involve/InvolveData';

const About = ({ toggleModal }) => {
    return (
        <>
            <section className="w-full h-[50vh] flex flex-col lg:h-screen bg-cover bg-bgImage relative">
                <div className='absolute inset-0 opacity-[50%] bg-[#333333]' />
                <Header toggleModal={toggleModal} />
                <div className="relative max-w-7xl mx-auto flex-1 flex flex-col justify-center items-center">
                    <div className='w-full mb-12'>
                        <h1 className='font-normal text-white text-2xl sm:text-7xl text-center'>Our mission is simple: to bring light where there is darkness and hope where there is despair.</h1>
                        <h2 className='font-light text-white text-xl sm:text-5xl text-center'>We are here to make a difference</h2>
                    </div>
                </div>
            </section>
            <section className='bg-[#f4f4f4]'>
                <div className="w-full p-5">
                    <div className="relative max-w-7xl mx-auto grid sm:grid-cols-2 gap-5 mb-20">
                        <div>
                            <div className="w-fit border-b-2 border-[#333333] mb-5">
                                <h2 className='text-xl lg:text-3xl font-semibold text-[#333333] '>WHO WE ARE</h2>
                            </div>

                            <p className='max-w-2xl mx-auto font-medium sm:text-lg text-[#686868] mb-4'>SaveLife is part of the global movement for COMMUNITY GROWTH, HEALTH SECURITY and POVERTY ERADICATION. We offer direct support to people and communities living with poverty, above all in countries in the Western Africa. We seek to add value to the work of our partners and of all those who challenge discrimination, exclusion and exploitation.</p>

                            <p className='max-w-2xl mx-auto font-medium sm:text-lg text-[#686868]'>Together, we generate energy for transformative change. We campaign to influence local and national governments, corporate actors, and the institutions whose decisions, policies, and practices can put an end to inequality, poverty and injustice.</p>
                        </div>
                        <div className='bg-bgImage bg-cover'>

                        </div>

                    </div>
                    <div className="relative max-w-7xl mx-auto grid sm:grid-cols-2 gap-5 mb-20">
                        <div className='bg-bgImage bg-cover'>

                        </div>
                        <div>
                            <div className="w-fit border-b-2 border-[#333333] mb-5">
                                <h2 className='text-xl lg:text-3xl font-semibold text-[#333333] '>OUR VISION FOR A SUSTAINABLE AFRICA</h2>
                            </div>

                            <p className='max-w-2xl mx-auto font-medium sm:text-lg text-[#686868] mb-4'>We thrive towards creatign a society where there is Peace and Health acountabilty. A world where every person has the opportunity to live with dignity, purpose, and hope. </p>

                            <p className='max-w-2xl mx-auto font-medium sm:text-lg text-[#686868] mb-4'>Our vision is a world that is just and sustainable. A world in which people and planet are at the center of just economies. A world in which women and girls live free from gender-based violence and discrimination. Where the climate crisis is contained, and inclusive and accountable governance systems allow for those in power to be held to account.</p>

                        </div>

                    </div>
                    <div className="relative max-w-7xl mx-auto grid sm:grid-cols-2 gap-5 mb-20">

                        <div>
                            <div className="w-fit border-b-2 border-[#333333] mb-5">
                                <h2 className='text-xl lg:text-3xl font-semibold text-[#333333]'>WHAT WE BELIEVE</h2>
                            </div>

                            <p className='max-w-2xl mx-auto font-medium sm:text-lg text-[#686868] mb-5'>We believe all lives are equal. No-one should be discriminated against or live in poverty. We want a just and sustainable world in which everyone can safely speak truth to power, claim their human rights, and build a better future for themselves.</p>


                            <div className="w-fit border-b-2 border-[#333333] mb-5">
                                <h2 className='text-xl lg:text-3xl font-semibold text-[#333333] '>WHAT WE WORK ON</h2>
                            </div>

                            <p className='max-w-2xl mx-auto font-medium sm:text-lg text-[#686868] mb-4'>We are guided by our vision, mission and values, and the transformational change that we seek. We know that to meet the challenge of a complex and unpredictable future, we need to develop new skills, innovate and improve our ability to adapt rapidly to changing contexts.</p>



                        </div>

                        <div className='bg-bgImage bg-cover'>

                        </div>

                    </div>

                </div>
            </section>
            <section className='relative'>
                {/* <div className='absolute w-full h-[50%] bottom-0 bg-blue-600'></div> */}
                <div className="relative max-w-7xl mx-auto p-5">
                    <div className="lg:flex lg:justify-between w-full mb-10 border-b border-[#333333]">
                        <div className='w-fit p-3 bg-[#333333]'>
                            <p className='font-bold text-white text-3xl mb-3'>Get Invove</p>
                        </div>

                    </div>

                    <div className='grid lg:grid-cols-3 lg:gap-10 m-auto'>
                        {InvolveData.map((item, index) => {
                            return <>
                                <div className='group mb-10 shadow-sm shadow-[#686868] min-w-[300px] w-full flex flex-col justify-between relative bg-white'
                                    key={index}
                                >
                                    <div className='p-5'>
                                        <p className='group-hover:underline font-bold text-[#333333] text-xl mb-2'>{item.title}</p>
                                        <p className='font-normal text-sm text-[#333333]'>{item.description}</p>
                                    </div>
                                    <div>
                                        <div className='w-full h-[200px] bg-cover' style={{ backgroundImage: `url(${item.image})` }} />
                                    </div>


                                </div>
                            </>
                        })}
                    </div>



                </div>
            </section>
        </>
    )
}

export default About
