import { useState, createContext, useContext, useMemo, useEffect } from 'react'

import FlatHeader from 'src/components/FlatHeader/FlatHeader'

type HeaderLayoutProps = {
  children?: React.ReactNode
}

interface HeaderContent {
  title: string | null
  blurb: string | null
  bgUrl: string | null
}

interface HeaderContextValue {
  headerContent: HeaderContent
  setHeaderContent: (newState: HeaderContent) => void
}

const HeaderLayoutContext = createContext<HeaderContextValue>({
  headerContent: {
    title: null,
    blurb: null,
    bgUrl: null,
  },
  setHeaderContent: () => {},
})

export const useHeaderContext = () => useContext(HeaderLayoutContext)

const HeaderLayout = ({ children }: HeaderLayoutProps) => {
  const [headerContent, setHeaderContent] = useState({
    title: null,
    blurb: null,
    bgUrl: null,
  })

  const { Provider: HeaderLayoutProvider } = HeaderLayoutContext

  const { title, blurb, bgUrl } = headerContent

  const value = useMemo(
    () => ({
      headerContent,
      setHeaderContent,
    }),
    [headerContent, setHeaderContent]
  )

  return (
    <HeaderLayoutProvider value={value}>
      <FlatHeader title={title} blurb={blurb} bgUrl={bgUrl} />
      {children}
    </HeaderLayoutProvider>
  )
}

export default HeaderLayout
