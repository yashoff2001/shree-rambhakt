import { forwardRef } from 'react';

const Menu = forwardRef((props, ref) => {

    const menuDetails = [
        {
            id : 1,
            title : "Starters",
            cardItems : [
                "Assorted Bruschetta",
                "Paneer Tikka",
                "Spinach & Cheese Durnplings"
            ],
            itemsRecipe : [
                "Classic tomato, mushroom, and olive tapenade variations",
                "Marinated cottage cheese with tandoori spices",
                "Served with a light soy dipping sauce"
            ],
            price : [
                350,
                450,
                390
            ]
        },
        {
            id : 2,
            title : "Main Course",
            cardItems : [
                "Chole Masala",
                "Paneer Butter Masala",
                "Rajma Masala"
            ],
            itemsRecipe : [
                "Hearty chickpeas simmered in a spiced onion-tomato gravy",
                "Creamy cottage cheese cubes in a rich tomato-butter sauce",
                "Slow-cooked kidney beans in a flavorful North Indian curry"
            ],
            price : [
                550,
                490,
                650
            ]
        },
        {
            id : 3,
            title : "Desserts",
            cardItems : [
                "Gulab Jamun",
                "Chocolate Truffle Cake",
                "Fruit Sorbet"
            ],
            itemsRecipe : [
                "Golden fried milk dumplings in rose syrup",
                "Rich chocolate cake with ganache frosting",
                "Seasonal fruit sorbet assortment"
            ],
            price : [
                220,
                350,
                250
            ]
        },
    ]

    return (
        <div className="container mx-auto" ref={ref} id='menuSection'>
            <div className="py-10 lg:py-20 px-5">
                {/* Restaurant Main Section */}
                <div className="flex flex-col items-center text-center">
                <p className="px-4 py-2 rounded-full w-[fit-content] bg-red-200/30 text-red-500">Our Menu</p>
                <h2 className="p-2 text-5xl font-semibold  mb-6">Exquisite Culinary Delights</h2>
                <p className="text-gray-400 mb-6">Our menu features a fusion of traditional and contemporary cuisines, prepared with the finest ingredients by our expert chefs.</p>
                </div>
                <div className="grid grid-cols-1 :grid-cols-2 lg:grid-cols-3 gap-10 ">
                    {menuDetails.map(section => (
                        <div key={section.id} className="shadow-lg border border-gray-400 rounded-2xl">
                            {/* Header */}
                            <div className="p-5 rounded-t-2xl bg-red-500 text-white text-[20px] font-semibold">
                                {section.title}
                            </div>
                            {/* Items */}
                            <div className="px-6 py-4">
                                {section.cardItems.map((item, index) => (
                                    <div key={index} className="py-4 flex justify-between items-start border-b border-gray-300">
                                        <div>
                                            <p className="text-lg font-semibold text-gray-800 font-playfair">{item}</p>
                                            <p className="text-sm text-gray-500">{section.itemsRecipe[index]}</p>
                                        </div>
                                        <p className="text-red-500 font-semibold">₹{section.price[index]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
          </div>
        </div>
    )
});

export default Menu;