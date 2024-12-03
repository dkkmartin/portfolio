import Image from 'next/image';
import Link from 'next/link';

interface Props {
  linkSrc: string;
  imgSrc: string;
  secondImgSrc: string;
  alt: string;
  title: string;
  desc: string;
}

export default function SmallProjectCard({
  linkSrc,
  imgSrc,
  secondImgSrc,
  alt,
  title,
  desc,
}: Props) {
  return (
    <div className="h-[356px] size-full cursor-pointer overflow-hidden rounded-xl border bg-background p-4 shadow-sm transition-all duration-300 hover:bg-primary/[0.03] sm:col-span-1 hover:dark:bg-neutral-800/30 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_40px_-20px_#ffffff1f_inset]">
      <Link
        className="flex group relative"
        href={linkSrc}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex-3 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
          <Image
            className=" rounded-xl object-contain border dark:[border:1px_solid_rgba(255,255,255,.1)]"
            src={imgSrc}
            alt={alt}
            width={150}
            height={100}
          />
        </div>
        <div className="flex-3 absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <Image
            className="rounded-xl object-contain border dark:[border:1px_solid_rgba(255,255,255,.1)]"
            src={secondImgSrc}
            alt={alt}
            width={150}
            height={100}
            loading="eager"
          />
        </div>

        <div className="flex-1 flex flex-col gap-4 justify-center pl-4">
          <h3 className="text-xl font-medium">{title}</h3>
          <p>{desc}</p>
        </div>
      </Link>
    </div>
  );
}
