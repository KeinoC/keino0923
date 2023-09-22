import Image from 'next/image'
import IntroPage from './intro/intro'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Keino Yet again</h1>
      <IntroPage />
    </main>
  )
}
