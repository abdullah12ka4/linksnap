'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Copy, Link as LucidLink, Zap } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";

export default function InputComponent() {
    const [generate, setgenerate] = useState("")
    const [loading, setloading] = useState(false)

    const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        const url = formData.get("url")?.toString().trim();
        const shortUrl = formData.get("shortUrl")?.toString().trim();
        setloading(true)
        await fetch('/api/generate', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "url": url, "shortUrl": shortUrl }),
            redirect: "follow"
        }).then((response => response.json()))
            .then((result) => {
                setloading(false)
                toast(result.message)
                setgenerate(`${shortUrl}`)
                form.reset()
            }).catch((error) => console.error(error))
    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(generate)
            toast.success("link copied")
        } catch (error) {
            toast.error("Copied Failed due to")
        }
    }

    return (
        <>
            <Card className="w-full">
                <CardContent >
                    <CardTitle>
                        <h4 className="text-xl font-semibold text-black/90 text-center my-2 dark:text-white/90 capitalize">Create short Link</h4>
                    </CardTitle>
                    <CardDescription>
                        <p className="text-sm text-center text-gray-600 dark:text-gray-400 font-medium">Enter your long URL below and get a shortened version instantly</p>
                        <form
                            onSubmit={handleGenerate}
                            className="flex flex-col gap-4 w-full mt-8">
                            <div className="flex flex-col gap-2">
                                <Input type="url" name="url" placeholder="https://example.com/your-very-long-url" required />
                                <Input type="text" name="shortUrl" placeholder="Enter your preferrred short url" required />
                            </div>
                            <Button
                                type="submit"
                                className="cursor-pointer">{!loading ? <div className="flex gap-2 items-center"><span><Zap /></span> {" "} Shorten</div> : <div>loading...</div>}</Button>
                        </form>
                    </CardDescription>
                </CardContent>
            </Card>

            {generate
                && <Card className="w-full">
                    <CardContent className="relative">
                        <CardTitle>
                            <Button
                                onClick={handleCopy}
                                className="absolute cursor-pointer bg-transparent hover:bg-transparent top-12 right-4 z-1 text-black dark:text-white opacity-60 hover:opacity-100">
                                <Copy size={18} />
                                <span>Copy</span>
                            </Button>
                            <h2 className="text-black/90 mb-4 dark:text-white/90 font-xl font-bold text-center">Your Shortened Links</h2>
                        </CardTitle>
                        <CardDescription>
                            <div className="flex items-center  gap-2 w-[80%] text-gray-700">
                                <Link target="_blank" href={generate} className="flex items-center gap-2 pt-6"><LucidLink size={16} /> <h2 className="pl-6 font-medium">{generate}</h2></Link>
                            </div>
                        </CardDescription>
                    </CardContent>
                </Card>}
        </>

    )
}
