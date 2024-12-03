import MotionSection from '@/components/animation/motionSection';
import Map from '@/components/map';
import RecentProjects from '@/components/recentProjects';
import TechStack from '@/components/techStack';
import UnderLineAnimation from '@/components/underlineAnimation';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="relative">
        <Map />
      </section>
      <MotionSection className="relative">
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
      </MotionSection>
      <MotionSection className="flex flex-col gap-4 py-4 relative">
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
      </MotionSection>
      <MotionSection className="flex flex-col gap-4 relative">
        <p>current tech stack:</p>
        <TechStack />
      </MotionSection>
      <MotionSection className="relative">
        <RecentProjects />
      </MotionSection>
    </>
  );
}
