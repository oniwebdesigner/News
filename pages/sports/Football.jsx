// pages/sports/football.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Football = () => {
    return (
      
        <section className='p-8'>
       <div className="flex flex-col gap-4 p-4">
       <h2 className="text-4xl font-bold text-gray-600 mb-10 text-center">Football</h2>
      {/* Row container */}
      <div className="flex gap-4">
        {/* First container */}
        <div className="flex-1 flex flex-col items-center">
          <Image src="/team.jpg" alt="Image 1" width={500} height={500} className="w-full h-80 object-cover mb-2 rounded transform hover:scale-105 transition-transform duration-300 cursor-pointer" />
          <h5 className="text-xltext-blue-600 md:text-green-600">Football</h5>
          <a className="ltr:ml-3 rtl:mr-3 cursor-pointer hover:underline transform hover:scale-105 transition-transform duration-300 text-sky-400">
          "Manchester United secured a thrilling victory against Liverpool with a late goal in the dying minutes of the match. The Red Devils showcased remarkable resilience and tactical brilliance, overcoming a fierce challenge from their rivals. The match was marked by intense moments and standout performances from key players, leaving fans on the edge of their seats."</a>
        </div>

        {/* Second container */}
        <div className="flex-1 flex flex-col items-center">
          <Image src="/neymar.jpg" alt="Image 1" width={500} height={500} className="w-full h-80 object-cover mb-2 rounded transform hover:scale-105 transition-transform duration-300 cursor-pointer" />
          <h5 className="text-xltext-blue-600 md:text-green-600">Football</h5>
          <a className="ltr:ml-3 rtl:mr-3 cursor-pointer hover:underline transform hover:scale-105 transition-transform duration-300 text-sky-400">
          "Football legend Lionel Messi has set a new record for the most goals scored in a calendar year, surpassing his own previous record. Messi’s incredible form and consistency throughout the year have cemented his place as one of the greatest players in football history. His performance continues to inspire fans and players alike around the world."</a>
        </div>
        </div>

      {/* Bottom container */}
      <div className="flex-1 flex flex-col items-center">
          <Image src="/football.jpg" alt="Image 1" width={500} height={500} className="w-full h-60 object-cover mb-2 rounded transform hover:scale-105 transition-transform duration-300 cursor-pointer" />
          <h5 className="text-xltext-blue-600 md:text-green-600">Football</h5>
          <a className="ltr:ml-3 rtl:mr-3 cursor-pointer hover:underline transform hover:scale-105 transition-transform duration-300 text-sky-400">
          "Manchester United secured a thrilling victory against Liverpool with a late goal in the dying minutes of the match. The Red Devils showcased remarkable resilience and tactical brilliance, overcoming a fierce challenge from their rivals. The match was marked by intense moments and standout performances from key players, leaving fans on the edge of their seats."</a>
        </div>

    </div>

        </section>
 

    );
};

export default Football;
