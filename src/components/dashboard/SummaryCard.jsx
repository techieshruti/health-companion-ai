function SummaryCard({icon, title, value }) {
  return (
    <div className="bg-orange-100 rounded-xl shadow-md p-6 text-center transition duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
      <span className="text-4xl">{icon}</span>
      <h3 className="text-gray-500 text-sm">{title}</h3>

      <p className="text-3xl font-bold text-blue-700 mt-2">
        {value}
      </p>
    </div>
  );
}

export default SummaryCard;