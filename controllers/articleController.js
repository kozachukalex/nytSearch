const express = require('express');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio')
const Comment = require('../models/comment');
const Article = require('../models/article');
const router = express.Router()

router.get('/scrape/:topic', (req, res) => {
  scrapeData(req, res, req.params.topic);
});

router.post('/save', (req, res) => {
   //insert document
  Article.create(req.body)
    .then(dbArticle => res.send(dbArticle))
    .catch(err => { return res.json(err) });
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

function scrapeData(req, res, topic) {
  axios.get(`https://www.nytimes.com/section/${topic}`).then(response => {
    const $ = cheerio.load(response.data);
    const articles = []
    $('div.story-body').each(function(i, element) {
        const title = $(element).children('h2.headline').text().trim();
        const summary = $(element).children('p.summary').text().trim();
        const author = $(element).children('p.byline').children('span.author').text().trim();
        const link = $(element).siblings('.media').children('a').attr('href');
        if(title && summary) {
          articles.push({ title, summary, author, link });
        }
    });
    res.json(articles);
  });
}

module.exports = router;