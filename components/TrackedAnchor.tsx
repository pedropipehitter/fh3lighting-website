"use client";

import type { AnchorHTMLAttributes } from "react";
import { track } from "@vercel/analytics";

type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventData?: Record<string, string>;
};

export default function TrackedAnchor({
  eventName,
  eventData,
  onClick,
  ...props
}: TrackedAnchorProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        track(eventName, eventData);
        onClick?.(event);
      }}
    />
  );
}
