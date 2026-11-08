'use client';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-4 mt-12 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} | Sacrament Meeting Planner | All rights reserved</p>
    </footer>
  );
}