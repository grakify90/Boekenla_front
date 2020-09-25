export const testUser = {
  email: "test@test.com",
  password: "test1234",
};

export const genresData = [
  "fiction",
  "novel",
  "short stories",
  "fantasy",
  "horror",
  "history",
  "non-fiction",
  "art",
  "photography",
  "philosophy",
  "psychology",
];

export const booksData = [
  {
    id: 1,
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: ["fiction", "novel", "history"],
    price: 8,
    allowBid: false,
    description: "Still in a very nice condition!",
    imageUrl:
      "https://img.theculturetrip.com/1024x574/smart/wp-content/uploads/2018/01/2769211423_33999bc152_b.jpg",
  },
  {
    id: 2,
    title: "Collected Stories",
    author: "Roald Dahl",
    genre: ["fiction", "short stories", "fantasy"],
    price: 12,
    allowBid: true,
    description: "The classic short stories collected.",
    imageUrl: "https://media.s-bol.com/JJ6qxJj6vDD/746x1200.jpg",
  },
  {
    id: 3,
    title: "In the Miso Soup",
    author: "Ryu Murakami",
    genre: ["fiction", "novel", "horror"],
    price: 4,
    allowBid: false,
    description: "Has some damages, but still well readable :)",
    imageUrl: "https://akhilnanda.files.wordpress.com/2019/04/img_0950-1.jpg",
  },
  {
    id: 4,
    title: "The Goldfinch",
    author: "Donna Tartt",
    genre: ["fiction", "novel"],
    price: 6,
    allowBid: true,
    description: "Wonderful book! Does not fit through the mailbox",
    imageUrl:
      "https://di2ponv0v5otw.cloudfront.net/posts/2019/08/09/5d4df642afade81128884c87/m_5d4df654d948a15af480912c.jpg",
  },
  {
    id: 5,
    title: "The Eyes, the Ears",
    author: "Rinko Kawauchi",
    genre: ["non-fiction", "art", "photography"],
    price: 15,
    allowBid: false,
    description: "Completely new!",
    imageUrl:
      "https://d1m232vsyej29j.cloudfront.net/i/c7/CctTNQ67d_nADV6F.jpeg",
  },
  {
    id: 6,
    title: "The Art of Loving",
    author: "Erich Fromm",
    genre: ["non-fiction", "philosophy", "psychology"],
    price: 5,
    allowBid: true,
    description: "Pretty old but still in good condition.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5e/The_Art_of_Loving.jpg",
  },
  {
    id: 7,
    title: "Kitchen",
    author: "Banana Yoshimoto",
    genre: ["fiction", "novel"],
    price: 21,
    allowBid: true,
    description: "Warning: in Japanese! Original edition from 1988",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/68/KitchenNovel.jpg",
  },
];
