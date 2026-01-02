import { Copy, Link, Zap } from "lucide-react";
import InputComponent from "./components/InputComponent";
import Cards from "./components/Cards";


export default function Home() {
  const whyChooseCards = [
    {
      icon: Zap,
      title: "Lightning Fast",
      text: "Generate shortened links instantly with our optimized platform"
    },
    {
      icon: Link,
      title: "Easy to Share",
      text: "Create memorable links that are perfect for social media and marketing"
    },
    {
      icon: Copy,
      title: "Simple & Free",
      text: "No registration required. Just paste your URL and get started"
    },
  ]
  return (
    <main className="p-4">
      <div className="hero py-10 flex flex-col gap-2 justify-center items-center max-w-3xl mx-auto">
        <h2 className="text-4xl text-center font-semibold capitalize text-black/90 dark:text-white/90">Shorten Your Links in a Snap</h2>
        <p className="text-lg sm:w-[35vw] text-center text-gray-600 dark:text-gray-400 font-medium">Create short, memorable links that are easy to share. Fast, reliable, and completely free.</p>
        <InputComponent />
  
      </div>      
      <div className="p-2 sm:p-16">
          <h2 className="text-center pb-6 capitalize font-semibold text-2xl">why choose linksnap?</h2>
        <div className="flex flex-col sm:flex-row gap-6">
          {whyChooseCards?.map((item, index)=>(
            <Cards key={index} icon={item.icon} title={item.title} text={item.text} />  
          ))}
                  
        </div>
        </div>
    </main>
  );
}
