import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      {/* Navigation */}
      <nav className="flex justify-end gap-6 mb-12">
        <Link 
          href="https://www.linkedin.com/in/jonathansandmann/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
        >
          LinkedIn
        </Link>
        <Link 
          href="https://www.tiktok.com/@jsandmann" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
        >
          TikTok
        </Link>
        <Link 
          href="https://dribbble.com/jsandmann" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
        >
          Dribbble
        </Link>
        <Link 
          href="https://www.youtube.com/@jsandmann" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
        >
          YouTube
        </Link>
      </nav>
      
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-3xl font-bold mb-6">
          Jonathan Sandmann
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mb-10">
          I build products that make data beautiful and accessible. With a decade of Power BI expertise and a passion for design, I create tools that bridge the gap between complex analytics and intuitive user experiences.
        </p>
        <div className="mb-12">
          <Image
            src="/profile-photo.png"
            alt="Jonathan Sandmann"
            width={400}
            height={267}
            className="rounded-lg"
            priority
          />
        </div>
      </div>

      {/* Projects Section */}
      <section className="w-full">
        <h2 className="text-2xl font-bold mb-10">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Fabric Data Viz World Champion"
            description="Won the 2025 Microsoft Fabric Data Visualization Championship, competing on stage in Las Vegas"
          />
          <ProjectCard
            href="https://www.powerui.com"
            external
            title="Power UI"
            description="The simplest, most advanced theme generator and design system for Power BI"
          />
          <ProjectCard
            title="Power UI Figma Design System"
            description="Comprehensive Figma design system for creating beautiful Power BI reports with consistent styling"
          />
          <ProjectCard
            title="Dashboard Design in Power BI"
            description="Complete guide to designing effective and visually appealing dashboards in Power BI"
          />
        </div>
      </section>
    </main>
  );
}