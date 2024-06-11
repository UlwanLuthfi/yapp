import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function page() {
  return (
    <div className="flex flex-col p-3 gap-3">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-tight">
            Ulwan Luthfi
          </span>
          <span className="tracking-tight font-semibold">ulwanluthfii</span>
        </div>

        <Avatar className="h-16 w-16">
          <AvatarImage src="https://github.com/ulwanluthfi.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <span className="leading-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ab.
      </span>

      <span className="text-muted-foreground">23 Followers</span>

      <Tabs defaultValue="post" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="post" className="w-1/3">
            Post
          </TabsTrigger>
          <TabsTrigger value="replies" className="w-1/3">
            Replies
          </TabsTrigger>
          <TabsTrigger value="repost" className="w-1/3">
            Repost
          </TabsTrigger>
        </TabsList>
        <TabsContent value="post">Make changes to your posts here.</TabsContent>
        <TabsContent value="replies">Change your replies here.</TabsContent>
        <TabsContent value="repost">Change your reposts here.</TabsContent>
      </Tabs>
    </div>
  );
}
