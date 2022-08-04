import { useContext } from 'react'
import UserContext from '../../context/UserContext'
import './style.css'

const UserCardComponent = () => {
    const {user, setRootState} = useContext(UserContext)

    console.log(user);
    return (
        <div className={'home-card'}>
            <img src={user.image} alt="Profile Pic" className="profile-img"/>
            <div className="user-details">
                <span>Name: {user.name}</span>
                <span>Email: {user.email}</span>
                <span>Age: {user.age}</span>
            </div>

            <button onClick={() => setRootState({
                full_name: "Shrestha Prajil", dob: "1990-01-01", email: 'prajil.shrestha@islingtoncollege.edu.np',
                profile_pic: 'https://picsum.photos/id/237/200/300'
            })}>Update
            </button>
        </div>
    )
}

export default UserCardComponent