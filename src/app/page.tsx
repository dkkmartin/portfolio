import Image from 'next/image';

export default function Home() {
  return (
    <section className="relative ">
      <div className="flex items-center gap-6">
        <div className="border-2 border-gray-500 rounded-full overflow-hidden w-16">
          <Image src={'/me.webp'} height={70} width={70} alt="Martin bruun" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight">
            Hi, I&apos;m Martin
            <span className="ml-1 inline-block origin-bottom-right animate-wave">👋</span>
          </h1>
          <h2 className="underline">Front-end developer</h2>
        </div>
      </div>

      <div></div>
    </section>
  );
}
