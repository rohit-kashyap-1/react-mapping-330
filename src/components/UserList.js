import React, { useEffect, useState } from 'react'

export default function UserList() {
    let [users, setUsers] = useState([])
    useEffect(function () {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(function(data){
            setUsers(data)
        })
    }, [])
    return (
        <div>
            <table className='table table-bordered table-hover table-stripped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>{(users.length!=0)?users.map(function(item){
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.address.street + ', '+item.address.suite}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                            <td>{item.company.name}</td>
                        </tr>
                    }):''}</tbody>
                    <tfoot></tfoot>

            </table>
        </div>
    )
}
