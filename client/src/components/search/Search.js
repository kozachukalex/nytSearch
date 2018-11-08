import React from "react"
import { Jumbotron, Input, Button } from "reactstrap"
// import styled from 'styled-components'
import "./index.css"
import API from '../../utils/API'

export default class Search extends React.Component {
    state = {
        search: "",
        startYear: "",
        endYear: "",
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        API.nytSearch(this.state.search, this.state.startYear, this.state.endYear)
            .then(res => {
                const foundArticles = res.data.response.docs;
                const filteredArticles = []
                foundArticles.forEach(article => {
                    const id = article._id;
                    const title = article.headline.main
                    const summary = article.snippet
                    const author = article.byline ? article.byline.original : 'Author Not Found'
                    const link = article.web_url
                    filteredArticles.push({ id, title, summary, author, link })
                    this.props.handleArticles(filteredArticles)
                })
                console.log(filteredArticles)
            }
            ).catch(err => console.log(err))
    };



    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">New York Times Search</h1>
                    <p className="lead">Search for articles, view, and save them for another time!</p>
                    <hr className="my-2" />
                    <p> A MERN stack application.</p>
                    <form className="col-md-3 col-sm-12">
                        <h3>Keyword:</h3>
                        <Input type="text" onChange={this.handleChange('search')}></Input>
                        <h3> Start Year:</h3>
                        <Input type="text" onChange={this.handleChange('startYear')}></Input>
                        <h3> End Year:</h3>
                        <Input type="text" onChange={this.handleChange('startYear')}></Input>
                        <br></br>
                        <Button type="submit" color="success" onClick={this.handleSubmit}> Search </Button>
                    </form>
                </Jumbotron>
            </div>
        )
    }
}