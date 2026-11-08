import { Suspense } from 'react';
import MeetingCard from '@/components/MeetingCard';
import type { SacramentMeeting } from '@/lib/types';
import { Search } from 'lucide-react';
import { headers } from 'next/headers';

async function MeetingsList() {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  
  // This ensures the link works locally AND on Vercel
  const res = await fetch(`${protocol}://${host}/api/meetings`, { cache: 'no-store' });
  const meetings: SacramentMeeting[] = await res.json();

  return (
    <div className="flex flex-col gap-4">
      {meetings.map((meeting) => (
        <MeetingCard key={meeting.id} meeting={meeting} />
      ))}
    </div>
  );
}

export default function MeetingsPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[#1e3a5f]">Sacrament Meetings</h2>
          <p className="text-sm text-gray-500">View and navigate all sacrament meeting entries.</p>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
          <input type="text" placeholder="Search meetings..." className="w-full pl-9 pr-4 py-2 border rounded-md text-sm outline-none focus:border-blue-500" disabled />
        </div>
        <select className="border rounded-md px-4 py-2 text-sm text-gray-600 outline-none" disabled>
          <option>All Types</option>
        </select>
      </div>

      <Suspense fallback={<p>Loading meetings...</p>}>
        <MeetingsList />
      </Suspense>
    </div>
  );
}