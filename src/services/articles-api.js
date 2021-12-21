import axios from 'axios';

const apiKey = '217256e7f09b428ba8e53a868cf87d1a';

axios.defaults.baseURL = 'https://newsapi.org/v2/everything';

function fetchArticles(searchQuery, page) {
  return axios
    .get(`?q=${searchQuery}&apiKey=${apiKey}&pageSize=6&page=${page}`)
    .then(response => response.data);
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchArticles };
