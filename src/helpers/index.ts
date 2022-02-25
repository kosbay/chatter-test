export const getCurrentTime = () => {
  const currentdate = new Date()
  const datetime = currentdate.getHours() + ":" + currentdate.getMinutes()

  return datetime
}