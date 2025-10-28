import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturedRestaurants from "@/components/featured-restaurants"
import CountriesShowcase from "@/components/countries-showcase"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedRestaurants />
      <CountriesShowcase />

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Explore African Flavors</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Discover authentic cuisines from across the African continent
          </p>
          <Link href="/restaurants">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Browse All Restaurants
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
