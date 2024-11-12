'use client';

export default function ProjectItems({ title, description, link, imgSrc, altText }) {
  return (
    <div className="p-12 rounded-lg hover:border-none w-full">
      <a href={link} target="_blank" rel="noopener noreferrer" className="flex justify-center">
        <img 
          src={imgSrc} 
          alt={altText} 
          className="object-cover rounded mb-2 transform transition-all hover:scale-105" 
          style={{ width: '100%', height: '100%' }} 
        />
      </a>
      <h3 className="font-bold mt-2 text-black text-center">{title}</h3>
      <p className="mt-1 text-black text-center">{description}</p>
    </div>
  );
}
