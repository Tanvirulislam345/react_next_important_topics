"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Image from "next/image";
import { Activity, useState } from "react";

function SelectDemo({ setTopic }: { setTopic: (topic: string) => void }) {
  return (
    <Select onValueChange={(value: string) => setTopic(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Topic" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Activity">Activity</SelectItem>
          <SelectItem value="Home">Home</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function PlainMode({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
      {children}
    </div>
  );
}

const Home = () => {
  const [topic, setTopic] = useState<string | null>(null);
  return (
    <>
      {" "}
      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <SelectDemo setTopic={setTopic} />
        <a
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={16}
            height={16}
          />
          Deploy Now
        </a>
        <a
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid  px-5 transition-colors hover:border-transparent dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
      </div>
      <Activity mode={topic && topic !== "Home" ? "hidden" : "visible"}>
        <InitView />
      </Activity>
      <Activity mode={topic && topic === "Activity" ? "visible" : "hidden"}>
        <PlainMode>
          <ActivityDemo />
        </PlainMode>
      </Activity>
    </>
  );
};

export default Home;

function InitView() {
  console.log("Rendering InitView");
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        To get started, edit the page.tsx file.
      </h1>
      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Looking for a starting point or more instructions? Head over to{" "}
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="font-medium text-zinc-950 dark:text-zinc-50"
        >
          Templates
        </a>{" "}
        or the{" "}
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="font-medium text-zinc-950 dark:text-zinc-50"
        >
          Learning
        </a>{" "}
        center.
      </p>
    </div>
  );
}

function ActivityDemo() {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-2">Usage</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Restoring the state of hidden components</li>
        <li>Restoring the DOM of hidden components</li>
        <li>Pre-rendering content that’s likely to become visible</li>
        <li>Speeding up interactions during page load</li>
      </ul>

      <h3 className="font-semibold text-lg mb-2">Troubleshooting</h3>
      <ul className="list-disc pl-6">
        <li>My hidden components have unwanted side effects</li>
        <li>My hidden components have Effects that aren’t running</li>
      </ul>
    </div>
  );
}
