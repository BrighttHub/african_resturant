import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 w-full">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
              Taste the <span className="text-primary">Soul</span> of Africa
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Experience authentic African cuisine from diverse countries and cultures. From Ethiopian injera to
              Nigerian jollof rice, discover culinary treasures from across the continent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <Link href="/restaurants">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                  Explore Restaurants
                </Button>
              </Link>
              <Link href="/booking">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                  Book a Table
                </Button>
              </Link>
              <Link href="/search">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto bg-transparent"
                >
                  Search by Food
                </Button>
              </Link>
            </div>
          </div>

          {/* Image on the right side */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-96 rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <Image
                src="/african-server-girl.jpg"
                alt="African restaurant server"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
