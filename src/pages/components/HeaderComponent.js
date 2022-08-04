const HeaderComponent = (props) => {
    console.log(props)
    return (
        <div className="header">
            <img src={props.userData.image} alt="Profile Pic" className="profile-img"/>
        </div>
    )
}

export default HeaderComponent