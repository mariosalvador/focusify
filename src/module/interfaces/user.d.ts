

interface User {
  id: string;
  email: string;
  name: string;
  password: string
  phone_number: string | null;
  avatarUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface UserToCreate extends Omit<User, "id" | "avatarUrl" | "createdAt" | "updatedAt"> {
  name: string;
  email: string;
  password: string;
  phone_number: string | null;
}

