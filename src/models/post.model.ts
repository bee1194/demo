import { IMember } from "@/models/member.model";

export interface IPost {
  id: number;
  title: string;
  slug: string;
  image: string;
  content: string;
  author: IMember;
}
