"use client";
import { CircleSlash2 } from "lucide-react";

import { CustomLink } from "@/components/ui/custom-link";

export const dynamic = "force-dynamic";

export default function NotFound() {

    return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-y-4 px-10">
      <CircleSlash2 size={80} strokeWidth={3} className="text-primary" />
      <h1 className="text-2xl">Could not find requested resource</h1>
      <div className="inline-flex items-center gap-x-2 text-base">
        Return to 
        <CustomLink href="/skill-test" className="text-primary hover:underline text-xl">
          Skills Test
        </CustomLink>
      </div>
    </div>
  );
}