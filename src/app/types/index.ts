import {User}  from '@prisma/client'

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
  image: string | null | undefined;
  id: string;
  name?: string | null; 
  email: string | null;
  hashedPassword: string | null;
  favoriteIds: string[];
  hasNotification: boolean | null;
  
};

