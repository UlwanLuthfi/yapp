import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

export default function UsersList() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2">
        <Avatar className="mt-1 border">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex w-full justify-between gap-2">
          <div className="grid">
            <span className="font-medium tracking-tight">tempodotco</span>
            <span className="text-muted-foreground truncate w-full">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, eveniet.
            </span>
            <span>14 followers</span>
          </div>
          <Button variant="outline">Follow</Button>
        </div>
      </div>
      <Separator className="mt-5" />
    </div>
  );
}
