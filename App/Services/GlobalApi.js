import { create } from "apisauce";


const api = create({
    baseURL: 'https://newsapi.org/v2',
  })
const apiKey = '?sources=bbc-news&apiKey=1033e4cd1d724b57b7752cc0811d455f';

const getTopHeadline = api.get('/top-headlines'+apiKey);
const getByCategory = (category) => api.get('/everything?q='+category+'&apiKey=1033e4cd1d724b57b7752cc0811d455f')


export default {
    getTopHeadline,
    getByCategory
}





  