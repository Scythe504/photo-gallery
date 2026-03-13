import { Gallery } from './components/gallery'
import './index.css'

function App() {
  return (
    <main className="bg-black min-h-screen w-auto text-white flex flex-col items-center">
      <div className='px-4 lg:px-16 md:px-8'>
        <Gallery limit={30} />
      </div>
    </main>
  )
}

export default App
