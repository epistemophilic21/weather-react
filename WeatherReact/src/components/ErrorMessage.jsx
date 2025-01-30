function ErrorMessage({ backClick }) {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center absolute inset-0 z-10">
        <div className="text-white text-3xl font-medium">
          Unable to fetch weather data. Please check the location.
        </div>
        <button
          className="mt-6 w-40 h-14 bg-gradient-to-r from-blue-600 to-violet-600 font-poppins text-lg text-white rounded-lg tracking-widest"
          onClick={backClick}
        >
          Back
        </button>
      </div>
    </>
  );
}
export default ErrorMessage;
