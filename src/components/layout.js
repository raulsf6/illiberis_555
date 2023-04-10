import Footer from '@/components/footer'
import Header from '@/components/header_middle'

export default function Layout({ children }) {
    return (
      <>
       <Header/>
       <main>{children}</main>
       <Footer/>
      </>
    )
  }