import { PlusCircle } from '@phosphor-icons/react/dist/ssr';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

export default function CreatePost() {
  return (
    <div className="mt-2">
      <Sheet>
        <SheetTrigger>
          <PlusCircle className="h-7 w-7" />
          {/* <span className="sr-only">Create Post</span> */}
        </SheetTrigger>
        <SheetContent side="bottom" className="h-full">
          <SheetHeader>
            <SheetTitle>New Post</SheetTitle>
          </SheetHeader>

          <div className="flex gap-2">
            <Avatar className="mt-1 border">
              <AvatarImage src="https://github.com/ulwanluthfi.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2 w-full">
              <span className="font-medium tracking-tight">ulwanluthfii</span>
              <div className="grid w-full gap-2">
                <Textarea placeholder="Start typing your post..." />
                <Button>Send post</Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
