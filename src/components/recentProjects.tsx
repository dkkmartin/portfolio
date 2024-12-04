import Link from 'next/link';
import SmallProjectCard from './smallProjectCard';

export default function RecentProjects() {
  return (
    <div className="my-16 flex flex-col gap-2">
      <span className="mb-1 w-fit rounded-md bg-muted px-1.5 py-1 text-muted-foreground text-xs">
        Recent projects
      </span>
      <SmallProjectCard
        linkSrc="https://github.com/dkkmartin/iplaymusic"
        imgSrc="https://supabase.martinbruun.dk/storage/v1/object/public/project-videos/iplaymusic-screenshot-2.webp"
        secondImgSrc="https://supabase.martinbruun.dk/storage/v1/object/public/project-videos/iplaymusic-screenshot-4.webp"
        alt="i play music app"
        title="iPlayMusic"
        desc="iPlayMusic is a web application built using Next.js, designed to interact with the Spotify API to fetch, display and play music."
      />
      <SmallProjectCard
        linkSrc="https://github.com/dkkmartin/our-calendar"
        imgSrc="https://supabase.martinbruun.dk/storage/v1/object/public/project-videos/our-calendar-screenshot-1.webp"
        secondImgSrc="https://supabase.martinbruun.dk/storage/v1/object/public/project-videos/our-calendar-screenshot-2.webp"
        alt="our calendar app"
        title="Our calendar"
        desc="Our calendar is a personal PWA built with Next.js. It allows users to create, manage and get notifications on events in a shared calendar interface."
      />
      <Link
        href={'/projects'}
        className="group flex items-center gap-1 font-semibold hover:text-muted-foreground"
      >
        More projects
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M18 8L22 12L18 16"></path>
          <path d="M2 12H22"></path>
        </svg>
      </Link>
    </div>
  );
}
