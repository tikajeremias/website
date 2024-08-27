'use client'

import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Data } from "@/data/Data";
import { contactAtom } from "@/lib/store";
import { useAtom } from "jotai";

export default function Contact() {

  const [visibiity, setVisibility] = useAtom(contactAtom)

  return (
    <div className="fixed z-50 w-full h-full flex justify-center items-center bg-black/75" onClick={() => setVisibility(false)}>
      <div className="w-auto h-auto p-8 bg-white rounded-lg flex justify-center items-center flex-col gap-4">
        <h2 className="text-2xl font-bold text-center text-gray-800">Contact</h2>
        <div className="space-y-3">

          <a
            href={Data.socialMedia.email}
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow"
            target="_blank"
            rel={Data.socialMedia.email}>
            <Mail className="h-6 w-6" />
            <span className="flex-1 ml-3 whitespace-nowrap">tikajeremias@gmail.com</span>
          </a>

          <a
            href={Data.socialMedia.phone}
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow"
            target="_blank"
            rel={Data.socialMedia.phone}>
            <Phone className="h-6 w-6" />
            <span className="flex-1 ml-3 whitespace-nowrap">+54 11 2256-2288</span>
          </a>

          <a
            href={Data.socialMedia.linkedin}
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow"
            target="_blank"
            rel={Data.socialMedia.linkedin}>
            <Linkedin className="h-6 w-6" />
            <span className="flex-1 ml-3 whitespace-nowrap">jeredevv</span>
          </a>
          
          <a
            href={Data.socialMedia.instagram}
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow"
            target="_blank"
            rel={Data.socialMedia.instagram}>
            <Instagram className="h-6 w-6" />
            <span className="flex-1 ml-3 whitespace-nowrap">Jere.dev</span>
          </a>
          
          <a
            href={Data.socialMedia.github}
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow"
            target="_blank"
            rel={Data.socialMedia.github}>
            <Github className="h-6 w-6" />
            <span className="flex-1 ml-3 whitespace-nowrap">tikajeremias</span>
          </a>

        </div>
        <Button onClick={() => setVisibility(false)}>Close</Button>
      </div>
    </div>
  )
}