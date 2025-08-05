function CityInput({ city, setCity, onFetch, loading }) {
  return (
    <div>
      <input
        type="text"
        placeholder="نام شهر را وارد کنید"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={onFetch} disabled={loading || !city.trim()}>
        {loading ? "در حال دریافت..." : "نمایش وضعیت"}
      </button>
    </div>
  );
}

export default CityInput;
