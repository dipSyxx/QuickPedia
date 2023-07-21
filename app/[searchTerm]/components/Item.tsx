import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  result: Result
}

export default function Item({ result }: Props) {
  const itemTextCol = (
    <div className="flex flex-col justify-center">
      <h2>
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
          className="text-xl font-bold underline"
        >
          {result.title}
        </Link>
      </h2>
      <p>{result.extract}</p>
    </div>
  )

  //Мініатюра-thumbnail
  const content = result?.thumbnail?.source ? (
    <article className="mx-4 my-6 max-w-full">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-center">
          <Image src={result.thumbnail.source} alt={result.title} width={200} height={200} loading="lazy" />
        </div>
        {itemTextCol}
      </div>
    </article>
  ) : (
    <article className="m-4 max-w-lg">{itemTextCol}</article>
  )

  return content
}
