'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { LucideIcon, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { FormEvent } from 'react'

export default function page() {
  const cardContent = [
    {
      icon: Mail,
      title: "Email",
      text: "itsjackabdullah@gmail.com",
      src: "mailto:itsjackabdullah@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      text: "+92 318 6825086",
      src: "tel:+92 318 6825086"
    },
  ]
  const businessHours = [
    {
      title: "Monday - Friday",
      time: "7:00 AM - 2:00 PM"
    },
    {
      title: "Saturday - Sunday",
      time: "Closed"
    },
  ]

  const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form)
    const name = formData.get("name")?.toString()
    const email = formData.get("email")?.toString().trim()
    const subject = formData.get("subject")?.toString()
    const message = formData.get("message")?.toString()
      
  }
  return (
    <div className='p-4 sm:p-10'>
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-semibold capitalize">Get in Touch</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Have a question or feedback? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
      </section>
      <section className='mt-12 flex flex-col sm:flex-row gap-4'>
        <section className="left flex-2">
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you shortly
              </CardDescription>
            </CardHeader>
            <CardContent>             
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <div className='flex-1 flex flex-col gap-2'>
                    <Label>Name *</Label>
                    <Input type='text' name="name" placeholder='John Doe' required/>
                  </div>
                  <div className='flex-1 flex flex-col gap-2'>
                    <Label>Email *</Label>
                    <Input type='email' name="email" placeholder='john@example.com' required/>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <Label>Subject *</Label>
                  <Input type='text' name="subject" placeholder='what is about you?' required/>
                </div>
                <div className='flex flex-col gap-2'>
                  <Label>Message *</Label>
                  <Textarea className='resize-none' name="message" placeholder='Tell us more about your inquiry...' required/>
                </div>
                <Button type='submit' variant="secondary" className='cursor-pointer' >Send Message</Button>
              </form>

            </CardContent>
          </Card>
        </section>
        <section className="right flex flex-col gap-4 flex-1">
          <Card>
            <CardHeader>
              <h2 className='text-xl font-semibold'>Contact Information</h2>
              <p className='text-xs'>Other ways to reach Us</p>
            </CardHeader>
            {cardContent.map((c, index) => {
              const Icon: LucideIcon = c.icon
              return (
                <div key={index} className='flex gap-4 items-center px-6'>
                  <div className='p-4 bg-secondary rounded-full'><Icon size={14}/></div>
                  <div>
                    <h2 className='text-sm'>{c.title}</h2>
                    <Link href={c.src} target='_blank' rel='noreferrer noopener' className='text-sm'>{c.text}</Link>
                  </div>
                </div>
              )
            })}
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Working Hours</CardTitle>
            </CardHeader>
            <CardContent className='space-y-2'>
              {businessHours.map((h, idx) => (
                <div key={idx} className='flex justify-between'>
                  <span className='opacity-70 text-sm'>{h.title}</span>
                  <span className='text-sm'>{h.time}</span>
                </div>
              ))}

            </CardContent>
          </Card>
        </section>
      </section>
    </div>
  )
}
