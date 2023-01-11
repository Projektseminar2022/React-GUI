import {useState} from "react";

export default function useWebsocket(url: URL) {
  const [callback, setCallback] = useState<(response: string) => void>((response: string) => {})
  const [error, setError] = useState<string>("")
  const [isOpen, setIsOpen] = useState(false)

  const websocket = new WebSocket(url)
  if (websocket != null){
    websocket.onmessage = function(e) {callback(e.data)}
    websocket.onerror = function(e) {setError(e.type)}
    websocket.onopen = function(e) {setIsOpen(true)}
    websocket.onclose = function(e) {setIsOpen(false)}
  } else {
    setError("websocket not connected")
  }

  const sendMessage = function (message: string){
    websocket.send(message)
  }

  return {setCallback, error, isOpen, sendMessage}
}
