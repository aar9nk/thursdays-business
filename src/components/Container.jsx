export default function Container({ children }) {
  return(
    <div style={{display: 'flex', justifyContent: 'center'}}>
      {children}
    </div>
  )
}