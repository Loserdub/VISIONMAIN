export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  imageUrl: string;
  color: string;
  spotifyUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}