import ThemeToggleMobile from './theme-toggle-mobile';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { List } from '@phosphor-icons/react/dist/ssr';

export default function MobileNav() {
  return (
    <div className="fixed flex w-full p-3 items-center justify-between top-0 bg-white/90 backdrop-blur-xl z-10">
      <Avatar className="border">
        <AvatarImage src="https://github.com/UlwanLuthfi.png" />
        <AvatarFallback>UL</AvatarFallback>
      </Avatar>

      <ThemeToggleMobile />

      <List className="w-7 h-7" />
    </div>
  );
}
