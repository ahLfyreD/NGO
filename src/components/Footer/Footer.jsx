import React from 'react'

const Footer = () => {

  const style = {
    input: "block w-full flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none mb-4 sm:mb-0",
    button: "border border-[#ec7d49] bg-[#ec7d49] rounded-md text-center text-[#333333] p-3 font-semibold hover:text-[white] hover:[#ec7d49] transition-all ease-in-out duration-300"
  }


  return (
    <section className='bg-blue-600 p-5'>
      <div className="relative max-w-7xl p-5">
        <div className='max-w-lg '>
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
      </div>

    </section>
  )
}

export default Footer
