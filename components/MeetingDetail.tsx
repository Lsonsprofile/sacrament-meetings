import type { SacramentMeeting } from '@/lib/types';
import { User, Music, Calendar, Printer, Share2 } from 'lucide-react';

export default function MeetingDetail({ meeting }: { meeting: SacramentMeeting }) {
  const dateObj = new Date(meeting.date);
  const formattedDate = dateObj.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 print:p-0">
      
      {/* Buttons (Hidden on print) */}
      <div className="flex justify-between items-center mb-6 print:hidden">
        <span className="text-sm text-blue-600 font-semibold">&larr; Back to Meetings</span>
        <div className="flex gap-2">
          <button onClick={() => window.print()} className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm font-semibold hover:bg-gray-50">
            <Printer className="w-4 h-4" /> Print Program
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm font-semibold hover:bg-gray-50">
            <Share2 className="w-4 h-4" /> Share
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="mb-8 print:text-center">
        <h1 className="text-3xl font-bold text-[#1e3a5f] mb-1 print:text-2xl">
          {meeting.meetingType === 'regular' ? 'Regular Sacrament Meeting' : meeting.meetingType === 'testimony' ? 'Testimony Meeting' : meeting.meetingType === 'stake' ? 'Stake Conference' : 'General Conference'}
        </h1>
        <p className="text-gray-500 print:text-black">{formattedDate}</p>
        <div className="mt-2 print:hidden">
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold capitalize">
            {meeting.meetingType}
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 print:block">
        
        {/* Left Column */}
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl print:bg-white print:p-0 print:mb-4">
            <div className="space-y-4 text-sm">
              <p className="flex items-center gap-2"><User className="w-4 h-4 text-blue-600 print:hidden" /> <strong>Presiding:</strong> {meeting.presiding}</p>
              <p className="flex items-center gap-2"><User className="w-4 h-4 text-blue-600 print:hidden" /> <strong>Conducting:</strong> {meeting.conducting}</p>
              <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-600 print:hidden" /> <strong>Meeting Type:</strong> <span className="capitalize">{meeting.meetingType}</span></p>
            </div>
          </div>

          {meeting.announcements && meeting.announcements.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-[#1e3a5f] mb-3 print:text-black">Announcements</h2>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 print:text-black">
                {meeting.announcements.map((announcement, i) => (
                  <li key={i}>{announcement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-4 text-sm print:text-black">
          <p className="flex items-center gap-2"><Music className="w-4 h-4 text-blue-600 print:hidden" /> <strong>Opening Hymn:</strong> #{meeting.openingHymn.number} — {meeting.openingHymn.title}</p>
          <p className="flex items-center gap-2"><User className="w-4 h-4 text-blue-600 print:hidden" /> <strong>Opening Prayer:</strong> {meeting.openingPrayer}</p>
          
          {meeting.wardBusiness.length > 0 && (
            <div className="flex items-start gap-2">
              <Calendar className="w-4 h-4 text-blue-600 mt-1 print:hidden" /> 
              <div>
                <strong>Ward Business:</strong>
                <ul className="list-disc list-inside text-gray-600 print:text-black">
                  {meeting.wardBusiness.map((item, i) => (
                    <li key={i}>{item.description}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-600 print:hidden" /> <strong>Stake Business:</strong> {meeting.stakeBusiness ? 'Yes' : 'No'}</p>
          <p className="flex items-center gap-2"><Music className="w-4 h-4 text-blue-600 print:hidden" /> <strong>Sacrament Hymn:</strong> #{meeting.sacramentHymn.number} — {meeting.sacramentHymn.title}</p>
          
          <div>
            <h3 className="font-bold text-[#1e3a5f] mb-2 flex items-center gap-2 print:text-black">
              <Music className="w-4 h-4 text-blue-600 print:hidden" /> Speakers & Musical Numbers
            </h3>
            <ul className="space-y-1 text-gray-600 ml-6 print:text-black">
              {meeting.speakers.map((item, i) => (
                <li key={i}>
                  {item.type === 'speaker' ? (
                    <span><strong>{item.name}</strong> — {item.topic}</span>
                  ) : (
                    <span><strong>{item.name}</strong> — Musical Number</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <p className="flex items-center gap-2"><Music className="w-4 h-4 text-blue-600 print:hidden" /> <strong>Closing Hymn:</strong> #{meeting.closingHymn.number} — {meeting.closingHymn.title}</p>
          <p className="flex items-center gap-2"><User className="w-4 h-4 text-blue-600 print:hidden" /> <strong>Closing Prayer:</strong> {meeting.closingPrayer}</p>
        </div>
      </div>
      
      {/* Print View Scripture Footer */}
      <div className="hidden print:block text-center mt-12 text-sm italic">
        <p>"In all things give thanks."</p>
        <p>1 Thessalonians 5:18</p>
      </div>
    </div>
  );
}