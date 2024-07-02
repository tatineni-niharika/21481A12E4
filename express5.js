import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test';

// Function to get products based on company, category, and price range
export const getProducts = async (companyName, categoryName, topN, minPrice, maxPrice) => {
  try {
    const response = await axios.get(`${BASE_URL}/companies/${companyName}/categories/${categoryName}/products`, {
      params: {
        top: topN,
        minPrice: minPrice,
        maxPrice: maxPrice
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
