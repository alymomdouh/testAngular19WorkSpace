export interface ICourse {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  category: CategoryType;
  lessonsCount: number;
  imageUrl: string;
  sequenceNumber: number;
  lessons?: any[]
}

export enum CategoryType {
  beginners = 1,
  intermediate = 2,
  advanced = 3,
  other
}

