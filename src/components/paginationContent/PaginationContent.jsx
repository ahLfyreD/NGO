import React, { useState, useEffect } from 'react';
import widow from '/assets/widow.jpg';
import papa from '/assets/papa.jpg';
import children from '/assets/children.jpg';
import students from '/assets/students.jpg';

const PaginationContent = () => {
    const [itemsPerPage, setItemsPerPage] = useState(2); // Default items per page
    const [currentPage, setCurrentPage] = useState(0); // Current page number

    // Dummy data for demonstration
    const items = [
        {
            id: 1,
            title: 'Community Outreach',
            image: children,
            description: 'The team went on a tour to rurla areas where we gave........'
        },
        {
            id: 2,
            title: 'Widow Outreach',
            image: widow,
            description: 'The team went on a tour to rurla areas where we gave........'
        },
        {
            id: 3,
            title: 'Government Donation',
            image: students,
            description: 'The team went on a tour to rurla areas where we gave........'
        },
        {
            id: 4,
            title: 'Hospitality Outreach',
            image: papa,
            description: 'The team went on a tour to rurla areas where we gave........'
        },
    ];

    // styling
    const active = 'bg-white cursor-pointer border border-white h-5 w-5 rounded-full'
    const normal = 'cursor-pointer border border-white h-5 w-5 rounded-full'

    // Calculate the total number of pages
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Determine the items to display on the current page
    const currentItems = items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    // Adjust items per page based on the screen size
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerPage(2); // For larger screens (desktop)
            } else if (window.innerWidth >= 768) {
                setItemsPerPage(1); // For medium screens (tablet)
            } else {
                setItemsPerPage(1); // For small screens (mobile)
            }
        };

        updateItemsPerPage(); // Initial call to set items per page
        window.addEventListener('resize', updateItemsPerPage); // Listen for window resize

        return () => window.removeEventListener('resize', updateItemsPerPage); // Clean up event listener
    }, []);

    // Handle clicking on a page button
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex overflow-x-auto w-full mb-3">
                {currentItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex-auto w-full h-96 mx-2 p-3 bg-cover text-center text-white relative"
                        style={{ backgroundImage: `url(${item.image})` }}>
                        <div className='absolute inset-0 opacity-[80%] bg-black' />
                        <div className='relative h-full flex flex-col justify-center items-center'>
                            <p className='text-3xl mb-6 text-white'>{item.title}</p>
                            <p className='text-xl mb-6 text-white'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex gap-3 mt-3">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageClick(index)}
                        className={currentPage === index ? active : normal}
                    >
                    </button>
                ))}
            </div>
        </div>
    );
};


export default PaginationContent
