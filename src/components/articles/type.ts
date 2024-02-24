export interface Article {
  id: string;
  url: string;
  title: string;
  featuredImage: {
    url: string;
    width: number;
    height: number;
  };
  description: string;
  publishedAt: Date;
  readingTime: string;
  author: {
    name: string;
    avatar: string;
  };
}