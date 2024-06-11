import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function page() {
  return (
    <div className="flex flex-col p-3 gap-5">
      <div className="flex gap-2">
        <Button className="w-1/4">All</Button>
        <Button variant="outline" className="w-1/4">
          Follows
        </Button>
        <Button variant="outline" className="w-1/4">
          Replies
        </Button>
        <Button variant="outline" className="w-1/4">
          Repost
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Avatar className="mt-1 border">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex w-full items-center">
              <div className="w-full">
                <div className="flex gap-1">
                  <span className="font-medium tracking-tight">qwerty</span>
                  <span className="text-muted-foreground tracking-tight">
                    12h
                  </span>
                </div>

                <span className="text-muted-foreground">Followed you</span>
              </div>

              <Button variant="outline">Follow Back</Button>
            </div>
          </div>

          <Separator />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Avatar className="mt-1 border">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex w-full items-center">
              <div className="w-full">
                <div className="flex gap-1">
                  <span className="font-medium tracking-tight">qwerty</span>
                  <span className="text-muted-foreground tracking-tight">
                    12h
                  </span>
                </div>

                <span className="text-muted-foreground">Followed you</span>
              </div>

              <Button variant="outline">Follow Back</Button>
            </div>
          </div>

          <Separator />
        </div>
      </div>
    </div>
  );
}
