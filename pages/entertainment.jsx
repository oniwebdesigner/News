import React from 'react';
import Link from 'next/link';

const Entertainment = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-600 mb-10 text-center">Entertainment</h1>

      {/* Section for Latest News */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 border-b-2 border-gray-300 pb-2">Latest News</h2>
        <ul className="space-y-8">
          <li className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Link href="/entertainment/the-great-adventure-premiere">
              <span className="text-2xl font-semibold hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-105">Premiere of the New Film 'The Great Adventure'</span>
            </Link>
            <p className="text-gray-700 mt-3">Discover everything about the highly anticipated film premiere. Learn more about the event and the actors who made this film extraordinary.</p>
          </li>
          <li className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Link href="/entertainment/interview-director">
              <span className="text-2xl font-semibold hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-105">Exclusive Interview with the Director of 'The Great Adventure'</span>
            </Link>
            <p className="text-gray-700 mt-3">In this exclusive interview, the director of 'The Great Adventure' shares untold details and challenges of making this film.</p>
          </li>
        </ul>
      </section>

      {/* Section for Videos */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 border-b-2 border-gray-300 pb-2">Videos</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <iframe
              width="100%"
              height="215"
              src="https://www.youtube.com/embed/exampleid"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-t-lg"
            ></iframe>
            <div className="p-4">
              <p className="text-gray-700">Watch the official trailer for 'The Great Adventure'. This trailer gives you a brief and exciting glimpse into the events that will unfold.</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <iframe
              width="100%"
              height="215"
              src="https://www.youtube.com/embed/exampleid2"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-t-lg"
            ></iframe>
            <div className="p-4">
              <p className="text-gray-700">A behind-the-scenes look at the making of 'The Great Adventure'. Discover the challenges the team faced while filming.</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <iframe
              width="100%"
              height="215"
              src="https://www.youtube.com/embed/exampleid3"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-t-lg"
            ></iframe>
            <div className="p-4">
              <p className="text-gray-700">The cast of 'The Great Adventure' discuss their roles and how they prepared for the intense scenes in the movie.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Entertainment;