import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-8 bg-white text-black border-t border-gray-200">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image src="/images/postora-logo.png" alt="Postora Logo" width={100} height={25} className="h-auto w-auto" />
          <span className="sr-only">Postora</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 text-sm md:gap-6">
          <Link href="#" className="text-black hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-black hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-black hover:underline" prefetch={false}>
            Contact
          </Link>
          <Link href="#" className="text-black hover:underline" prefetch={false}>
            Blog
          </Link>
          <Link href="#about" className="text-black hover:underline" prefetch={false}>
            About
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link href="#" className="text-gray-600 hover:text-turquoise" aria-label="Facebook" prefetch={false}>
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-turquoise" aria-label="Instagram" prefetch={false}>
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-turquoise" aria-label="Twitter" prefetch={false}>
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-turquoise" aria-label="LinkedIn" prefetch={false}>
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-turquoise" aria-label="YouTube" prefetch={false}>
            <Youtube className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
