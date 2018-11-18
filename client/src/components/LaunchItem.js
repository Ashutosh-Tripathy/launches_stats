import React from 'react'

export default function LaunchItem({ customer: { id, name, age, email } }) {
    return (
        <div className="card card-body my-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>name: {name}</h4>
                    <p>age: {age}</p>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-secondary">Launch Details</button>
                </div>
            </div>
    </div>
    )
}
