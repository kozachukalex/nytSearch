import React from "react"
import "./index.css"

export default (props) => (
    <ul className="container">
        {props.currentArticles.map(article => (
            <div className="article" key={article.id}>
                <h2> {article.title} </h2>
                <h4> {article.author} </h4>
                <p className="articleLabels"> {article.summary} </p>
                <a href={article.link}> {article.link} </a>
                <button> Save Article </button>
            </div>
        ))}
    </ul>

)