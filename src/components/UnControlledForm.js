import {useRef} from "react";

const UnControlledForm = () => {
    const inputRef = useRef(null)

    const handleSubmitButton = (e) => {
        e.preventDefault()
        alert(inputRef.current.value);
    }

    return (
        <form onSubmit={handleSubmitButton}>
            <input type="text" ref={inputRef}/>
            <input type="submit" value="submit"/>
        </form>
    )
}

export default UnControlledForm