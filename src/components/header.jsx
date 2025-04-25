"use client";

import { useState } from "react";
import { BookmarkMinus, Menu, Search, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "./theme-provider";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-muted px-4 sm:px-6 md:px-20 py-3">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <BookmarkMinus className="text-emerald-500 w-6 h-6" />
          <span className="text-sm font-semibold hidden sm:inline">Redify</span>
        </div>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Search className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Sun className="w-4 h-4" />
          </Button>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          />
          <Button className="rounded-full px-4 py-1 text-sm bg-[#048a60]/80 hover:bg-[#048a60] text-white">
            Login
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 px-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground">
            <Sun className="w-4 h-4 mr-2" />
            Theme
          </Button>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          />
          <Button className="w-full text-sm bg-[#048a60]/80 hover:bg-[#048a60] text-white">
            Login
          </Button>
        </div>
      )}
    </header>
  );
}
