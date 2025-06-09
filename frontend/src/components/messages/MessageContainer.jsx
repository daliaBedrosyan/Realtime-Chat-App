import MessageInput from "./MessageInput"
import Messages from "./Messages"
import NoChatSelected from "./NoChatSelected";

const MessageContainer = () => {

    const noChatSelected = true;

    return (
        <div className="md:min-w-[450px] flex flex-col">
            {noChatSelected ? <NoChatSelected /> : (
                <>
                    {/* <Header /> */}
                    <div className="bg-slate-500 px-4 py-2 mb-2">
                        <span className="label-text text-white">To:</span>{" "}
                        <span className="text-slate-700 font-bold">John Doe</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    )
}

export default MessageContainer
