import { Zap, Link, Copy, Check } from "lucide-react";
import Cards from "../components/Cards";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  const aboutCards = [
    {
      icon: Zap,
      title: "Instant Results",
      text: "No waiting around. Get your shortened link immediately and start sharing right away."
    },
    {
      icon: Link,
      title: "Clean links",
      text: "Our shortened URLs are clean, professional, and easy to remember for your audience."
    },
    {
      icon: Copy,
      title: "One-Click Copy",
      text: "Easily copy your shortened links to clipboard with a single click for quick sharing."
    },
    {
      icon: Check,
      title: "No Registration",
      text: "Start using linkSnap immediately without creating an account or providing any personal information."
    },
    
  ]
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-semibold capitalize">About linkSnap</h1>
        <p className="text-muted-foreground text-lg">
          We make link sharing simple, fast, and effective
        </p>
      </section>

      {/* Mission Section */}
      <section className="space-y-4">
        <h2>Our Mission</h2>
        <Card>
          <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
              linkSnap was created with a simple mission: to make URL shortening accessible,
              fast, and hassle-free for everyone. In today's digital world, sharing links is
              an everyday activity, whether for social media, marketing campaigns, or personal
              use. We believe that this process should be as simple as possible, which is why
              we've built a platform that lets you create shortened links in seconds without
              any registration or complicated setup.
            </p> 
          </CardContent>
       
        </Card>
    
      </section>

      {/* Features Section */}
      <section className="space-y-6">
        <h2>What Makes Us Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutCards.map((item,index)=>(
            <Cards key={index} icon = {item.icon} title={item.title} text={item.text}/>
          ))}

        </div>
      </section>

      {/* Values Section */}
      <section className="space-y-4">
        <h2>Our Values</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Simplicity</CardTitle>
              <CardDescription>
                We believe in keeping things simple. Our interface is clean and intuitive,
                so anyone can use it without a learning curve.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Speed</CardTitle>
              <CardDescription>
                Time is valuable. We've optimized every aspect of our service to deliver
                the fastest link shortening experience possible.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accessibility</CardTitle>
              <CardDescription>
                Everyone should have access to great tools. That's why linkSnap is completely
                free and requires no registration.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
}
