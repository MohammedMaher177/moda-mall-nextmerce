import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moda Mall | E-commerce Store",
  description: "This is Home for Moda Mall Store",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
