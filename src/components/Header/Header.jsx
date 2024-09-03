import React from 'react'

const Menu = [
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Membership',
        path: '/membership'
    },
    {
        title: 'Programs',
        path: '/programs'
    },
    {
        title: 'Events',
        path: '/events'
    },
    {
        title: 'Join Us',
        path: '/join_us'
    },
]

const Header = () => {
    return (
        <>
            <div className='relative z-10 w-full bg-transparent'>
                <div className='p-3 w-full max-w-7xl mx-auto flex justify-between items-center'>
                    <div>
                        Logo Display
                    </div>
                    <div className='hidden lg:flex'>
                        <ul className='flex list-none gap-4 text-white text-xl items-center'>
                            {Menu.map((item, index) => {
                                return <li key={index}>
                                    {item.title}
                                </li>
                            })}
                            <li>
                                <button className='border border-blue-600 bg-blue-600 text- p-3 font-semibold hover:text-[white] hover:bg-blue-800 transition-all ease-in-out duration-300'>
                                    Donate Now
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Header
