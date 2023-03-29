type KriLayoutProps = {
  children?: React.ReactNode
}

const KriLayout = ({ children }: KriLayoutProps) => {
  return (
    <>
      <h1>This is a Kris Layout</h1>
      {children}
    </>
  )
}

export default KriLayout
