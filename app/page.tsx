'use client'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-8xl font-bold text-white text-center">Welcome</h1>
      <h1 className="text-8xl font-bold text-white text-center"> to </h1>
      <h1 className="text-8xl font-bold text-white text-center">QuickPedia!</h1>
      <h2 className="text-6xl font-medium text-gray-400 text-center mt-6">Lets start quick search!</h2>

      <style jsx>{`
        @media (max-width: 768px) {
          /* Код для зміни шрифту на екранах з шириною менше 768px */
          .text-8xl {
            font-size: 4rem; /* Приклад зменшеного розміру шрифту */
          }

          .text-6xl {
            font-size: 3rem; /* Приклад зменшеного розміру шрифту */
          }
        }
      `}</style>
    </main>
  )
}
