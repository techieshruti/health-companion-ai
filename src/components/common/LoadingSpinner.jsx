function LoadingSpinner({ message }) {
  return (
    <div className="text-center mt-8">
      <div className="animate-spin h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>

      <p className="mt-4 text-gray-500">
        {message}
      </p>
    </div>
  );
}

export default LoadingSpinner;