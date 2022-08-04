import {useEffect, useState} from "react";

const ControlledForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        age: null,
        email: ''
    })
    const [error, setError] = useState({email: false})

    const handleSubmitButton = (e) => {
        e.preventDefault()
        alert(formState.name);
    }

    const handleChange = (e) => {
        setFormState({...formState, [e.target.id]: e.target.value})
        if (e.target.id === 'email') {
            setError({email: true})
        }
    }

    useEffect(() => {
        console.log(formState)
    }, [formState])

    return (
        <form onSubmit={handleSubmitButton} className="form-elem">
            <input type="text" id={"name"} placeholder="Name" onChange={handleChange}/>
            <input type="number" id={"age"} placeholder="Age" onChange={handleChange}/>
            <input type="email" id={"email"} placeholder="Email" onChange={handleChange}/>
            {error.email && <span>Error</span>}
            <input type="submit" value="submit"/>
        </form>
    )
}

export default ControlledForm