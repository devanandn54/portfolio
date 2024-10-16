import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Devanand N</h1>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="#about">About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#experience">Experience</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#projects">Projects</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#skills">Skills</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}