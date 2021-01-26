import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import './Chat.css'

let socket

const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const ENDPOINT = 'localhost:5000'

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)

    socket = io(ENDPOINT, {
      transports: ['websocket'],
    })

    setName(name)
    setRoom(room)

    socket.emit('join', { name, room })
  }, [ENDPOINT, location.search])

  return (
    <div className='outerContainer'>
      <div className='container'>
        {/* <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage} */}
        {/* /> */}
      </div>
      {/* <TextContainer users={users} /> */}
    </div>
  )
}

export default Chat
