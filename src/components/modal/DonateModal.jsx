import React from 'react'

const DonateModal = ({ toggleModal }) => {


    return (
        <div className='overlay'>
            <div
                onClick={toggleModal}
                className='absolute top-10 right-10 bg-white p-5'>
                Close Modal
            </div>
            <div className='max-w-6xl lg:flex lg:gap-5 lg:justify-center lg:items-center'>
                <div className='bg-white h-52 w-52 rounded-lg'>
                    This is the modal
                </div>
            </div>

        </div>
    )
}

export default DonateModal
