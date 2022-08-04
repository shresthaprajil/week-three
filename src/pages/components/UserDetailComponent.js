import { ControlledForm, UnControlledForm, UserCardComponent } from "../../components";

const UserDetailComponent = (props) => {

    return (
        <div className="user-detail">
            <UserCardComponent />
            {/* <UnControlledForm /> */}
            {/* <ControlledForm/> */}
        </div>
    )
}

export default UserDetailComponent