import axios from "axios";

export default {
  nytSearch: (keyword, begin_date, end_date, ) => {
    const API_KEY = "110f0771d0db46a5b656e3510c3cc337";
    let url =  
      "https://api.nytimes.com/svc/search/v2/articlesearch.json" +
      "?q=" + keyword +
      "&api-key=" + API_KEY
     
    if(begin_date) {
      url = url + "&begin_date=" + begin_date + "0101"
    } 
    if(end_date) {
      url = url + "&end_date=" + end_date + "0101"
    }
    return axios.get(url);
  },
  // Saves an article to the database
  saveArticle(articleData) {
    console.log(articleData)
    return axios.post("/api/articles", articleData);
  },
  // Gets all articles
  getArticles() {
    return axios.get("/api/articles");
  },
  // Deletes article with the given id
  deleteArticle(id) {
    return axios.delete(`/api/articles/${id}`);
  }
};