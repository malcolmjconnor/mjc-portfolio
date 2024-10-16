'use client';

export default function ProjectItems({ title, description, link, imgSrc, altText }) {
  return (
    <div className="p-4 rounded-lg transform transition-all hover:scale-105 hover:border-none">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={altText} className="w-full h-32 object-cover rounded mb-2" />
      </a>
      <h3 className="font-bold mt-2 text-black">{title}</h3>
      <p className="mt-1 text-black">{description}</p>
    </div>
  );
}
