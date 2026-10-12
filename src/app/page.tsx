import type { Metadata } from "next";
import { Website } from "@/components/Website";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return <Website />;
}
