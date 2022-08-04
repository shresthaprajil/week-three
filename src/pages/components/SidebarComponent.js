const SidebarComponent = (props) => {
    return (
        <div className="sidebar">
            <div>{props.userData.name}</div>
        </div>
    )
}

export default SidebarComponent