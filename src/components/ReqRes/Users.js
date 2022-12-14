import {useState, useEffect} from 'react';
import UserCard from './UserCard';

export function Users(){
    const [users, setUsers] = useState([]);
    const [usersPage, setUsersPage] = useState(1);
    const USER_PAGE_LIMIT = 2;

    useEffect(() => {
        fetchUsers(usersPage);
    }, [usersPage]);

    async function fetchUsers(page){
        const result = await fetch(`https://reqres.in/api/users?page=${page}`);
        const _users = await result.json();
        setUsers(_users.data);
    }

    return (
        <>
            <h1>Users</h1>
            <div className='container'>
                <h3>List</h3>
                <div className='row'>
                    {users.map(user => {
                        return <UserCard user={user} key={user.id}/>
                    })}
                </div>

                <button onClick={() => setUsersPage(usersPage-1)} disabled={usersPage===1} className='btn btn-outline-dark'>Previous</button>
                <button onClick={() => setUsersPage(usersPage+1)} disabled={usersPage===USER_PAGE_LIMIT} className='btn btn-outline-dark'>Next</button>
            </div>
        </>
    );

}