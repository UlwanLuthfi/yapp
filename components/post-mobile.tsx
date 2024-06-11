import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  Heart,
  ChatCircle,
  Repeat,
  PaperPlaneRight,
} from '@phosphor-icons/react/dist/ssr';

export default function PostMobile() {
  return (
    <div className="flex p-3 gap-2 border sm:hidden">
      <Avatar className="mt-1 border">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <div className="flex items-center gap-1">
          <span className="font-medium tracking-tight">qwerty</span>
          <span className="text-sm text-muted-foreground tracking-tight">
            12h
          </span>
        </div>

        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem neque
          numquam doloremque reprehenderit minima, ut cum nam sit, ex accusamus
          eaque ad. Reiciendis quae eveniet officiis saepe accusantium vel aut.
        </span>

        <div className="flex items-center gap-7 mt-2">
          <Heart className="w-5 h-5" />
          <ChatCircle className="w-5 h-5" />
          <Repeat className="w-5 h-5" />
          <PaperPlaneRight className="w-5 h-5 mb-1 -rotate-[30deg]" />
        </div>
      </div>
    </div>
  );
}
