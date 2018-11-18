import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const LAUNCH_QUERY = gql`
    query LauchQuery($id: String!){
        customer(id: $id) {
            name
            age
            email
        }
    }
`;
export class Launch extends Component {
    render() {
        let { id } = this.props.match.params;

        return (
            <div>
                <h1>Launch</h1>
                <Query query={LAUNCH_QUERY} variables={{ id }}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loading....</h4>
                            if (error) return console.log(error)
                            const { name, age, email } = data.customer;
                            return <div>
                                <h1 className="display-4 my3">name: {name}</h1>
                                <h4 className="mb-3">age: {age}</h4>
                                <h4 className="mb-3">name: {email}</h4>
                                <hr />
                                <Link to="/" className="btn btn-secondary">Back</Link>
                            </div>
                        }
                    }
                </Query>
            </div>
        )
    }
}

export default Launch
