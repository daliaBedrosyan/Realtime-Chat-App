import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png" alt="user avatar" />
                </div>
            </div>
            <div className="chat-bubble text-white bg-blue-500">Hi! How's it going?</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">Hi! How's it going?</div>
        </div>
    )
}

export default Message
