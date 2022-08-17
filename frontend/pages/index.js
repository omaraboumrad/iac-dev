import { useEffect, useState } from 'react';

export default function Home() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const result = await fetch('/api/users/')
            const data = await result.json()
            setUsers(data)
        }

        getUsers()
        console.log(users)
    }, []);


    return (
        <>
        <p> Hello Guys</p>
        { users.map((user, idx) => <li key={idx}>{user.username}</li>) }
        </>
    )
}
