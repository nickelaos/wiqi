import * as React from "react";
import { useEffect, useRef, useState } from "react";
import Message, { IMessage } from "./Message";
import { messages } from "./messages";

const Terminal = () => {
  const [content, setContent] = useState<IMessage[]>([]);
  const trigger = useRef<number>(0);
  const bottomRef = useRef<any>(null);

  const scrollToBottom = () => {
    bottomRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      const item = messages[i];

      if (!item) {
        clearInterval(interval);
        return;
      }

      setContent((prevState: IMessage[]): IMessage[] => {
        return [...prevState, messages[i]];
      });

      i++;
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [trigger.current]);

  /*useEffect(() => {
    const interval = setInterval(() => {
      trigger.current++;
    }, 60000);
    return () => {
      clearInterval(interval);
    }
  }, [trigger.current]);*/


  useEffect(() => {
    scrollToBottom();
  }, [content]);

  return (
    <div className="h-full">
      {/*<div className="bg-secondary-bg h-auto w-full text-primary-text text-sm pl-4 pr-4 pt-2 pb-2"></div>*/}
      <div className="h-full overflow-auto bg-secondary-bg p-4">
        {content.map((message, idx) => {
          return <Message {...message} key={idx} />;
        })}
        <div id="bottom-div" ref={bottomRef}></div>
      </div>
    </div>
  );
};

export default Terminal;
