'use client';  // To ensure client-side rendering

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AboutItems({ icon, iconClass, title, description }) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
      <div className="w-16 h-16 mb-2 flex justify-center items-center rounded-full">
        <FontAwesomeIcon icon={icon} size="3x" className={iconClass} />
      </div>
      <h3 className="text-lg font-bold text-black">{title}</h3>
      <p className="text-center text-black">{description}</p>
    </div>
  );
}
