import HeroSection from "@/components/HeroSection/HeroSection";
import TrendingSection from "@/components/TrendingSection/TrendingSection";
import Image from "next/image";
import Link from "next/link";

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
    </>
  )
}

const featuredGame = {
  name: "Eternal Domination",
  description:
    "Immerse yourself in a vast fantasy realm where epic battles and strategic conquests await. In 'Eternal Domination,' you'll lead armies, forge alliances, and build your empire from scratch. Command powerful heroes, employ cunning tactics, and unleash your might on the battlefield. Will you rise as the supreme ruler or fall beneath the weight of your ambitions? Join the fray and claim your destiny in this thrilling strategy game.",
  slug: "eternal-domination",
  image: "/images/trending.jpeg",
};

const featuredClassNames = {
  gameName: "font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8",
  gameDetails: "max-w-screen-md text-sm mb-8 md:mb-12",
  gameImage: "h-72 md:h-96 lg:h-112 w-full object-cover rounded-lg",
}

const sectionClassNames = {
  section: "px-6 sm:px-12 md:px-20 lg:px-36 mx-auto py-8 text-white",
  trending: "flex flex-col sm:flex-row items-center justify-between mb-8",
  trendingTitle: "font-bold text-3xl sm:mr-4",
  trendingButton:
    "mt-4 sm:mt-0 px-6 py-2 rounded-md bg-primary hover:bg-primary-dark",
  latestButton:
    "mt-4 sm:mt-0 px-6 py-2 rounded-md bg-primary-gradient border-2 border-primary-dark",
  featured: "pb-24 px-6 sm:px-12 md:px-20 lg:px-36 text-white",
  featuredContent: "mx-auto max-w-screen-xl",
};