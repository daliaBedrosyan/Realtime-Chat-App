import Messages from "./Messages"

const MessageContainer = () => {
    return (
        <div className="md:min-w-[450px] flex flex-col">
            <>
                {/* <Header /> */}
                <div className="bg-slate-500 px-4 py-2 mb-2">
                    <span className="label-text text-white">To:</span>{" "}
                    <span className="text-slate-700 font-bold">John Doe</span>
                </div>
                <Messages />
                {/* <MessageInput /> */}
            </>
        </div>
    )
}

export default MessageContainer
