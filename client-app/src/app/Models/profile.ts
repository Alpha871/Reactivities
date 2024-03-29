import { User } from "./user";

export interface IProfile {
  username: string;
  displayName: string;
  image?: string;
  bio?: string;
  followersCount: number;
  followingsCount: number;
  following: boolean;
  photos?: Photo[];
}

export class Profile implements IProfile {
  constructor(user: User) {
    this.username = user.username;
    this.displayName = user.displayName;
    this.image = user.image;
  }

  username: string;
  displayName: string;
  image?: string;
  bio?: string;
  photos?: Photo[];
  followersCount = 0;
  followingsCount = 0;
  following = false;
}

export interface Photo {
  id: string;
  url: string;
  isMain: boolean;
}
