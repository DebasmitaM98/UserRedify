"use client";

import { useState } from "react";
import { BookmarkMinus, Menu,  Search,  Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "./theme-provider";
import { ModeToggle } from "./theme-switcher";

export function Header({ value,onChange,show }) {
  const [menuOpen, setMenuOpen] = useState(false);


  const handleSearch = (e) => {
    
  onChange(e.target.value); 
  };

  return (
    <header className="w-full bg-muted px-4 sm:px-6 md:px-20 py-3">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center gap-2">
          <BookmarkMinus className="text-emerald-500 w-6 h-6" />
          <span className="text-sm font-semibold hidden sm:inline">Redify</span>
        </div>

        <div className="hidden md:flex items-center gap-2">
  {!show&&<div className="relative">
    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
    <input
      type="text"
      placeholder="Search books..."
      value={value}
      onChange={handleSearch}
      className="pl-8 pr-3 py-1 text-sm border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  </div>

  }
  <ModeToggle />
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange />
  <Button className="rounded-full px-4 py-1 text-sm bg-[#048a60]/80 hover:bg-[#048a60] text-white">
    Login
  </Button>
</div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2 px-4 space-y-2">
          <input
            type="text"
            placeholder="Search books..."
            value={input}
            onChange={handleSearch}
            className="w-full max-w-xs px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Button variant="ghost" className="w-full justify-start">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Sun className="w-4 h-4 mr-2" />
            Theme
          </Button>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange />
          <Button className="w-full text-sm bg-[#048a60]/80 hover:bg-[#048a60] text-white">
            Login
          </Button>
        </div>
      )}
    </header>
  );
}
