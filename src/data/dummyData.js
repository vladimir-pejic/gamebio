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
  {
    id: '3',
    content:
      "Who's up for some Valorant matches tonight? Building a squad for ranked! 🎯",
    authorId: '1',
    authorName: 'Gamer Pro',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=gamerpro',
    timestamp: '2024-03-08T18:45:00',
    likes: 245,
    comments: 67,
    liked: false,
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
