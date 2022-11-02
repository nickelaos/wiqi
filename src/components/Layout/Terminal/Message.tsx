import * as React from "react";
import { useId, useMemo } from "react";

export interface IMessage {
  type: string;
  text: string;
  time?: string;
}

const Message: React.FC<IMessage> = ({ type, text, time }) => {
  const key = useId();

  const typeColor = useMemo(() => {
    switch (type) {
      case "success":
        return "text-green-600";
      case "info":
        return "text-blue-800";
      default:
        return "text-primary-text";
    }
  }, []);

  return (
    <p className="text-sm" key={key}>
      <span className={`${typeColor} mr-2`}>{type}</span>
      <span className="text-primary-text">{text}</span>
      {time && <span className="text-primary-text">{` - ${time}`}</span>}
    </p>
  );
};

export default Message;
