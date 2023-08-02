import React, { FC } from 'react';

import gameCategoryClassNames from "./GameCategoryCardClassNames";
import Link from 'next/link';
import Image from 'next/image';

interface GameCategoryCardProps {
    categoryImage: string;
    categoryName: string;
    slug: string
}

const GameCategoryCard:FC<GameCategoryCardProps> = ({
    categoryImage,
    categoryName,
    slug
}) => {
    const {
        arrow,
        container,
        image,
        name
    } = gameCategoryClassNames;
  return (
    <Link
        href={`categories/${slug}`}
        className={container}
    >
        <Image 
            src={categoryImage}
            alt={name}
            width={200}
            height={200}
            className={image}
        />
        <h3 className={name}>
            {categoryName}
        </h3>
        <Image 
            src={categoryImage}
            alt="view"
            width={20}
            height={20}
            className={arrow}
        />
    </Link>
  )
}

export default GameCategoryCard;