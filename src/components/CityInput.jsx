function CityInput({ city, setCity, onFetch, loading }) {
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md">
      <input
        type="text"
        placeholder="نام شهر را وارد کنید"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onFetch}
        disabled={loading || !city.trim()}
        className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
      >
        {loading ? "در حال دریافت..." : "نمایش وضعیت"}
      </button>
    </div>
  );
}

export default CityInput;
