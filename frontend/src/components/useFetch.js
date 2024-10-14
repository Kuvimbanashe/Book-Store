import { useState, useEffect } from 'react';

const useFetch = (initialUrl) => {
 
  const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	

    useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(initialUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        console.log("result", result);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError('An error occurred while fetching data : ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  	}, []);

  

  return { data, loading, error};
};

export default useFetch;