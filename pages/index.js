import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className='font-bold text-5xl'>
      Hola mundo
    </h1>
  )
}
