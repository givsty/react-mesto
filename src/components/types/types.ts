export interface Items {
  createdAt: string;
  likes: Likes[];
  link: string;
  name: string;
  owner: Likes[];
  _id: string;
}

export interface Likes {
  about: string;
  avatar: string;
  cohort: string;
  name: string;
  _id: string;
}

export interface PersonData {
  about: string;
  avatar: string;
  cohort: string;
  name: string;
  _id: string;
}

export type apiConfig = {
  baseUrl: string;
  headers: apiHeaders;
};

type apiHeaders = {
  authorization: string;
  "Content-Type": "application/json";
};

export type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
