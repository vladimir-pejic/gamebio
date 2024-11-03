export const dummyUser = {
  id: '1',
  username: 'gamerpro',
  displayName: 'Gamer Pro',
  firstName: 'John',
  lastName: 'Doe',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=gamerpro',
  coverImage:
    'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200',
  bio: 'Professional gamer and content creator 🎮 | Streaming daily on Twitch',
  email: 'gamer@example.com',
  location: 'Los Angeles, CA',
  birthDate: '1995-06-15',
  joinDate: '2023-01-01',
  followers: 1234,
  following: 567,
  gender: 'Male',
  aboutMe:
    "I've been gaming since I was 5 years old. Started with Nintendo and never looked back. Now I focus on competitive gaming and building an awesome gaming community. Let's connect and play together!",
  genres: ['FPS', 'MOBA', 'Battle Royale', 'RPG', 'Strategy'],
  platforms: ['PC', 'PlayStation 5', 'Nintendo Switch', 'Xbox Series X'],
  socialLinks: [
    {
      type: 'twitch',
      platform: 'Twitch',
      handle: '@gamerpro',
      url: 'https://twitch.tv/gamerpro',
    },
    {
      type: 'youtube',
      platform: 'YouTube',
      handle: '@gamerpro',
      url: 'https://youtube.com/@gamerpro',
    },
    {
      type: 'twitter',
      platform: 'X (Twitter)',
      handle: '@gamerpro',
      url: 'https://x.com/gamerpro',
    },
    {
      type: 'instagram',
      platform: 'Instagram',
      handle: '@gamerpro.gg',
      url: 'https://instagram.com/gamerpro.gg',
    },
    {
      type: 'discord',
      platform: 'Discord',
      handle: 'gamerpro#1234',
      url: 'https://discord.gg/gamerpro',
    },
  ],
}

export const dummyUsers = [
  {
    id: '1',
    username: 'gamerpro',
    displayName: 'Gamer Pro',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=gamerpro',
  },
  {
    id: '2',
    username: 'pixelqueen',
    displayName: 'Pixel Queen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=pixelqueen',
  },
  {
    id: '3',
    username: 'esports_legend',
    displayName: 'ESports Legend',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=esports',
  },
  {
    id: '4',
    username: 'speedrunner',
    displayName: 'Speed Runner',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=speedrunner',
  },
]

export const dummyPosts = [
  {
    id: '1',
    content:
      'Just hit Global Elite in CS2! The grind was real but we made it! 🎮🏆',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
    authorId: '1',
    authorName: 'Gamer Pro',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=gamerpro',
    timestamp: '2024-03-10T15:30:00',
    likes: 423,
    comments: 89,
    liked: false,
  },
  {
    id: '2',
    content: 'New streaming setup is finally complete! What do you think? 🎥✨',
    image: 'https://images.unsplash.com/photo-1603481546239-65e13c5d0f39?w=800',
    authorId: '1',
    authorName: 'Gamer Pro',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=gamerpro',
    timestamp: '2024-03-09T12:15:00',
    likes: 892,
    comments: 156,
    liked: true,
  },
]

export const dummyMedia = [
  {
    id: '1',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
    thumbnail:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
    caption: 'Victory screen! 🏆',
    likes: 423,
    comments: 89,
    createdAt: '2024-03-10T15:30:00',
  },
  {
    id: '2',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1603481546239-65e13c5d0f39?w=800',
    thumbnail:
      'https://images.unsplash.com/photo-1603481546239-65e13c5d0f39?w=800',
    caption: 'New streaming setup',
    likes: 892,
    comments: 156,
    createdAt: '2024-03-09T12:15:00',
  },
  {
    id: '3',
    type: 'video',
    url: 'https://example.com/video.mp4',
    thumbnail:
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800',
    caption: 'Best plays compilation',
    likes: 1203,
    comments: 234,
    createdAt: '2024-03-08T18:45:00',
  },
]

export const homePosts = [
  {
    id: '1',
    content:
      'Just hit Radiant in Valorant! The grind was worth it! 🎯🏆 \n\nThanks to everyone who supported me on this journey. Ready for more competitive matches!',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
    authorId: '1',
    authorName: 'Gamer Pro',
    authorUsername: 'gamerpro',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=gamerpro',
    timestamp: '2024-03-15T15:30:00',
    likes: 1423,
    comments: 89,
    liked: false,
  },
  {
    id: '2',
    content:
      'Finally completed my Minecraft mega build! 6 months of work - what do you think? 🏰✨',
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=800',
    authorId: '2',
    authorName: 'Pixel Queen',
    authorUsername: 'pixelqueen',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=pixelqueen',
    timestamp: '2024-03-15T14:15:00',
    likes: 2892,
    comments: 156,
    liked: true,
  },
  {
    id: '3',
    content:
      'Big news! Just signed with @TeamLiquid as their new Rocket League player! 🚀 Dreams do come true! #esports #RocketLeague',
    authorId: '3',
    authorName: 'ESports Legend',
    authorUsername: 'esports_legend',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=esports',
    timestamp: '2024-03-15T12:45:00',
    likes: 3245,
    comments: 267,
    liked: false,
  },
  {
    id: '4',
    content:
      "New streaming setup is ready! 🎮 \nRTX 4090\ni9-13900K\n64GB RAM\nDual Monitor Setup\n\nCan't wait to test this beast! What games should I play first?",
    image: 'https://images.unsplash.com/photo-1603481546239-65e13c5d0f39?w=800',
    authorId: '4',
    authorName: 'Speed Runner',
    authorUsername: 'speedrunner',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=speedrunner',
    timestamp: '2024-03-15T10:30:00',
    likes: 892,
    comments: 156,
    liked: false,
  },
  {
    id: '5',
    content:
      "Who's hyped for the new Elder Scrolls VI announcement? 🗡️ Been waiting for this forever! #ElderScrolls #Bethesda",
    authorId: '2',
    authorName: 'Pixel Queen',
    authorUsername: 'pixelqueen',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=pixelqueen',
    timestamp: '2024-03-15T09:15:00',
    likes: 1567,
    comments: 234,
    liked: false,
  },
  {
    id: '6',
    content:
      'New world record in Portal! 7:07.31 🏃‍♂️💨\nMonths of practice finally paid off. Full run video coming soon!',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800',
    authorId: '4',
    authorName: 'Speed Runner',
    authorUsername: 'speedrunner',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=speedrunner',
    timestamp: '2024-03-15T08:20:00',
    likes: 2103,
    comments: 178,
    liked: true,
  },
]
