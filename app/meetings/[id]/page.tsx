import MeetingDetail from '@/components/MeetingDetail';
import type { SacramentMeeting } from '@/lib/types';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';

async function getMeeting(id: string) {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';

  const res = await fetch(`${protocol}://${host}/api/meetings/${id}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export default async function MeetingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const meeting: SacramentMeeting | null = await getMeeting(id);

  if (!meeting) {
    notFound();
  }

  return (
    <div>
      <MeetingDetail meeting={meeting} />
    </div>
  );
}