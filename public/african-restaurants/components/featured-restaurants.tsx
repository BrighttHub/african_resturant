import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Star } from "lucide-react"

const restaurants = [
  {
    id: 1,
    name: "Addis Red Sea",
    country: "Ethiopia",
    cuisine: "Ethiopian",
    rating: 4.8,
    image: "/ethiopian-restaurant-with-injera.jpg",
    description: "Authentic Ethiopian cuisine with traditional coffee ceremony",
  },
  {
    id: 2,
    name: "Lagos Kitchen",
    country: "Nigeria",
    cuisine: "Nigerian",
    rating: 4.7,
    image: "/nigerian-restaurant-with-jollof-rice.jpg",
    description: "Vibrant Nigerian flavors and street food favorites",
  },
  {
    id: 3,
    name: "Marrakech Spice",
    country: "Morocco",
    cuisine: "Moroccan",
    rating: 4.9,
    image: "/moroccan-restaurant-with-tagine.jpg",
    description: "Exotic Moroccan spices and traditional tagines",
  },
]

export default function FeaturedRestaurants() {
  return (
    <section className="py-16 px-4 md:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Featured Restaurants</h2>
          <p className="text-muted-foreground">Discover our top-rated African restaurants</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <Link key={restaurant.id} href={`/restaurants/${restaurant.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img
                    src={restaurant.image || "/placeholder.svg"}
                    alt={restaurant.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {restaurant.country}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{restaurant.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{restaurant.cuisine}</p>
                  <p className="text-sm text-foreground mb-4">{restaurant.description}</p>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-primary text-primary" />
                    <span className="font-semibold text-foreground">{restaurant.rating}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
