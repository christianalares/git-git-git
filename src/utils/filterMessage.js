const filters = ['fatal: ', 'error: ']

const filterMessage = msg => {
  let newMessage = msg
  filters.forEach(filter => {
    if (msg.includes(filter)) {
      // eslint-disable-next-line prefer-destructuring
      newMessage = msg.split(filter)[1]
    }
  })
  console.log(newMessage)
  return newMessage
}

export default filterMessage
