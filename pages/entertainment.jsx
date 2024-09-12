import React from 'react';
import Image from 'next/image';

const entertainment = ({ title, description, imageUrl, link }) => {
  return (
    <selection className="grid gap-4 grid-cols-3 grid-rows-3 p-8 transition duration-700 ease-in-out">
      <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
        <div className="relative w-full h-64 transition-transform duration-300 ease-in-out hover:scale-105"> {/* Kontejneri për imazhin me efekt hover */}
          <Image
            src="/art.jpg" // Rruga relative nga folderi 'public'
            alt="News"
            layout="fill" // Përdor layout "fill" për të mbushur kontejnerin
            objectFit="cover" // Përshtat imazhin që të mbulojë plotësisht kontejnerin
          />
        </div>
        
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">yessss</div>
          <p className="text-gray-700 text-base">
            ky eshte nje pershkrim
          </p>
        </div>

        <div className="px-6 pt-4 pb-2">
          <a href={link} className="text-blue-500 hover:text-blue-700">
            Lexo më shumë
          </a>
        </div>
      </div>

      {/* Repeat for other cards */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
        <div className="relative w-full h-64 transition-transform duration-300 ease-in-out hover:scale-105">
          <Image
            src="/art.jpg" 
            alt="News"
            layout="fill"
            objectFit="cover"
          />
        </div>
        
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">yessss</div>
          <p className="text-gray-700 text-base">
            ky eshte nje pershkrim
          </p>
        </div>

        <div className="px-6 pt-4 pb-2">
          <a href={link} className="text-blue-500 hover:text-blue-700">
            Lexo më shumë
          </a>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
        <div className="relative w-full h-64 transition-transform duration-300 ease-in-out hover:scale-105">
          <Image
            src="/art.jpg" 
            alt="News"
            layout="fill"
            objectFit="cover"
          />
        </div>
        
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">yessss</div>
          <p className="text-gray-700 text-base">
            ky eshte nje pershkrim
          </p>
        </div>

        <div className="px-6 pt-4 pb-2">
          <a href={link} className="text-blue-500 hover:text-blue-700">
            Lexo më shumë
          </a>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
        <div className="relative w-full h-64 transition-transform duration-300 ease-in-out hover:scale-105"> {/* Kontejneri për imazhin me efekt hover */}
          <Image
            src="/art.jpg" // Rruga relative nga folderi 'public'
            alt="News"
            layout="fill" // Përdor layout "fill" për të mbushur kontejnerin
            objectFit="cover" // Përshtat imazhin që të mbulojë plotësisht kontejnerin
          />
        </div>
        
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">yessss</div>
          <p className="text-gray-700 text-base">
            ky eshte nje pershkrim
          </p>
        </div>

        <div className="px-6 pt-4 pb-2">
          <a href={link} className="text-blue-500 hover:text-blue-700">
            Lexo më shumë
          </a>
        </div>
      </div>

      {/* Repeat for other cards */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
        <div className="relative w-full h-64 transition-transform duration-300 ease-in-out hover:scale-105">
          <Image
            src="/art.jpg" 
            alt="News"
            layout="fill"
            objectFit="cover"
          />
        </div>
        
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">yessss</div>
          <p className="text-gray-700 text-base">
            ky eshte nje pershkrim
          </p>
        </div>

        <div className="px-6 pt-4 pb-2">
          <a href={link} className="text-blue-500 hover:text-blue-700">
            Lexo më shumë
          </a>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
        <div className="relative w-full h-64 transition-transform duration-300 ease-in-out hover:scale-105">
          <Image
            src="/art.jpg" 
            alt="News"
            layout="fill"
            objectFit="cover"
          />
        </div>
        
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">yessss</div>
          <p className="text-gray-700 text-base">
            ky eshte nje pershkrim
          </p>
        </div>

        <div className="px-6 pt-4 pb-2">
          <a href={link} className="text-blue-500 hover:text-blue-700">
            Lexo më shumë
          </a>
        </div>
      </div>


     
    </selection>
  );
};

export default entertainment;
