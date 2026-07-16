function LoadingSpinner() {
  return (
    <div className="text-center mt-8">
      <div className="animate-spin h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>

      <p className="mt-4 text-gray-600">
        Analyzing your health report...
      </p>
    </div>
  );
}

export default LoadingSpinner;