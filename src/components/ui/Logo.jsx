import React from "react";

const Logo = () => (
  <div className="flex items-center">
    <svg
      className="h-10 w-auto mr-2 text-[#005f73]"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21.25,8.84,12.75,4.09a2,2,0,0,0-1.5,0L2.75,8.84a2,2,0,0,0-1,1.73V17.3a2,2,0,0,0,1,1.73l8.5,4.75a2,2,0,0,0,1.5,0l8.5-4.75a2,2,0,0,0,1-1.73V10.57A2,2,0,0,0,21.25,8.84ZM12,12.41,4.25,8,12,3.59,19.75,8Z M12,22.09l-7.5-4.19v-6L12,16.09l7.5-4.19v6Z" />
    </svg>
    <span className="text-2xl font-bold text-[#005f73]">SupplyChain</span>
  </div>
);

export default Logo;
