export interface IPlaylist {
  data: {
    id: number;
    title: string;
    description: string;
    banner: string;
    logo: string;
    created_at: string;
    updated_at: string;
    playlist: ReferenceItem[];
  }[];
}
export interface ReferenceItem {
  id: number;
  dir_id: number;
  title: string;
  description: string;
  url: string;
  type: "image";
  created_at: string;
  updated_at: string;
}
