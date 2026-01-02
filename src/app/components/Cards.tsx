import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type cardsProps = {
    icon: LucideIcon,
    title: string,
    text: string    
}
export default function Cards({icon: Icon, title, text}: cardsProps) {
  return (
    <Card> 
      <CardContent>
             <CardTitle>
       <div className="p-4 w-fit rounded-full my-2 bg-secondary"><Icon/></div> 
      </CardTitle>
      <CardDescription>
         <h2 className="font-semibold">{title}</h2>
        <p className="text-gray-400">{text}</p> 
      </CardDescription> 
      </CardContent>

    </Card>
 
  )
}
