function InfoCard({ title, content }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-700 leading-relaxed">
        {content}
      </p>
    </div>
  );
}

export default InfoCard;