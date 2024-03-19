import '../../static/styles/message.css';
const Message = ({ message }) => {
    if (!message) {
        return
    } else {
        return (
            <div className="success-msg">
                <i className="fa fa-check"></i>
                {message}
            </div>
        )
    }
}

export default Message;