import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  external?: boolean;
  image?: string;
}

export default function ProjectCard({ title, description, href, external = false, image }: ProjectCardProps) {
  const cardContent = (
    <>
      <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 relative overflow-hidden mb-4">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold mt-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        {description}
      </p>
    </>
  );

  if (href) {
    return (
      <Link 
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group block"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="group block">
      {cardContent}
    </div>
  );
}