import Dynamic from './Dynamic'

const Loop = ({items}) => {
  return (
      // This is a `forEach`
      // For each item in index, display HTML in dynamic component.
      // Key in vue :key.id 
    <> 
      {items.map((item, index) => (<Dynamic key={index} item={item} />))}
    </>
  )
}

export default Loop
