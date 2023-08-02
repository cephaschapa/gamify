import React, { FC } from 'react'
import { gameCardClassNames } from './gameCardClassNames'
import Link from 'next/link';
import Image from 'next/image';

interface GameCardProps {
    id: number,
    name: string,
    image: string,
    price: number,
    slug: string,
}

const GameCard:FC<GameCardProps> = ({
    id,
    image: gameImage,
    name,
    price: gamePrice,
    slug
}) => {
    const {
        container,
        gameName,
        image,
        price
    } = gameCardClassNames;
  return (
    <Link href={`/games/${slug}`}>
        <div className={container}>
            <h3 className={price}>${gamePrice}</h3>
            <Image src={gameImage} className={image} alt={gameName} width={200} height={200}/>
            <div className={gameName}>{name}</div>
        </div>
    </Link>
  )
}

export default GameCard