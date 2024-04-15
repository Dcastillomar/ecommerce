export const products = [
    {
      id: "64a654593e91b8e73a351e9b",
      name: "Cat Collar",
      description: "Short description",
      price: 12.99,
      brand: "Generic",
      category: "Cats",
      inStock: true,
      images: [
        {
          color: "Red",
          colorCode: "#FFFFFF",
          image:
          '/pexels-pixabay-45170.jpg'
        },
        {
          color: "Blue",
          colorCode: "#808080",
          image:
          '/pexels-pixabay-45170.jpg'
        },
      ],
      reviews: [],
    },
    {
      id: "64a4ebe300900d44bb50628a",
      name: "Dog Collar",
      description:
        "Dogs Product Description",
      price: 102.99,
      brand: "Generic",
      category: "Dogs",
      inStock: true,
      images: [
        {
          color: "Black",
          colorCode: "#000000",
          image:
          '/pexels-chevanon-photography-1108099.jpg'
        },
      ],
      reviews: [
        {
          id: "64a65a6158b470c6e06959ee",
          userId: "6475af156bad4917456e6e1e",
          productId: "64a4ebe300900d44bb50628a",
          rating: 5,
          comment: "good",
          createdDate: "2023-07-06T06:08:33.067Z",
          user: {
            id: "6475af156bad4917456e6e1e",
            name: "Charles",
            email: "example@gmail.com",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
            hashedPassword: null,
            createdAt: "2023-05-30T08:08:53.979Z",
            updatedAt: "2023-05-30T08:08:53.979Z",
            role: "ADMIN",
          },
        },
      ],
    },
    {
      id: "648437b38c44d52b9542e340",
      name: "Reptile Food",
      description:
        'Reptile Food Description',
      price: 20,
      brand: "Nulo",
      category: "Reptiles",
      inStock: true,
      images: [
        {
          color: "Gnats",
          colorCode: "#000000",
          image: '/pexels-pixabay-407037.jpg'
        },
        {
          color: "Worms",
          colorCode: " #0000FF",
          image:
          '/pexels-pixabay-45170.jpg'
        },
        {
          color: "Beetle",
          colorCode: "#FF0000",
          image:
          '/pexels-pixabay-45170.jpg'
        },
      ],
      reviews: [
        {
          id: "6499b4887402b0efd394d8f3",
          userId: "6499b184b0e9a8c8709821d3",
          productId: "648437b38c44d52b9542e340",
          rating: 4,
          comment:
            "good enough. I like the camera and casing. the delivery was fast too.",
          createdDate: "2023-06-26T15:53:44.483Z",
          user: {
            id: "6499b184b0e9a8c8709821d3",
            name: "Chaoo",
            email: "example1@gmail.com",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
            hashedPassword: null,
            createdAt: "2023-06-26T15:40:52.558Z",
            updatedAt: "2023-06-26T15:40:52.558Z",
            role: "USER",
          },
        },
        {
          id: "6499a110efe4e4de451c7edc",
          userId: "6475af156bad4917456e6e1e",
          productId: "648437b38c44d52b9542e340",
          rating: 5,
          comment: "I really liked it!!",
          createdDate: "2023-06-26T14:30:40.998Z",
          user: {
            id: "6475af156bad4917456e6e1e",
            name: "Charles",
            email: "example@gmail.com",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
            hashedPassword: null,
            createdAt: "2023-05-30T08:08:53.979Z",
            updatedAt: "2023-05-30T08:08:53.979Z",
            role: "ADMIN",
          },
        },
      ],
    },
    {
      id: "64a4e9e77e7299078334019f",
      name: "Dog Toy",
      description:
        "Dog Toy Description",
      price: 7.99,
      brand: "Kong",
      category: "Dogs",
      inStock: true,
      images: [
        {
          color: "Purple",
          colorCode: " #383838",
          image:
            "/pexels-chevanon-photography-1108099.jpg",
        },
      ],
      reviews: [],
    },
    {
      id: "649d775128b6744f0f497040",
      name: 'Cat Tree',
      description:
        'Cat Tree Description',
      price: 32.99,
      brand: "Wevu",
      category: "Cats",
      inStock: true,
      images: [
        {
          color: "Black",
          colorCode: "#000000",
          image:
            "/pexels-pixabay-45170.jpg",
        },
        {
          color: "Tan",
          colorCode: "#C0C0C0",
          image:
            "/pexels-pixabay-45170.jpg",
        },
      ],
      reviews: [],
    },
  ];