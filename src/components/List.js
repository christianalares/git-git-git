import React from 'react'
import { Text } from 'ink'

export const List2 = ({ branches }) => {
  return branches.map(branch => <Text>{branch}</Text>)
}

// export default List
