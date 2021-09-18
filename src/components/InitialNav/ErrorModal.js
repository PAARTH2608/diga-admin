import './errorModal.css'

const errorModal = props => {
    return (
        <div className="error" >
            <div className="modal-btn">
                <button className="mdl-btn" onClick={props.onClick()} >Close</button>
            </div>
            <div>
                <h1>Login Error : Admin Not Found</h1>
            </div>
            <div>
                <h2>Please Enter Valid Credentials!!</h2>
            </div>
        </div>
    )
}
export default errorModal;