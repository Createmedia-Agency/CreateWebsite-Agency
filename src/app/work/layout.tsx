import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Production Portfolio | Commercials, Campaigns & Branded Content",
  description: "Explore CREATE's portfolio of commercials, branded content, campaigns, films, and visual storytelling projects.",
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
