import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://books-api7.p.rapidapi.com/books/get/random/',
  headers: {
    'X-RapidAPI-Key': '82fc9f2f22mshf9a22188b93b0d3p101e46jsn7debfaf7ac75',
    'X-RapidAPI-Host': 'books-api7.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}