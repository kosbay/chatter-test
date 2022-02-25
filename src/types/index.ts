export type Message = {
  message: string,
  time: string,
  self: boolean
};

export type Chat = {
  name: string,
  messages: Message[]
}