const Mailbox = ({username, messages=[]}) => {
    return <>
        <p>Hello, {username}</p>
        {
            messages.length > 0
                ? <p> You have {messages.length} new messages</p>
                : <p> You have no new messages</p>
        }
    </>
}

export default Mailbox