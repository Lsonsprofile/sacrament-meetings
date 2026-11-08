'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-slate-800 text-white py-4 mt-12 text-center text-sm">
      <p>&copy; {year || '2026'} | Sacrament Meeting Planner | All rights reserved</p>
    </footer>
  );
}