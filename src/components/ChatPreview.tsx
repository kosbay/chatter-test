import classnames from 'classnames'

import { Chat } from '../types'

type ChatPreviewProps = {
  chats: Chat[],
  activeChatIndex: number,
  onChatSelect: (index: number) => void
}

const ChatPreview: React.FC<ChatPreviewProps> = ({
  chats, activeChatIndex, onChatSelect
}) => {
  return (
    <div className="chatPreview">
      {
        chats.map(({ name, messages }, index: number) => (
          <div
            className={classnames("chatItem", activeChatIndex=== index && "active")}
            onClick={() => onChatSelect(index)}
            key={name}
          >
            <div className="titleLine">
              <p className="title">{name}</p>
              <p className="date">{messages[messages.length - 1].time}</p>
            </div>
            <div className="messageLine">
              <p className="lastMessage">{messages[messages.length - 1].message}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ChatPreview
