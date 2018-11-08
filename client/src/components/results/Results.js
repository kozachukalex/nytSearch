import React from "react"
import "./index.css"
import API from '../../utils/API'

// API.saveArticle call

export default (props) => (
    <ul className="container">
        {props.currentArticles.map(article => (
            <div className="article" key={article.id}>
                <h2> {article.title} </h2>
                <h4> {article.author} </h4>
                <p className="articleLabels"> {article.summary} </p>
                <a href={article.link}> {article.link} </a>
                <br></br>
                <button> Save Article </button>
            </div>
        ))}
    </ul>
)