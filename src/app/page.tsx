import * as motion from 'framer-motion/client';
import Map from '@/components/map';
import RecentProjects from '@/components/recentProjects';
import TechStack from '@/components/techStack';
import UnderLineAnimation from '@/components/underlineAnimation';
import Image from 'next/image';

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

export default function Home() {
  return (
    <>
      <section className="relative">
        <Map />
      </section>
      <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
        <motion.section variants={itemVariants} className="relative">
          <div className="flex items-center gap-6">
            <div className="border-2 border-gray-500 rounded-full overflow-hidden w-16">
              <Image src={'/me.webp'} height={70} width={70} alt="Martin bruun" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold tracking-tight">
                Hi, I&apos;m Martin
                <span className="ml-1 inline-block origin-bottom-right animate-wave">👋</span>
              </h1>
              <UnderLineAnimation />
            </div>
          </div>
        </motion.section>
        <motion.section variants={itemVariants} className="flex flex-col gap-4 py-4 relative">
          <p>
            I&apos;m a front-end developer with a focus on creating functional and interactive user
            interfaces. I enjoy solving problems and continuously learning new skills to improve my
            craft.
          </p>

          <p>
            In my free time, I love learning and creating fun stuff, such as experimenting with new
            web technologies, and building small projects. I also enjoy reading tech blogs, watching
            tech videos, and exploring new design trends.
          </p>
        </motion.section>
        <motion.section variants={itemVariants} className="flex flex-col gap-4 relative">
          <p>current tech stack:</p>
          <TechStack />
        </motion.section>
        <motion.section variants={itemVariants} className="relative">
          <RecentProjects />
        </motion.section>
      </motion.div>
    </>
  );
}
