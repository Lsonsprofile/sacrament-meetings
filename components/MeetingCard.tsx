import { User, Music } from 'lucide-react';
import type { SacramentMeeting } from '@/lib/types';

export default function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
  const dateObj = new Date(meeting.date);
  const month = dateObj.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();

  const speakerCount = meeting.speakers.filter(s => s.type === 'speaker').length;
  const musicCount = meeting.speakers.filter(s => s.type === 'musical-number').length;

  // Determine badge color based on type
  const badgeColor = {
    regular: 'bg-green-100 text-green-800',
    testimony: 'bg-blue-100 text-blue-800',
    stake: 'bg-purple-100 text-purple-800',
    general: 'bg-yellow-100 text-yellow-800',
  }[meeting.meetingType];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
      
      {/* Date Block - Stacks on mobile, side-by-side on desktop */}
      <div className="flex sm:flex-col items-center sm:items-center sm:border-r border-gray-200 sm:pr-6 sm:min-w-[70px]">
        <p className="text-xs font-bold text-gray-700 mr-2 sm:mr-0">{month}</p>
        <p className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mr-2 sm:mr-0">{day}</p>
        <p className="text-xs text-gray-700">{year}</p>
      </div>

      {/* Details */}
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-1">
          {meeting.meetingType === 'regular' ? 'Regular Sacrament Meeting' : 
           meeting.meetingType === 'testimony' ? 'Testimony Meeting' : 
           meeting.meetingType === 'stake' ? 'Stake Conference (Non-Sacrament)' : 
           'General Conference (Non-Sacrament)'}
        </h3>
        <p className="text-sm text-gray-700 mb-2">Conducting: {meeting.conducting}</p>
        <div className="flex flex-wrap gap-4 text-xs text-gray-700">
          <span className="flex items-center gap-1"><User className="w-3 h-3" /> {speakerCount} Speakers</span>
          {musicCount > 0 && <span className="flex items-center gap-1"><Music className="w-3 h-3" /> {musicCount} Musical Number</span>}
        </div>
      </div>

      {/* Badge - Moves to the right on desktop, bottom on mobile */}
      <div className="flex sm:flex-col items-end gap-2 mt-2 sm:mt-0">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${badgeColor}`}>
          {meeting.meetingType}
        </span>
      </div>
    </div>
  );
}