'use client'

import { contactAtom } from "@/lib/store";
import Text from "../components/Text";
import { Button } from "../components/ui/button";
import { useAtom } from "jotai";

export default function Navbar() {

  const [contactVisibility, setContactVisibility] = useAtom(contactAtom);

  return (
    <div className="bg-white/50 z-10 backdrop-blur-sm fixed flex justify-between items-center md:px-0 px-4 flex-row md:w-[65%] w-full h-[60px]">
      <Text variant="default">Jeremias Tika</Text>
      <Button size={"sm"} onClick={() => setContactVisibility(true)}>Contact</Button>
    </div>
  );
}
