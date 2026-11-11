import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-05-03',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: 'In Remembrance of Thy Suffering' },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: May 10']
  },
  {
    id: 2,
    date: '2026-05-10',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 85, title: 'How Firm a Foundation' },
    openingPrayer: 'Brother Clark',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 190, title: 'In Memory of the Crucified' },
    speakers: [
      { name: 'Congregation', topic: 'Testimonies', type: 'speaker' }
    ],
    closingHymn: { number: 152, title: 'Not Now, But in the Coming Years' },
    closingPrayer: 'Sister Taylor'
  },
  {
    id: 3,
    date: '2026-05-17',
    meetingType: 'stake',
    presiding: 'Stake President Lee',
    conducting: 'President Kim',
    openingHymn: { number: 60, title: 'Battle Hymn of the Republic' },
    openingPrayer: 'Brother Harris',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 1, title: 'The Morning Breaks' },
    speakers: [
      { name: 'President Kim', topic: 'Stake Conference', type: 'speaker' }
    ],
    closingHymn: { number: 6, title: 'Redeemer of Israel' },
    closingPrayer: 'Sister Adams'
  },
  {
    id: 4,
    date: '2026-05-24',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    openingPrayer: 'Sister Young',
    wardBusiness: [{ description: 'Releasing of Elders Quorum president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 172, title: 'Tis Sweet to Sing the Matchless Love' },
    speakers: [
      { name: 'Brother White', topic: 'The Atonement', type: 'speaker' },
      { name: 'Sister Green', topic: 'Service', type: 'speaker' },
      { name: 'Primary Children', topic: 'I Am a Child of God', type: 'musical-number' }
    ],
    closingHymn: { number: 219, title: 'Because I Have Been Given Much' },
    closingPrayer: 'Brother Hall',
    announcements: ['Bishopric fireside next Sunday']
  },
  {
    id: 5,
    date: '2026-05-31',
    meetingType: 'general',
    presiding: 'Elder Anderson',
    conducting: 'Bishop Smith',
    openingHymn: { number: 27, title: 'Joseph Smith\'s First Prayer' },
    openingPrayer: 'Brother Young',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 175, title: 'While of These Emblems We Partake' },
    speakers: [
      { name: 'Elder Anderson', topic: 'General Conference', type: 'speaker' }
    ],
    closingHymn: { number: 199, title: 'That Easter Morn' },
    closingPrayer: 'Sister Nelson'
  }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter(m => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}