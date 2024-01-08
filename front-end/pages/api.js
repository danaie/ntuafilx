/* here we have the implementation of the fetchData fun */
export const fetchData = async (url, options = {}) => {
  const response = await fetch(`http://localhost:3000${url}`, options);
  const data = await response.json();
  return data;
};
