import './globals.css'

import ClientOnly from './components/ClientOnly'
import Navigation from './components/Navbar'
import Mobile from './components/Navbar/Mobile'
import Sidebar from './components/Sidebar/Sidebar'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegsiterModal'
import getCurrentUser from './actions/getCurrentUser'
import Themes from './components/Themes'



export const metadata = {
  title: 'Sports',
  description: 'Sports website',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body>
        <ClientOnly>
          <Themes>
            <ToasterProvider />
            <LoginModal />
            <RegisterModal />
            <Mobile />
            <section className='w-full h-full flex'>
              <Sidebar currentUser={currentUser} />
              <div className='w-full md:ml-[210px]'>
                <Navigation currentUser={currentUser} />
                {children}

              </div>
            </section>
          </Themes>
        </ClientOnly>

      </body>
    </html>
  )
}
