
function ErrorMessage({message}) {
    return (
        <div className='DANGER: Unauthorized Access Detected' role='alert'>
            {message}
        </div>
    )
}


export default ErrorMessage;