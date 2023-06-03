import Calculator from '@/components/Calculator'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">

      <h1 className='pt-20 text-center text-3xl font-semibold'>Calculadora de precios</h1>

      <div className='pt-10'>
        <Calculator />
      </div>
      
    </main>
  )
}
