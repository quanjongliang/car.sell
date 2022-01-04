import { Review } from "@/interfaces";

export const RatingData: {
  title: string;
  reviews: Review[];
  button: string;
  image: string;
  background: string;
} = {
  title: "What our customers said",
  reviews: [
    { user: "Quill", rating: 4, content: "Ok, Not good" },
    { user: "Tuyen", rating: 5, content: "Ok, Not good" },
    { user: "Theon", rating: 3, content: "Ok, Not good" },
    { user: "Tris", rating: 5, content: "Ok, Not good" },
    { user: "Liang", rating: 4, content: "Ok, Not good" },
    { user: "Tank", rating: 5, content: "Ok, Not good" },
    { user: "Mi", rating: 2, content: "Ok, Not good" },
    { user: "Celine", rating: 4, content: "Ok, Not good" },
    { user: "Dao", rating: 1, content: "Ok, Not good" },
    { user: "Scss", rating: 3, content: "Ok, Not good" },
  ],
  image:
    "https://images.kavak.services/mx/assets/images/home/webp/home-testimoniales-placeholder.webp",
  button: "See your customer stories",
  background:
    "https://images.kavak.services/mx/assets/images/home/svg/bacgkound-dots-1-all.svg",
};
