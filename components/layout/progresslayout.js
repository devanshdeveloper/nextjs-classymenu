import { Progress } from "@nextui-org/react";
import React from "react";

export default function ProgressLayout({ text = "Please Wait..." }) {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 z-50 flex items-center justify-center bg-background">
      <div className="w-[min(1000px,80vw)] flex flex-col items-center gap-5">
        <div className={`${text.length > 20 ? `text-lg` : `text-2xl`} text-center`}>{text}</div>
        <div className="w-[min(400px,80vw)]">
          <Progress
            size="sm"
            className=""
            isIndeterminate
            aria-label="Loading..."
          />
        </div>
      </div>
    </div>
  );
}
