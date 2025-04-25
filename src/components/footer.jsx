import { Facebook, Twitter, Instagram, Linkedin, Youtube, Bookmark, BookmarkMinus } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-6 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-6">

        {/* Logo + Description */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-2">
            <BookmarkMinus className="text-emerald-500 w-6 h-6" />
            <h1 className="text-2xl font-semibold text-emerald-500">Redify</h1>
          </div>

          <p className="text-white/80 max-w-md text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. more...
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-2">
            <Facebook className="w-5 h-5 text-emerald-500 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 text-emerald-500 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 text-emerald-500 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 text-emerald-500 hover:text-white cursor-pointer" />
            <Youtube className="w-5 h-5 text-emerald-500 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white/30" />

        {/* Bottom Note */}
        <div className="text-sm text-white/80 text-center">
          Copyright © {new Date().getFullYear()} Redify | All Rights Reserved |{" "}
          <Link href="/terms" className="hover:underline text-white">Terms and Conditions</Link> |{" "}
          <Link href="/privacy" className="hover:underline text-white">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
