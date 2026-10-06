import avocadoToast from '../assets/dishes/avocado toast.jpg';
import cappuccino from '../assets/dishes/cappuccino.jpg';
import chickenSandwich from '../assets/dishes/chicken-sandwich.jpg';
import raspberryCheesecake from '../assets/dishes/raspberry-cheesecake.jpg';
import chocolateCroissant from '../assets/dishes/chocolate-croissant.jpg';


export const popularDishes = [
    {
        id: 1,
        image: cappuccino,
        name: 'Cappuccino',
        numberOfOrders: 250,
    },

    {
        id: 2,
        image: avocadoToast,
        name: 'Avocado Toast',
        numberOfOrders: 180,
    },

    {
        id: 3,
        image: chickenSandwich,
        name: 'Chicken Sandwich',
        numberOfOrders: 190,
    },

    {
        id: 4,
        image: raspberryCheesecake,
        name: 'Raspberry Cheesecake',
        numberOfOrders: 340,
    },

    {
        id: 5,
        image: chocolateCroissant,
        name: 'Chocolate Croissant',
        numberOfOrders: 200,
    },

    {
        id: 6,
        image: cappuccino,
        name: 'Cappuccino',
        numberOfOrders: 250,
    },

    {
        id: 7,
        image: avocadoToast,
        name: 'Avocado Toast',
        numberOfOrders: 180,
    },

    {
        id: 8,
        image: chickenSandwich,
        name: 'Chicken Sandwich',
        numberOfOrders: 190,
    },

    {
        id: 9,
        image: raspberryCheesecake,
        name: 'Raspberry Cheesecake',
        numberOfOrders: 340,
    },

    {
        id: 10,
        image: chocolateCroissant,
        name: 'Chocolate Croissant',
        numberOfOrders: 200,
    },
];

export const tables =[
    { id: 1, name: "Table 1", status: "Booked", initial: "QJ" },
    { id: 2, name: "Table 2", status: "Available", initial: "MK" },
    { id: 3, name: "Table 3", status: "Booked", initial: "TZ" },
    { id: 4, name: "Table 4", status: "Available", initial: "LP" },
    { id: 5, name: "Table 5", status: "Available", initial: "RW" },
    { id: 6, name: "Table 6", status: "Booked", initial: "BF" },
    { id: 7, name: "Table 7", status: "Available", initial: "NC" },
    { id: 8, name: "Table 8", status: "Booked", initial: "XD" },
    { id: 9, name: "Table 9", status: "Booked", initial: "GY" },
    { id: 10, name: "Table 10", status: "Available", initial: "VH" },
];

export const starterItem = [
    { id: 1, name: "Bruschetta", price: 8.50 },
    { id: 2, name: "Calamari", price: 12.00 },
    { id: 3, name: "Stuffed Mushrooms", price: 9.50 },
    { id: 4, name: "Spinach Artichoke Dip", price: 10.00 },
    { id: 5, name: "Shrimp Cocktail", price: 14.00 },
    { id: 6, name: "Mozzarella Sticks", price: 8.00 },
    { id: 7, name: "Garlic Parmesan Wings", price: 11.50 },
    { id: 8, name: "Crab Cakes", price: 15.00 },
];

export const entreeItem = [
    { id: 1, name: "Grilled Salmon", price: 24.00 },
    { id: 2, name: "Chicken Parmesan", price: 21.00 },
    { id: 3, name: "Beef Tenderloin", price: 32.00 },
    { id: 4, name: "Mushroom Risotto", price: 19.00 },
    { id: 5, name: "Lemon Herb Roast Chicken", price: 22.00 },
    { id: 6, name: "Shrimp Scampi", price: 25.00 },
    { id: 7, name: "Eggplant Parmesan", price: 18.00 },
    { id: 8, name: "Braised Short Ribs", price: 29.00 },
];

export const beverageItem = [
    { id: 1, name: "Sparkling Water", price: 3.00 },
    { id: 2, name: "Iced Tea", price: 3.50 },
    { id: 3, name: "Fresh Lemonade", price: 4.00 },
    { id: 4, name: "Cappuccino", price: 4.50 },
    { id: 5, name: "Espresso", price: 3.00 },
    { id: 6, name: "Ginger Beer", price: 4.50 },
    { id: 7, name: "Orange Juice", price: 4.00 },
    { id: 8, name: "Hot Chocolate", price: 4.50 },
];

export const saladItem = [
    { id: 1, name: "Classic Caesar Salad", price: 12.00 },
    { id: 2, name: "Greek Salad", price: 13.00 },
    { id: 3, name: "Caprese Salad", price: 14.00 },
    { id: 4, name: "Kale and Quinoa Salad", price: 15.00 },
    { id: 5, name: "Cobb Salad", price: 16.00 },
    { id: 6, name: "Spinach Strawberry Salad", price: 14.00 },
    { id: 7, name: "Roasted Beet Salad", price: 13.50 },
    { id: 8, name: "Arugula Pear Salad", price: 14.50 },
];

export const wineItem = [
    { id: 1, name: "House Cabernet Sauvignon", price: 12.00 },
    { id: 2, name: "Pinot Noir", price: 13.00 },
    { id: 3, name: "Merlot", price: 11.00 },
    { id: 4, name: "Chardonnay", price: 11.00 },
    { id: 5, name: "Sauvignon Blanc", price: 12.00 },
    { id: 6, name: "Pinot Grigio", price: 11.00 },
    { id: 7, name: "Rosé", price: 12.00 },
    { id: 8, name: "Prosecco", price: 13.00 },
];

export const sandwichItem = [
    { id: 1, name: "Classic Club Sandwich", price: 15.00 },
    { id: 2, name: "Grilled Chicken Panini", price: 16.00 },
    { id: 3, name: "Roast Beef and Cheddar", price: 17.00 },
    { id: 4, name: "Turkey Avocado Sandwich", price: 15.00 },
    { id: 5, name: "Caprese Panini", price: 14.00 },
    { id: 6, name: "Crispy Chicken Sandwich", price: 16.00 },
    { id: 7, name: "Pulled Pork Sandwich", price: 17.00 },
    { id: 8, name: "Grilled Vegetable Sandwich", price: 14.00 },
];

export const sideItem = [
    { id: 1, name: "French Fries", price: 5.00 },
    { id: 2, name: "Truffle Parmesan Fries", price: 7.00 },
    { id: 3, name: "Garlic Mashed Potatoes", price: 6.00 },
    { id: 4, name: "Seasonal Vegetables", price: 6.50 },
    { id: 5, name: "Mac and Cheese", price: 7.00 },
    { id: 6, name: "Onion Rings", price: 6.00 },
    { id: 7, name: "Side Caesar Salad", price: 7.00 },
    { id: 8, name: "Roasted Sweet Potatoes", price: 6.50 },
];

export const menus = [
    { id: 1, name: "Starters", color: "bg-[#E57373]", items: starterItem },
    { id: 2, name: "Entrees", color: "bg-[#BA68C8]", items: entreeItem },
    { id: 3, name: "Beverages", color: "bg-[#64B5F6]", items: beverageItem },
    { id: 4, name: "Salads", color: "bg-[#4DD0E1]", items: saladItem },
    { id: 5, name: "Wine", color: "bg-[#E57373]", items: wineItem },
    { id: 6, name: "Sandwiches", color: "bg-[#BA68C8]", items: sandwichItem },
    { id: 7, name: "Sides", color: "bg-[#64B5F6]", items: sideItem },
]