export const categories = ['Semua', 'Berita', 'Olahraga', 'Dokumenter', 'Hiburan'];

export const channels = [
  {
    id: 'nusantara',
    name: 'Nusantara',
    category: 'Dokumenter',
    title: 'Di Atas Awan Bromo',
    description:
      'Awali perjalanan menyusuri Indonesia dari laut pasir Bromo, saat cahaya pertama muncul di balik pegunungan.',
    image: '/media/bromo.webp',
    source: '/media/bromo.mp4',
    accent: '#53e6ac',
    initials: 'N'
  },
  {
    id: 'kota',
    name: 'Kota Hari Ini',
    category: 'Berita',
    title: 'Jakarta Setelah Senja',
    image: '/media/kota.webp',
    source: '/media/kota.mp4',
    accent: '#75baff',
    initials: 'K'
  },
  {
    id: 'arena',
    name: 'Arena',
    category: 'Olahraga',
    title: 'Di Bawah Lampu Stadion',
    image: '/media/arena.webp',
    source: '/media/arena.mp4',
    accent: '#8de965',
    initials: 'A'
  },
  {
    id: 'rimba',
    name: 'Rimba',
    category: 'Dokumenter',
    title: 'Menelusuri Hutan Bali',
    image: '/media/rimba.webp',
    source: '/media/rimba.mp4',
    accent: '#f9cc72',
    initials: 'R'
  },
  {
    id: 'layar',
    name: 'Layar',
    category: 'Hiburan',
    title: 'Di Balik Layar',
    image: '/media/layar.webp',
    source: '/media/layar.mp4',
    accent: '#ee91b8',
    initials: 'L'
  }
];

export const featured = channels[0];

export const schedule = [
  { time: '18.00', channelId: 'kota', duration: '30 menit' },
  { time: '19.00', channelId: 'arena', duration: '60 menit' },
  { time: '20.00', channelId: 'nusantara', duration: '45 menit' }
];

export function getStreamType(source) {
  const pathname = new URL(source, window.location.origin).pathname.toLowerCase();
  if (pathname.endsWith('.m3u8')) return 'hls';
  if (pathname.endsWith('.mp4')) return 'mp4';
  return null;
}
