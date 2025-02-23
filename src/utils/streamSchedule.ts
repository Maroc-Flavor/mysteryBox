export interface StreamSchedule {
  day: string;
  time: string;
  platform: 'Instagram' | 'TikTok' | 'Facebook';
}

export const STREAM_SCHEDULE: StreamSchedule[] = [
  { day: 'Montag', time: '20:00', platform: 'TikTok' },
  { day: 'Mittwoch', time: '19:30', platform: 'TikTok' },
  { day: 'Freitag', time: '21:00', platform: 'TikTok' },
  { day: 'Sonntag', time: '18:00', platform: 'TikTok' },
];

export const DAY_MAP: { [key: string]: number } = {
  'Montag': 1,
  'Mittwoch': 3,
  'Freitag': 5,
  'Sonntag': 0
};

export function getNextStream(schedule: StreamSchedule[]): StreamSchedule {
  const now = new Date();
  const today = now.getDay();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  return schedule.find(stream => {
    const streamDay = DAY_MAP[stream.day];
    const [hours, minutes] = stream.time.split(':').map(Number);
    const streamTime = hours * 60 + minutes;

    return (
      today < streamDay || 
      (today === streamDay && currentTime < streamTime)
    );
  }) || schedule[0];
}

export function getTimeUntilStream(nextStream: StreamSchedule) {
  const now = new Date();
  const targetDay = DAY_MAP[nextStream.day];
  const [hours, minutes] = nextStream.time.split(':').map(Number);
  
  const target = new Date();
  target.setDate(target.getDate() + ((targetDay + 7 - target.getDay()) % 7));
  target.setHours(hours, minutes, 0, 0);

  const diff = target.getTime() - now.getTime();
  
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  };
} 