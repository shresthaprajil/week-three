import './App.css';
import {useState} from "react";
import {DashboardPage} from "./pages";
import UserContext from "./context/UserContext";

function App() {
    const [rootState, setRootState] = useState({
        name: 'Prajil Shrestha',
        age: 24,
        email: 'praji.shrestha@islingtoncollee.edu.np',
        image: 'https://picsum.photos/id/237/200/300'
    })

    return (
        <div className="App">
            <UserContext.Provider value={{user: rootState, setRootState}}>
                <DashboardPage userData={rootState} setRootState={setRootState}/>
            </UserContext.Provider>
        </div>
    );
}

export default App;
