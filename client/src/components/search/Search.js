import React from "react"
import {Jumbotron, Input, InputGroup, Button} from "reactstrap"
import styled from 'styled-components'
import "./index.css"

const StyledInputGroup = styled(InputGroup)`
    &&&&&&{
        margin: 0 auto;
    }
`

export default class Search extends React.Component {

    state = {
        search: ""
    }
    
    render() {
        return (
            <div>
            <Jumbotron>
                <h1 className="display-3">New York Times Search</h1>
                <p className="lead">Search for articles, view, and save them for another time!</p>
                <hr className="my-2" />
                <p> A MERN stack application.</p>
                <StyledInputGroup className="col-md-6 col-sm-12">
                    <Input type="text"></Input><Button color="primary"> Search </Button>
                </StyledInputGroup>
            </Jumbotron>
        </div>
        )
    }
}