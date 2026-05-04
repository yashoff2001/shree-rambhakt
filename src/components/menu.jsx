import { forwardRef } from 'react';

const Menu = forwardRef((props, ref) => {

    const menuDetails = [
      {
        id: 1,
        title: "Starters",
        items: [
          {
            id: 101,
            name: "Assorted Bruschetta",
            description:
              "Classic tomato, mushroom, and olive tapenade variations",
            price: 350,
          },
          {
            id: 102,
            name: "Paneer Tikka",
            description: "Marinated cottage cheese with tandoori spices",
            price: 450,
          },
          {
            id: 103,
            name: "Spinach & Cheese Dumplings",
            description: "Served with a light soy dipping sauce",
            price: 390,
          },
        ],
      },
      {
        id: 2,
        title: "Main Course",
        items: [
          {
            id: 201,
            name: "Chole Masala",
            description:
              "Hearty chickpeas simmered in a spiced onion-tomato gravy",
            price: 550,
          },
          {
            id: 202,
            name: "Paneer Butter Masala",
            description:
              "Creamy cottage cheese cubes in a rich tomato-butter sauce",
            price: 490,
          },
          {
            id: 203,
            name: "Rajma Masala",
            description:
              "Slow-cooked kidney beans in a flavorful North Indian curry",
            price: 650,
          },
        ],
      },
      {
        id: 3,
        title: "Desserts",
        items: [
          {
            id: 301,
            name: "Gulab Jamun",
            description: "Golden fried milk dumplings in rose syrup",
            price: 220,
          },
          {
            id: 302,
            name: "Chocolate Truffle Cake",
            description: "Rich chocolate cake with ganache frosting",
            price: 350,
          },
          {
            id: 303,
            name: "Fruit Sorbet",
            description: "Seasonal fruit sorbet assortment",
            price: 250,
          },
        ],
      },
    ];

    return (
      <div className="container mx-auto" ref={ref} id="menuSection">
        <div className="py-10 lg:py-20 px-5">
          {/* Restaurant Main Section */}
          <div className="flex flex-col items-center text-center">
            <p className="px-4 py-2 rounded-full w-[fit-content] bg-red-200/50 text-red-500">
              Our Menu
            </p>
            <h2 className="p-2 text-5xl font-semibold  mb-4">
              Exquisite Culinary Delights
            </h2>
            <p className="text-gray-400 mb-6">
              Our menu features a fusion of traditional and contemporary
              cuisines, prepared with the finest ingredients by our expert
              chefs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {menuDetails.map((section) => (
              <div
                key={section.id}
                className="shadow-lg border border-gray-400 rounded-2xl"
              >
                {/* Header */}
                <div className="p-5 rounded-t-2xl bg-red-500 text-white text-[20px] font-semibold">
                  {section.title}
                </div>
                {/* Items */}
                <div className="px-6 py-4">
                  {section.items.map((item) => (
                    <div
                      key={item.id}
                      className="py-4 flex justify-between items-start border-b border-gray-300"
                    >
                      <div>
                        <p className="text-lg font-semibold text-gray-800 font-playfair">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                      <p className="text-red-500 font-semibold">
                        ₹{item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
});

export default Menu;