import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import { LanguageProvider } from '~/contexts/LanguageContext';
import LanguageToggle from '~/components/LanguageToggle';
import ErrorBoundary from '~/components/ErrorBoundary';


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" },
  { rel: "stylesheet", href: "/styles/global.css" },
];

export const meta: MetaFunction = () => [
  { charSet: "utf-8" },
  { title: "Arslan Kemal GÜNDÜZ - Senior Software Developer" },
  { name: "description", content: "Senior Software Developer specializing in .NET, React, JavaScript, and Cloud technologies. Professional portfolio showcasing projects and experience." },
  { name: "keywords", content: "Software Developer, .NET Developer, React Developer, JavaScript, Cloud Computing, Portfolio, Arslan Kemal GÜNDÜZ" },
  { name: "author", content: "Arslan Kemal GÜNDÜZ" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
  { name: "robots", content: "index, follow" },
  { property: "og:title", content: "Arslan Kemal GÜNDÜZ - Senior Software Developer" },
  { property: "og:description", content: "Senior Software Developer specializing in .NET, React, JavaScript, and Cloud technologies." },
  { property: "og:type", content: "website" },
  { property: "og:image", content: "/images/Developer.png" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Arslan Kemal GÜNDÜZ - Senior Software Developer" },
  { name: "twitter:description", content: "Senior Software Developer specializing in .NET, React, JavaScript, and Cloud technologies." },
  { name: "twitter:image", content: "/images/Developer.png" },
];

export default function App() {
  const gradientRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateGradient = (e: MouseEvent) => {
      if (gradientRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        gradientRef.current.style.background = `radial-gradient(800px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };

    document.addEventListener('mousemove', updateGradient);

    return () => {
      document.removeEventListener('mousemove', updateGradient);
    };
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-navy leading-relaxed text-slate antialiased">
        <LanguageProvider>
          <ErrorBoundary>
            <LanguageToggle />
            {isClient && (
              <div
                id="gradient-background"
                ref={gradientRef}
                className="pointer-events-none fixed inset-0 z-[-1] transition duration-300"
              />
            )}
            <Outlet />
          </ErrorBoundary>
        </LanguageProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
