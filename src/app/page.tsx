import Badge from './components/Navbar/Badge'
import NewsContainer from './components/Newsbar/NewsContainer'
import ScoreBoard from './components/ScoreBoard/ScoreBoard'

export default async function Home() {
  return (
    <main className=" p-2 sm:p-4 lg:p-8 gap-8">
        <Badge />
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          <ScoreBoard />
          <NewsContainer  />
        </div>
      
    </main>
  )
}
