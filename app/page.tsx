'use client'

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center p-16 main">
      <div className="gradient" />
      <h1 className="text-8xl font-bold text-black text-center">Welcome</h1>
      <h1 className="text-8xl font-bold text-black text-center"> to </h1>
      <h1 className="text-8xl font-bold text-black text-center">QuickPedia!</h1>
      <h2 className="text-6xl font-medium text-gray-400 text-center mt-6 text">Lets start quick search!</h2>

      <style jsx>{`
        @media (max-width: 768px) {
          /* Код для зміни шрифту на екранах з шириною менше 768px */
          .text-8xl {
            font-size: 3rem; /* Приклад зменшеного розміру шрифту */
          }

          .text-6xl {
            font-size: 2rem; /* Приклад зменшеного розміру шрифту */
          }
        }
      `}</style>
    </main>
  )
}
