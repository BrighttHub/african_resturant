"use client"

import { useState } from "react"
import Header from "@/components/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star, MapPin } from "lucide-react"

const allRestaurants = [
  {
    id: 1,
    name: "Addis Red Sea",
    country: "Ethiopia",
    cuisine: "Ethiopian",
    rating: 4.8,
    image: "/ethiopian-restaurant-with-injera.jpg",
    description: "Authentic Ethiopian cuisine with traditional coffee ceremony",
    location: "Downtown",
  },
  {
    id: 2,
    name: "Lagos Kitchen",
    country: "Nigeria",
    cuisine: "Nigerian",
    rating: 4.7,
    image: "/nigerian-restaurant-with-jollof-rice.jpg",
    description: "Vibrant Nigerian flavors and street food favorites",
    location: "Midtown",
  },
  {
    id: 3,
    name: "Marrakech Spice",
    country: "Morocco",
    cuisine: "Moroccan",
    rating: 4.9,
    image: "/moroccan-restaurant-with-tagine.jpg",
    description: "Exotic Moroccan spices and traditional tagines",
    location: "Arts District",
  },
  {
    id: 4,
    name: "Nairobi Grill",
    country: "Kenya",
    cuisine: "Kenyan",
    rating: 4.6,
    image: "/kenyan-restaurant-nyama-choma.jpg",
    description: "Grilled meats and traditional Kenyan dishes",
    location: "Uptown",
  },
  {
    id: 5,
    name: "Cape Town Flavors",
    country: "South Africa",
    cuisine: "South African",
    rating: 4.8,
    image: "/south-african-restaurant-bobotie.jpg",
    description: "Rainbow nation cuisine with diverse flavors",
    location: "Waterfront",
  },
  {
    id: 6,
    name: "Dakar Delights",
    country: "Senegal",
    cuisine: "Senegalese",
    rating: 4.7,
    image: "/senegalese-restaurant-thieboudienne.jpg",
    description: "Coastal Senegalese seafood specialties",
    location: "Harbor",
  },
]

export default function RestaurantsPage() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  const countries = Array.from(new Set(allRestaurants.map((r) => r.country)))
  const filteredRestaurants = selectedCountry
    ? allRestaurants.filter((r) => r.country === selectedCountry)
    : allRestaurants

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-12 px-4 md:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">All Restaurants</h1>
          <p className="text-lg text-muted-foreground">Discover authentic African restaurants near you</p>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter by Country */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Filter by Country</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => setSelectedCountry(null)}
                variant={selectedCountry === null ? "default" : "outline"}
                className={selectedCountry === null ? "bg-primary text-primary-foreground" : ""}
              >
                All Countries
              </Button>
              {countries.map((country) => (
                <Button
                  key={country}
                  onClick={() => setSelectedCountry(country)}
                  variant={selectedCountry === country ? "default" : "outline"}
                  className={selectedCountry === country ? "bg-primary text-primary-foreground" : ""}
                >
                  {country}
                </Button>
              ))}
            </div>
          </div>

          {/* Restaurants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <Link key={restaurant.id} href={`/restaurants/${restaurant.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
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
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground mb-1">{restaurant.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{restaurant.cuisine}</p>
                    <p className="text-sm text-foreground mb-3 flex-1">{restaurant.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star size={16} className="fill-primary text-primary" />
                        <span className="font-semibold text-foreground">{restaurant.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <MapPin size={14} />
                        {restaurant.location}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
