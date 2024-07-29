export const categories = [
    {
        id: 1,
        name: "Pizza",
        image: require("../images/categories/Pizza.png")
    },
    {
        id: 2,
        name: "Hamburger",
        image: require("../images/categories/hamburger.png")
    },
    {
        id: 3,
        name: "Cupcake",
        image: require("../images/categories/cupcake.png")
    },
    {
        id: 4,
        name: "Spagetti",
        image: require("../images/categories/spaghetti.png")
    },
    {
        id: 5,
        name: "Takeout-Box",
        image: require("../images/categories/takeout-box.png")
    },
    {
        id: 6,
        name: "Fish",
        image: require("../images/categories/Fish.png")
    },
    {
        id: 7,
        name: "Drinks",
        image: require("../images/categories/tropical-drink.png")
    }
];


export const featured = [
    {
        id: 1,
        title: "Hot and Spicy",
        description: "Soft and tender fried chicken",
        restaurants: [
            {
                id: 1,
                name: "Papa Johns",
                image: require("../images/resturants/resturant1.webp"),
                description: "Soft and tender fried chicken",
                lng: 35.9863693256,
                lat: -34.56456,
                address: "345 Second Street",
                stars: 5,
                reviews: "4.4k",
                categories: "Fast Food",
                dishes: [
                    {
                        id: 1,
                        name: "Pizza",
                        description: "Cheesy garlic Pizza",
                        price: 10,
                        image: require("../images/dishes/image1.jpeg")
                    },
                    {
                        id: 2,
                        name: "hamburger",
                        description: "Juicy beef hamburger with cheese",
                        price: 8,
                        image: require("../images/dishes/image2.jpeg")
                    },
                    {
                        id: 3,
                        name: "Spagetti",
                        description: "Fresh salmon sushi rolls",
                        price: 15,
                        image: require("../images/dishes/image3.jpeg")
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Italian Delights",
        description: "Authentic Italian cuisine",
        restaurants: [
            {
                id: 2,
                name: "Olive Garden",
                image: require("../images/resturants/resturant2.jpg"),
                description: "Classic Italian dishes",
                lng: 40.712776,
                lat: -74.005974,
                address: "123 Main Street",
                stars: 4.5,
                reviews: "3.8k",
                categories: "Italian",
                dishes: [
                    {
                        id: 1,
                        name: "Lasagna",
                        description: "Layered pasta with cheese",
                        price: 12,
                        image: require("../images/dishes/image4.jpeg")
                    },
                    {
                        id: 2,
                        name: "Spaghetti",
                        description: "Spaghetti with meatballs",
                        price: 11,
                        image: require("../images/dishes/image5.jpeg")
                    },
                    {
                        id: 3,
                        name: "Tiramisu",
                        description: "Coffee-flavored dessert",
                        price: 7,
                        image: require("../images/dishes/image6.jpeg")
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Sushi Feast",
        description: "Fresh and delicious sushi",
        restaurants: [
            {
                id: 3,
                name: "Sushi Samba",
                image: require("../images/resturants/resturant3.jpg"),
                description: "High-quality sushi rolls",
                lng: 34.052235,
                lat: -118.243683,
                address: "789 Sushi Lane",
                stars: 4.8,
                reviews: "2.5k",
                categories: "Sushi",
                dishes: [
                    {
                        id: 1,
                        name: "California Roll",
                        description: "Crab, avocado, and cucumber",
                        price: 9,
                        image: require("../images/dishes/image7.jpeg")
                    },
                    {
                        id: 2,
                        name: "Dragon Roll",
                        description: "Eel and avocado",
                        price: 14,
                        image: require("../images/dishes/image8.jpeg")
                    },
                    {
                        id: 3,
                        name: "Nigiri",
                        description: "Fish over rice",
                        price: 13,
                        image: require("../images/dishes/image9.jpeg")
                    }
                ]
            }
        ]
    }
];
