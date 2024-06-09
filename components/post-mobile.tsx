import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function PostMobile() {
  return (
    <div className="flex p-3 gap-2 border">
      <Avatar className="mt-1 border">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="text-sm">
        <div className="flex gap-2">
          <span className="font-medium tracking-tight">evosurie</span>
          <span className="text-slate-400 tracking-tight">12h</span>
        </div>

        <span style={{ whiteSpace: 'pre-line' }}>
          Gila saham NVIDIA,iseng cuma beli 100K jadi segini Kalo kaya gini
          lebih cuan saham US daripada saham² perbankan Indo
        </span>
      </div>
    </div>
  );
}
