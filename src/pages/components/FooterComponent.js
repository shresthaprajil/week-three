const FooterComponent = (props) => {
    return (
        <div className="footer">
            <span style={{fontSize: '8px'}}>Copyright {props.userData.email}</span>
        </div>
    )
}

export default FooterComponent