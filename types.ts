export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  imageUrl: string;
  color: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
