import { useEffect, useRef } from 'react'
import classnames from 'classnames'

import ChatFooter from './ChatFooter'
import { Message } from '../types'

type ChatHistoryProps = {
  history: Message[],
  refresh: boolean,
  setRefresh: (value: boolean) => void
}

const ChatHistory: React.FC<ChatHistoryProps> = ({
  history, refresh, setRefresh
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef?.current?.scrollIntoView({ block: 'end' });
  })

  const handleNewMessage = (messagePacket: Message) => {
    history.push(messagePacket)

    setRefresh(!refresh)
  }

  return (
    <div className="chatHistory" ref={divRef}>
      {
        history.map(({ message, time, self }: Message, index: number) => (
          <div className={classnames("messageBlock", self && "self")} key={index}>
            <p className="text">
              {message}
            </p>
            <p className="time">{time}</p>
          </div>
        ))
      }
      <ChatFooter
        onSend={handleNewMessage}
      />
    </div>
  )
}

export default ChatHistory
