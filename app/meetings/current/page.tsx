import { redirect } from 'next/navigation';
import { getMeetings } from '@/lib/meetings-db';

export default function CurrentMeeting() {
  // 1. Get today's date
  const today = new Date();
  
  // 2. Find the most recent Sunday
  const dayOfWeek = today.getDay(); // 0 is Sunday
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);
  
  // 3. Format as YYYY-MM-DD
  const isoDate = sunday.toISOString().split('T')[0];
  
  // 4. Find a meeting on that date
  const meetings = getMeetings(isoDate);
  
  if (meetings.length > 0) {
    // Redirect to the first meeting found
    redirect(`/meetings/${meetings[0].id}`);
  } else {
    // Fallback: If no meeting exists for today, go to the list
    redirect('/meetings');
  }
}