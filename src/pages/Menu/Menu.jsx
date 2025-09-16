

const menuItems = [
  { id: 1, name: "Margherita Pizza", price: "$12", description: "Classic cheese and tomato pizza with fresh basil." },
  { id: 2, name: "Grilled Chicken", price: "$15", description: "Juicy grilled chicken served with roasted veggies." },
  { id: 3, name: "Pasta Alfredo", price: "$14", description: "Creamy pasta with parmesan and garlic sauce." },
  { id: 4, name: "Caesar Salad", price: "$10", description: "Crisp romaine lettuce with Caesar dressing & croutons." },
];

export default function FoodMenu() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🍴 Our Food Menu</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600 mt-1">{item.description}</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-lg font-bold text-green-600">{item.price}</span>
              <button className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600">
                Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

