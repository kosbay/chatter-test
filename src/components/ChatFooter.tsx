import { useState } from 'react'

import { Message } from '../types'
import { getCurrentTime } from '../helpers'

type ChatFooterProps = {
  onSend: (value: Message) => void
}

const ChatFooter: React.FC<ChatFooterProps> = ({ onSend }) => {
  const [text, setText] = useState<string>("")

  const handleSend = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if(text && text.trim()) {
      onSend({
        message: text,
        time: getCurrentTime(),
        self: true
      })
      setText("")
    }
  }

  return (
    <form className="chatFooter" onSubmit={handleSend}>
      <input
        className="messageInput"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
      <input type="submit" className="button" value="Send"/>
    </form>
  );
}

export default ChatFooter
