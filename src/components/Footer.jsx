import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        <p className="text-sm font-light text-gray-400">
          © {new Date().getFullYear()} Association of Indian Students at USC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
