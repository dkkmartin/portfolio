import { ThemeSwitcher } from './themeSwitcher';
import { GeistMono } from 'geist/font/mono';
import { Tabs } from './ui/activeTabs';
import Link from 'next/link';

const tabData = [{ title: 'projects', value: 'projects' }];

export default function Header() {
  return (
    <header className={`${GeistMono.className} relative tracking-tight md:mb-8`}>
      <nav className="max-w-[576px] mx-auto flex justify-between pt-8 items-center px-6">
        <Link className="font-bold text-2xl hidden md:block" href={'/'}>
          <h1>MARTIN BRUUN</h1>
        </Link>
        <Link className="font-bold text-2xl md:hidden" href={'/'}>
          <h1>MB</h1>
        </Link>
        <ul className="flex gap-2 items-center">
          <li>
            <Tabs tabs={tabData} />
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
}
