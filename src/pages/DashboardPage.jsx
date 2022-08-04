import {FooterComponent, HeaderComponent, SidebarComponent, UserDetailComponent} from "./components";

const DashboardPage = (props) => {

    return (
        <div className="dashboard-wrapper">
            <HeaderComponent userData={props.userData}/>
            <div className="body-wrapper">
                <SidebarComponent userData={props.userData}/>
                <div className="body-main">
                    <UserDetailComponent userData={props.userData} setRootState={props.setRootState}/>
                </div>
            </div>
            <FooterComponent userData={props.userData}/>
        </div>
    )
}

export default DashboardPage