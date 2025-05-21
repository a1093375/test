export default function Home() {
  return (
    <div className="flex gap-8 justify-center mt-8">
      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-20 h-20 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition"
      >
        {/* Instagram SVG */}
        <svg width="32" height="32" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r="1" />
        </svg>
      </a>
      {/* Location */}
      <a
        href="https://maps.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-20 h-20 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition"
      >
        {/* Location SVG */}
        <svg width="32" height="32" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="10" r="3.5" />
          <path d="M12 21s-6-5.5-6-10a6 6 0 1 1 12 0c0 4.5-6 10-6 10z" />
        </svg>
      </a>
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-20 h-20 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition"
      >
        {/* Facebook SVG */}
        <svg width="32" height="32" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M17 2.1h-2.2C11.6 2.1 10 3.7 10 5.9V8H7v4h3v8h4v-8h3l1-4h-4V6c0-.6.4-1 1-1h3V2.1z" />
        </svg>
      </a>
    </div>
  );
}