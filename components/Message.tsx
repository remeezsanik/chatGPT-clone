import { DocumentData } from "firebase/firestore";

type Props = {
  messsage: DocumentData;
};

function Message({ messsage }: Props) {
  const isChatGPT = messsage.user.name === "ChatGPT";
  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={messsage.user.avatar} alt="" className="h-8 w-8" />
        <p className="pt-1 text-sm">{messsage.text}</p>
      </div>
    </div>
  );
}

export default Message;
