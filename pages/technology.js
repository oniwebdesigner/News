import React from 'react';
import Link from 'next/link';

const Technology = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-gray-600 mb-6 flex justify-center ">Technology</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Latest Tech News</h2>
        <ul className="space-y-6">
          <li className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link href="/technology/ai-revolution">
              <div className="block p-6 hover:bg-gray-50">
                <h3 className="text-2xl font-semibold text-blue-600 hover:text-blue-800">The AI Revolution: How Artificial Intelligence is Changing the World</h3>
                <p className="text-gray-600 mt-2">Explore the transformative impact of artificial intelligence on various industries, from healthcare to finance. Learn how AI is shaping the future.</p>
              </div>
            </Link>
          </li>
          <li className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link href="/technology/5g-network">
              <div className="block p-6 hover:bg-gray-50">
                <h3 className="text-2xl font-semibold text-blue-600 hover:text-blue-800">The 5G Network: What It Means for the Future of Connectivity</h3>
                <p className="text-gray-600 mt-2">Discover the benefits and potential of 5G technology. How will it impact internet speeds, connectivity, and new technological advancements?</p>
              </div>
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4 flex justify-center">Tech Videos</h2>

        {/* Container for the videos */}
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="w-full md:w-1/3">
            <iframe
              width="100%"
              height="215"
              src="https://www.youtube.com/embed/exampleid1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-md"
            ></iframe>
            <p className="text-gray-600 mt-2">Video 1: The future of AI technology in 2024.</p>
          </div>

          <div className="w-full md:w-1/3">
            <iframe
              width="100%"
              height="215"
              src="https://www.youtube.com/embed/exampleid2"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-md"
            ></iframe>
            <p className="text-gray-600 mt-2">Video 2: Understanding the power of 5G networks.</p>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default Technology;
