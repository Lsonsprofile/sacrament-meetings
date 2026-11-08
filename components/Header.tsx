'use client';

import { Church } from 'lucide-react';
import NavLinks from './NavLinks';

export default function Header() {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  });

  return (
    <header className="bg-[#1e3a5f] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <Church className="w-10 h-10 text-white" />
            <div>
              <h1 className="text-xl font-bold leading-tight">Cedar Hills Ward</h1>
              <p className="text-sm text-blue-200">Sacrament Meeting Planner</p>
            </div>
          </div>

          {/* Date */}
          <div className="text-right text-sm">
            <p className="text-blue-200">{today.split(',')[0]}</p>
            <p className="font-semibold">{today.split(',')[1]}</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 border-t border-blue-800/50 pt-3">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}