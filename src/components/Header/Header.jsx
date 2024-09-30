import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUp } from "react-icons/fa";

const Menu = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Who We Are',
        path: '/who_we_are'
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
        title: 'Join Us',
        path: '/join_us'
    },
]

const Header = ({ toggleModal }) => {

    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const headerRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsHeaderVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Adjust this threshold as needed
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
        };
    }, []);


    return (
        <>
            <div ref={headerRef} className='relative w-full bg-transparent'>
                <div className='p-3 w-full max-w-7xl mx-auto flex justify-between items-center'>
                    <div>
                        <Link to='/'>
                            Home
                        </Link>
                    </div>

                    <div className='flex'>
                        <button
                            onClick={toggleModal}
                            className='border border-blue-600 bg-blue-600 text- p-3 font-semibold hover:text-[white] hover:bg-blue-800 transition-all ease-in-out duration-300'>
                            Donate Now
                        </button>
                    </div>
                </div>
            </div>

            {!isHeaderVisible && (
                <div
                    className="cursor-pointer text-white shadow-lg fixed bottom-2 right-2 z-40 h-10 w-10 bg-[#333333] rounded-full flex justify-center items-center"
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        })
                    }}>
                    <FaArrowUp />
                </div>
            )}
        </>

    )
}

export default Header
