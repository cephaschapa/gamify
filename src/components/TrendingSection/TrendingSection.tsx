import React from 'react'
import { trendingClassNames } from './TrendingSectionClassNames'
import GameCard from '../GameCard/GameCard'
import { games } from '@/data/games'

const TrendingSection = () => {
    const {
        featured,
        featuredContent,
        latestButton,
        section,
        trending,
        trendingButton,
        trendingTitle
    } = trendingClassNames
  return (
    <section id='recent-games' className={section}>
        <div className={trending}>
           <h2 className={trendingTitle}>
                Currently Trending Games
           </h2>
        </div>
        <div className="flex gap-8 flex-wrap">
            {
                games.map(({id,image,name,price,slug})=>(
                    <GameCard 
                        key={id}
                        id={id}
                        name={name}
                        image={image}
                        price={price}
                        slug={slug}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default TrendingSection

const featuredGame = {
  name: "Eternal Domination",
  description:
    "Immerse yourself in a vast fantasy realm where epic battles and strategic conquests await. In 'Eternal Domination,' you'll lead armies, forge alliances, and build your empire from scratch. Command powerful heroes, employ cunning tactics, and unleash your might on the battlefield. Will you rise as the supreme ruler or fall beneath the weight of your ambitions? Join the fray and claim your destiny in this thrilling strategy game.",
  slug: "eternal-domination",
  image: "/images/trending.jpeg",
};