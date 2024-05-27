import React from 'react'

function Footer() {
  return (
    <section className="w-full flex justify-center items-center bg-blue-600 Footer">

        <div className="w-[90%] text-white flex flex-col md:flex-row justify-between md:items-center py-6 gap-8">

          <a href="/" className="font-extrabold text-xl">LOGOAUTO</a>

          <ul className="gap-4 flex flex-wrap">
            <li className=''>Latest Competitions</li>
            <li className=''>Entry Lists</li>
            <li className=''>Live Draws</li>
            <li className=''>Winners</li>
            <li className=''>Gift Cards</li>
            <li className=''>How it Works</li>
          </ul>

        </div>

    </section>
  );
}

export default Footer