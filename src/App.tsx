import { useState } from 'react'

import ChatPreview from './components/ChatPreview'
import ChatHistory from './components/ChatHistory'
import { chats } from './data'

function App() {
  const [activeChatIndex, setActiveChatIndex] = useState<number>(0)
  const [refresh, setRefresh] = useState<boolean>(false)

  const handleActiveChatIndex = (index: number) => {
    setActiveChatIndex(index)
  }

  return (
    <div className="App">
      <ChatPreview
        chats={chats}
        activeChatIndex={activeChatIndex}
        onChatSelect={handleActiveChatIndex}
      />
      <ChatHistory
        history={chats[activeChatIndex].messages}
        refresh={refresh}
        setRefresh={setRefresh}
      />
    </div>
  );
}

export default App
