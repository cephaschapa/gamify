import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection/HeroSection";
import TrendingSection from "@/components/TrendingSection/TrendingSection";
import { categories, featuredGame, games } from "@/data/games";
import { featuredClassNames, recentGamesClasses, sectionClassNames, styles } from "./pageClassNames";
import GameCategoryCard from "@/components/GameCategoryCard/GameCategoryCard";
import GameCard from "@/components/GameCard/GameCard";
import NewsLater from "@/components/NewsLetter/NewsLetter";

export default function Home() {
  return (
    <>
      <HeroSection showLink/>
      <TrendingSection />
      <h3
        className="
          font-semibold
          text-2xl
          max-w-3xl
          text-center
          mx-auto
          text-primary
          py-10
        "
      >Featured Game</h3>
      <section className={sectionClassNames.featured}>
        <div className={sectionClassNames.featuredContent}>
          <h2 className={featuredClassNames.gameName}>{featuredGame.name}</h2>
          <p className={featuredClassNames.gameDetails}>{featuredGame.description}</p>
          <Link href={`/games/${featuredGame.slug}`}>
            <Image
              src={featuredGame.image}
              alt={featuredGame.name}
              width={500}
              height={500}
              className={featuredClassNames.gameImage}
            />
          </Link>
        </div>
      </section>
      <section
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1592155931584-901ac15763e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGxheSUyMHN0YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        }}

        className={styles.categorySection}
      >
        <div className={styles.categoryContent}>
          <h2 className={styles.categoryHeading}>Categories</h2>
          <p className={styles.categorySubHeading}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta optio eligendi qui possimus repudiandae reiciendis, quo labore a error numquam! Sequi rem, optio dolorum cupiditate reiciendis voluptatum quos molestias nihil.
          </p>
          <div className="flex flex-wrap">
            {
              categories.map(({id, image, name, slug})=>(
                <GameCategoryCard
                  key={id} 
                  categoryImage={image}
                  categoryName={name}
                  slug={slug}
                />
              ))
            }
          </div>
        </div>
      </section>
      <section className={recentGamesClasses.section}>
          <h2 className={recentGamesClasses.heading}>Our Recent Games</h2>
          <p className={recentGamesClasses.subHeading}>
            Stay Ahead of the curve with our games.
          </p>
          <div className="flex rounded gap-8 flex-wrap py-10">
            {
              games.map(({id,image,name,price,slug})=>(
                <GameCard
                  key={id} 
                  id={id}
                  image={image}
                  name={name}
                  price={price}
                  slug={slug}
                />
              ))
            }
          </div>
          <Link 
            href="/games"
            className={sectionClassNames.latestButton}
          >
            See All
          </Link>
      </section>
      <NewsLater />
    </>
  )
}