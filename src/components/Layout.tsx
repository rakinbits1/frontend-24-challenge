import React, { FC,ReactNode } from 'react'
import Header from './Header'
type Props = {
  children?: ReactNode
  title?: string
}
  const Layout: FC<Props> = ({children })  => {
 return (
 <div>
    <header>
      <Header />
    </header>
    {children}
    <footer>
      {/* <span>I'm here to stay (Footer)</span> */}
    </footer>
  </div>
 )
}
export default Layout