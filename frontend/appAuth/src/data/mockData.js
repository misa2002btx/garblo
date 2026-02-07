import modelImg from "../assets/1000178084.jpg";
import image1 from "../assets/1000178085.jpg";
import image1v from "../assets/4548863c-2b69-485b-be58-57118a5cfbba.png";
import image2 from "../assets/20260103-134919.jpg";
import image2v from "../assets/998e9369-0287-440d-b5aa-82057dc1a848.png";
export const mockWardrobe = [
  {
    id: 1,
    name: "Suit",
    thumbnail: image1, // Ảnh thumb đẹp
    // Ảnh overlay phải là PNG nền trong suốt.
    // Trong thực tế đây là ảnh output từ Azure Tool 1.
    image: image1v,
    price: "$120",
  },
  {
    id: 2,
    name: "Hoodie",
    thumbnail: image2,
    image: image2v,
    price: "$350",
  },
  // {
  //   id: 3,
  //   name: "Streetwear Hoodie",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&q=80",
  //   image:
  //     "https://purepng.com/public/uploads/large/purepng.com-hoodie-chothinghoodiehoodie-clotheshooded-sweatshirthooded-jumper-1421526362545d6z1n.png",
  //   price: "$89",
  // },
];

export const modelImage = modelImg;
