'use client';

import * as motion from 'framer-motion/client';
import BigProjectCard from '@/components/bigProjectCard';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Page() {
  return (
    <>
      <section className="relative pb-8">
        <h1 className="mb-8 font-semibold text-2xl tracking-tighter">My Projects</h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="flex flex-col gap-24"
        >
          <motion.div variants={itemVariants}>
            <BigProjectCard
              liveSrc="https://iplaymusic.martinbruun.dk"
              githubSrc="https://github.com/dkkmartin/iplaymusic"
              imgSrc="https://supabase.martinbruun.dk/storage/v1/object/public/project-videos/iplaymusic-screenshot-2.webp"
              secondImgSrc="https://supabase.martinbruun.dk/storage/v1/object/public/project-videos/iplaymusic-screenshot-4.webp"
              alt="i play music app"
              title="iPlayMusic"
              desc="iPlayMusic is a web application built using Next.js, designed to interact with the Spotify API to fetch, display and play music."
              hoverColor="purple"
              disabledGithub={false}
              disabledVisit={false}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <BigProjectCard
              liveSrc=""
              githubSrc="https://github.com/dkkmartin/our-calendar"
              imgSrc="https://supabase.martinbruun.dk/storage/v1/object/public/project-videos/our-calendar-screenshot-1.webp"
              secondImgSrc="https://supabase.martinbruun.dk/storage/v1/object/public/project-videos/our-calendar-screenshot-2.webp"
              alt="our calendar app"
              title="Our calendar"
              desc="Our calendar is a personal PWA built with Next.js. It allows users to create, manage and get notifications on events in a shared calendar interface."
              hoverColor="cyan"
              disabledGithub={false}
              disabledVisit={true}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <BigProjectCard
              liveSrc="https://freepixa.martinbruun.dk/"
              githubSrc="https://github.com/dkkmartin/freepixa"
              imgSrc="https://supabase.martinbruun.dk/storage/v1/object/public/project-videos/freepixa-screenshot-2.webp"
              secondImgSrc="https://supabase.martinbruun.dk/storage/v1/object/public/project-videos/freepixa-screenshot-3.webp"
              alt="freepixa app"
              title="FreePixa"
              desc="FreePixa is a web application built with SvelteKit that allows users to search and browse images from the Unsplash API."
              hoverColor="teal"
              disabledGithub={false}
              disabledVisit={false}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <BigProjectCard
              liveSrc="https://dkkmartin.github.io/karmen/"
              githubSrc="https://github.com/dkkmartin/karmen"
              imgSrc="https://supabase.martinbruun.dk/storage/v1/object/public/project-videos/karmen-screenshot-1.webp"
              secondImgSrc="https://supabase.martinbruun.dk/storage/v1/object/public/project-videos/karmen-screenshot-5.webp"
              alt="karmen app"
              title="Karmen"
              desc="Karmen is a school project built with Astro. It's a ecommerce webshop for eco friendly and sustainable products."
              hoverColor="rose"
              disabledGithub={false}
              disabledVisit={false}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <BigProjectCard
              liveSrc="https://newsbox.martinbruun.dk/"
              githubSrc="https://github.com/dkkmartin/newsbox"
              imgSrc="https://supabase.martinbruun.dk/storage/v1/object/public/project-videos/newbox-screenshot-2.webp"
              secondImgSrc="https://supabase.martinbruun.dk/storage/v1/object/public/project-videos/newbox-screenshot-3.webp"
              alt="newsbox app"
              title="Newsbox"
              desc="Newsbox is a school project built with JavaScript and Bootstrap. It's using the New York Times API for fetching news articles."
              hoverColor="indigo"
              disabledGithub={false}
              disabledVisit={false}
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
