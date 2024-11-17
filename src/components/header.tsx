import { ThemeSwitcher } from './themeSwitcher';
import { GeistMono } from 'geist/font/mono';
import { Tabs } from './ui/activeTabs';

const tabData = [
  { title: 'projects', value: 'projects' },
  { title: 'visitors', value: 'visitors' },
];

export default function Header() {
  return (
    <header className={`${GeistMono.className} relative tracking-tight`}>
      <nav className="  max-w-[576px] mx-auto flex justify-between pt-8 items-center">
        <h1 className="font-bold text-2xl">Martin Bruun</h1>
        <ul className="flex text-lg gap-2 items-center">
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
