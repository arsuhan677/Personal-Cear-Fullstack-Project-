import React from "react";

export default function Button() {
  return (
    <div>
      {/* Hover Buttons */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
        <button className="bg-green-700 text-white text-sm px-4 py-1.5 rounded-full hover:bg-green-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
