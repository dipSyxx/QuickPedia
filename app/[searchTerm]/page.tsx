import React from 'react'
import getWikiResults from '@/lib/getWikiResults'
import Item from './components/Item'

type Props = {
  params: {
    searchTerm: string
  }
}

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
  const data = await wikiData
  const displayTerm = searchTerm.replaceAll('%20', ' ')

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    }
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  }
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
  // get wiki data
  const wikiDate: Promise<SearchResult> = getWikiResults(searchTerm)
  // отримання самих даних
  const data = await wikiDate
  // Визначення результатів
  const results: Result[] | undefined = data?.query?.pages

  const displayTerm = searchTerm.replaceAll('%20', ' ')

  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      <h1 className="text-center font-bold text-2xl mb-6">Quick articles about: {displayTerm}</h1>
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />
        })
      ) : (
        <h2 className="p-2 text-xl">{`${displayTerm} Not Found`}</h2>
      )}
    </main>
  )

  return content
}
