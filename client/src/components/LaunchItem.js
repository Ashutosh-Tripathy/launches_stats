import React from 'react'
import { Link } from 'react-router-dom';

export default function LaunchItem({ customer: { id, name, age, email } }) {
    return (
        <div className="card card-body my-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>name: {name}</h4>
                    <p>age: {age}</p>
                </div>
                <div className="col-md-3">
                    <Link to={`/launch/${id}`} className="btn btn-secondary">Launch Details</Link>
                </div>
            </div>
        </div>
    )
}
