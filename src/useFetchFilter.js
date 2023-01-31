const useFetchFilter = (ur, bestSellers) => {
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error("Sorry, could not fetch the data for that resource.");
      }
      const products = response.json();
      return products;
    })
    .then((products) => {
      if (bestSellers) {
        const bests = products.filter((product) => product.bestSeller === true);
        console.log(bests, "<<<<best");
        setFilteredProducts(bests);
      } else {
        const ess = products.filter((product) => product.essentialOil === true);
        setFilteredProducts(ess);
      }
    })
    .catch((err) => {
      if (err.name === "AbortError") {
        console.log("fetch aborted");
      } else {
        setError(err.message);
      }
    })
    .then(() => {
      setLoading(false);
    });

  return { filteredProducts, loading, error };
};

export default useFetchFilter;
