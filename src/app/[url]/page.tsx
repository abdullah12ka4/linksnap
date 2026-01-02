import { redirect } from "next/navigation";
import { supabase } from "../connectDb"

export default async function Page({params}: {params: Promise<{ url: string }>}) {
  const { url } = await params
      const { data: existing } = await supabase
        .from("linksnap")
        .select("url, id,  clicks")
        .eq("shortUrl", url).maybeSingle()
      if (existing?.url) {
        await supabase.from("linksnap").update({ clicks: (existing?.clicks || 0) + 1}).eq("id", existing?.id)
        redirect(existing.url)        
      }
      else{
        redirect(process.env.NEXT_PUBLIC_HOST || "/")
      }
  return <div>My Post: {url}</div>
}