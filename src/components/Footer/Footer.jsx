import React from 'react'

const Footer = () => {

  const style = {
    input: "block w-full flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none mb-4 sm:mb-0",
    button: "border border-[#ec7d49] bg-[#ec7d49] rounded-md text-center text-[#333333] p-3 font-semibold hover:text-[white] hover:[#ec7d49] transition-all ease-in-out duration-300"
  }


  return (
    <section className='bg-blue-600 p-2 lg:p-5'>
      <div className="grid lg:grid-cols-2 gap-10 relative max-w-7xl p-5 lg:flex lg:justify-between">
        <div className='w-full'>
          <h2 className='font-bold text-white text-3xl mb-2'>Get Updated</h2>
          <p className='font-normal text-lg mb-6 text-white'>Subscribe to our Newsletter</p>
          <form>
            <div className='sm:flex mb-5 sm:mb-0 gap-5 sm:items-center'>
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
        <div className="w-full">
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 pb-5 border-b border-white'>
            <div className='mb-10 lg:mb-2'>
              <p className='text-white text-2xl lg:text-xl font-medium'>Support Our Work</p>
              <ul className='text-white text-lg font-light lg:text-sm p-0'>
                <li>Donate now</li>
                <li>Campaign with us</li>
                <li>Work with us</li>
                <li>Volunteer with us</li>
                <li>Become a Partner</li>
              </ul>
            </div>
            <div className='mb-10 lg:mb-2'>
              <p className='text-white text-2xl lg:text-xl font-medium'>Issue we work on</p>
              <ul className='text-white text-lg font-light lg:text-sm p-0'>
                <li>Water and Sanitation</li>
                <li>Food and natural resources</li>
                <li>Community growth</li>
                <li>Youth empowerment</li>
                <li>Women's right</li>
                <li>Conflicts and disaster</li>
              </ul>
            </div>
            <div className='mb-10 lg:mb-2'>
              <p className='text-white text-2xl lg:text-xl font-medium'>Help us save lives</p>
              <ul className='text-white text-lg font-light lg:text-sm p-0'>
                <li>Hunger crisis in burkinafaso</li>
                <li>Climate and food crisis in West Africa</li>
                <li>Crisis in Kaduna</li>
                <li>Crisis in Gombe</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer
