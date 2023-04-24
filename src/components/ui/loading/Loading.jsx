import React from "react";

function Loading() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-24 flex  items-center justify-center">
      <div className="w-4 h-4 rounded-full bg-white animate-ping mr-5"></div>
      <div className="w-4 h-4 rounded-full bg-white animate-ping mr-5"></div>
      <div className="w-4 h-4 rounded-full bg-white animate-ping mr-5"></div>
      <span className="text-white text-3xl font-medium font ml-2">Loading</span>
    </div>
  );
}

export default Loading;
