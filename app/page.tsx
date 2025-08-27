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
          Analytics Engineer and Technical Founder. I build data platforms and visualization tools that transform how companies understand their business. From pipelines to pixels, I create complete data solutions.
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
            href="https://powerbi.microsoft.com/en-us/blog/congratulations-to-jon-sandmann-the-first-power-bi-dataviz-world-champion/"
            external
            title="Fabric Data Viz World Champion"
            description="Won the 2025 Microsoft Fabric Data Visualization Championship, competing on stage in Las Vegas"
            image="/oecd-image.png"
          />
          <ProjectCard
            href="https://www.powerui.com"
            external
            title="Power UI"
            description="The simplest, most advanced theme generator and design system for Power BI"
            image="/power-ui-image.png"
          />
          <ProjectCard
            href="https://www.powerui.com"
            external
            title="Power UI Figma Design System"
            description="Comprehensive Figma design system for creating beautiful Power BI reports with consistent styling"
            image="/design-system-thumbnail.png"
          />
          <ProjectCard
            href="https://www.powerui.com"
            external
            title="Dashboard Design in Power BI"
            description="Complete guide to designing effective and visually appealing dashboards in Power BI"
            image="/ebook-thumbnail.png"
          />
        </div>
      </section>

      {/* About Me Section */}
      <section className="w-full mt-20">
        <h2 className="text-2xl font-bold mb-10">About Me</h2>
        <div className="space-y-6 max-w-3xl">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm an analytics engineer with 10 years of experience building data solutions for Fortune 500 companies.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I've worked across the entire data stack - from building production data warehouses at Microsoft to founding my own SaaS platform that serves 1,000+ users.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            At Microsoft, I led data initiatives across retail, learning, and support divisions, building systems that optimized operations for hundreds of employees. But I noticed a pattern: even the best data meant nothing if people couldn't understand it.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            So I started solving that problem. First through consulting, where I built a team that helped dozens of companies modernize their analytics. Then by creating Power UI - a platform that makes data visualization accessible to everyone.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            In 2025, I won the Microsoft Fabric Data Visualization Championship in Las Vegas. I've also grown a following of 47,000+ on TikTok by sharing what I've learned about data and design.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I believe good analytics isn't just about the numbers - it's about building systems that people actually want to use.
          </p>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="w-full mt-20 py-16 border-t">
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          I'm always interested in new opportunities and collaborations.
        </p>
        <a 
          href="mailto:jonsandmann@protonmail.com"
          className="inline-flex items-center text-xl font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          jonsandmann@protonmail.com
        </a>
      </section>
    </main>
  );
}