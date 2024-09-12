import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#4d938f] text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
        {/* Logo and Description */}
        <div className="flex-1 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Early Bird News</h2>
          <p className="text-sm">
            Stay updated with the latest news and stories from around the world. Bringing you breaking news, analysis, and feature stories.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12.07c0-5.52-4.48-10-10-10S2 6.55 2 12.07c0 5.08 3.88 9.27 8.92 9.88v-6.97H7.65v-2.87h3.27V9.66c0-3.24 1.92-5.02 4.85-5.02 1.38 0 2.57.1 2.91.14v3.37h-2c-1.58 0-1.88.75-1.88 1.86v2.45h3.76l-.49 2.87h-3.27v6.97C18.12 21.34 22 17.15 22 12.07z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23 3a10.91 10.91 0 01-3.14.86A4.48 4.48 0 0022.4 2.35a9.86 9.86 0 01-3.12 1.19A4.46 4.46 0 0016.4.9a4.5 4.5 0 00-4.5 4.5c0 .35.04.7.1 1.03A12.8 12.8 0 011.67 2.1a4.48 4.48 0 001.39 6 4.48 4.48 0 01-2.03-.56v.06c0 2.17 1.55 3.98 3.6 4.39a4.53 4.53 0 01-2.02.08c.57 1.77 2.23 3.08 4.2 3.12A9.05 9.05 0 010 20.29a12.7 12.7 0 006.84 2c8.22 0 12.7-6.82 12.7-12.7v-.58A9.02 9.02 0 0023 3z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.15c3.02 0 3.38 0 4.56.07 1.18.07 1.99.23 2.46.38.56.16 1.04.37 1.48.74.44.37.73.86.9 1.46.15.48.31 1.28.38 2.46.07 1.18.07 1.54.07 4.56s0 3.38-.07 4.56c-.07 1.18-.23 1.99-.38 2.46-.16.56-.37 1.04-.74 1.48-.37.44-.86.73-1.46.9-.48.15-1.28.31-2.46.38-1.18.07-1.54.07-4.56.07s-3.38 0-4.56-.07c-1.18-.07-1.99-.23-2.46-.38-.56-.16-1.04-.37-1.48-.74-.44-.37-.73-.86-.9-1.46-.15-.48-.31-1.28-.38-2.46-.07-1.18-.07-1.54-.07-4.56s0-3.38.07-4.56c.07-1.18.23-1.99.38-2.46.16-.56.37-1.04.74-1.48.37-.44.86-.73 1.46-.9.48-.15 1.28-.31 2.46-.38 1.18-.07 1.54-.07 4.56-.07zm0-2.15c-3.06 0-3.43 0-4.64.07-1.21.07-2.02.23-2.73.45-.7.22-1.31.54-1.88 1.01-.57.57-.88 1.17-1.11 1.88-.23.71-.39 1.52-.45 2.73-.07 1.21-.07 1.54-.07 4.64s0 3.43.07 4.64c.07 1.21.23 2.02.45 2.73.22.71.54 1.31 1.01 1.88.57.57 1.17.88 1.88 1.01.71.22 1.52.39 2.73.45 1.21.07 1.58.07 4.64.07s3.43 0 4.64-.07c1.21-.07 2.02-.23 2.73-.45.71-.22 1.31-.54 1.88-1.01.57-.57.88-1.17 1.01-1.88.22-.71.39-1.52.45-2.73.07-1.21.07-1.58.07-4.64s0-3.43-.07-4.64c-.07-1.21-.23-2.02-.45-2.73-.22-.71-.54-1.31-1.01-1.88-.57-.57-1.17-.88-1.88-1.01-.71-.22-1.52-.39-2.73-.45-1.21-.07-1.58-.07-4.64-.07zm-2.64 5.1c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.45 2.45 2.45 2.45-1.1 2.45-2.45-1.1-2.45-2.45-2.45zm0 4.1c-.91 0-1.65-.74-1.65-1.65s.74-1.65 1.65-1.65 1.65.74 1.65 1.65-.74 1.65-1.65 1.65zm3.63-6.03a.82.82 0 01-.82-.82.82.82 0 01.82-.82.82.82 0 01.82.82.82.82 0 01-.82.82z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-500 py-4">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; {new Date().getFullYear()} News-24. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
