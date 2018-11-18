import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem'
import { auto } from 'async';
const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        customers {
            id
            name
            email
            age
        }
    }
`;
export class Launches extends Component {
    render() {
        return (
            <div className="mx-5">
                <h1>Launches test</h1>
                <Query query={LAUNCHES_QUERY}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h3>Loading....</h3>;
                            if (error) console.log(error);

                            return <Fragment>
                                {
                                    data.customers.map(customer =>
                                        <LaunchItem key={customer.id} customer={customer}></LaunchItem>
                                    )
                                }
                            </Fragment>;
                        }
                    }
                </Query>
            </div>
        )
    }
}

export default Launches
