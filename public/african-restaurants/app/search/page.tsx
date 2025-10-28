"use client"

import { useState, useMemo } from "react"
import Header from "@/components/header"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search } from "lucide-react"

const allFoods = [
  {
    id: 1,
    name: "Injera",
    country: "Ethiopia",
    description: "Spongy flatbread made from teff flour, served as a base for stews",
    restaurant: "Addis Red Sea",
    restaurantId: 1,
    price: "$12",
    image: "/injera-food.jpg",
  },
  {
    id: 2,
    name: "Doro Wot",
    country: "Ethiopia",
    description: "Spicy chicken stew with hard-boiled eggs and traditional spices",
    restaurant: "Addis Red Sea",
    restaurantId: 1,
    price: "$14",
    image: "/doro-wot-food.jpg",
  },
  {
    id: 3,
    name: "Jollof Rice",
    country: "Nigeria",
    description: "Fragrant rice cooked in tomato sauce with spices and vegetables",
    restaurant: "Lagos Kitchen",
    restaurantId: 2,
    price: "$11",
    image: "/jollof-rice-food.jpg",
  },
  {
    id: 4,
    name: "Suya",
    country: "Nigeria",
    description: "Grilled meat skewers coated with spicy peanut seasoning",
    restaurant: "Lagos Kitchen",
    restaurantId: 2,
    price: "$13",
    image: "/suya-food.jpg",
  },
  {
    id: 5,
    name: "Tagine",
    country: "Morocco",
    description: "Slow-cooked stew with meat, vegetables, and dried fruits",
    restaurant: "Marrakech Spice",
    restaurantId: 3,
    price: "$15",
    image: "/tagine-food.jpg",
  },
  {
    id: 6,
    name: "Couscous",
    country: "Morocco",
    description: "Steamed semolina grains served with vegetables and meat",
    restaurant: "Marrakech Spice",
    restaurantId: 3,
    price: "$12",
    image: "/couscous-food.jpg",
  },
  {
    id: 7,
    name: "Nyama Choma",
    country: "Kenya",
    description: "Grilled meat served with ugali and fresh vegetables",
    restaurant: "Nairobi Grill",
    restaurantId: 4,
    price: "$16",
    image: "/nyama-choma-food.jpg",
  },
  {
    id: 8,
    name: "Ugali",
    country: "Kenya",
    description: "Cornmeal staple served with meat or vegetable stews",
    restaurant: "Nairobi Grill",
    restaurantId: 4,
    price: "$8",
    image: "/ugali-food.jpg",
  },
  {
    id: 9,
    name: "Bobotie",
    country: "South Africa",
    description: "Spiced mince meat baked with egg topping, Cape Malay specialty",
    restaurant: "Cape Town Flavors",
    restaurantId: 5,
    price: "$14",
    image: "/bobotie-food.jpg",
  },
  {
    id: 10,
    name: "Bunny Chow",
    country: "South Africa",
    description: "Hollowed bread loaf filled with curry, street food favorite",
    restaurant: "Cape Town Flavors",
    restaurantId: 5,
    price: "$10",
    image: "/bunny-chow-food.jpg",
  },
  {
    id: 11,
    name: "Thieboudienne",
    country: "Senegal",
    description: "Fish and rice dish with vegetables, Senegal's national dish",
    restaurant: "Dakar Delights",
    restaurantId: 6,
    price: "$15",
    image: "/thieboudienne-food.jpg",
  },
  {
    id: 12,
    name: "Yassa",
    country: "Senegal",
    description: "Marinated meat or fish with onions and lemon juice",
    restaurant: "Dakar Delights",
    restaurantId: 6,
    price: "$13",
    image: "/yassa-food.jpg",
  },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  const countries = Array.from(new Set(allFoods.map((f) => f.country)))

  const filteredFoods = useMemo(() => {
    return allFoods.filter((food) => {
      const matchesSearch =
        food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        food.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCountry = !selectedCountry || food.country === selectedCountry
      return matchesSearch && matchesCountry
    })
  }, [searchQuery, selectedCountry])

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-12 px-4 md:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Search African Foods</h1>
          <p className="text-lg text-muted-foreground">Find your favorite dishes by name or country</p>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search by food name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-base border-primary/30 focus:border-primary"
              />
            </div>
          </div>

          {/* Country Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Filter by Country</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCountry(null)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCountry === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                All Countries
              </button>
              {countries.map((country) => (
                <button
                  key={country}
                  onClick={() => setSelectedCountry(country)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    selectedCountry === country
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <p className="text-sm text-muted-foreground mb-6">
              Found {filteredFoods.length} {filteredFoods.length === 1 ? "dish" : "dishes"}
            </p>

            {filteredFoods.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFoods.map((food) => (
                  <Link key={food.id} href={`/restaurants/${food.restaurantId}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                      <div className="relative h-48 bg-muted overflow-hidden">
                        <img
                          src={food.image || "/placeholder.svg"}
                          alt={food.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                          {food.country}
                        </div>
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-foreground mb-1">{food.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3 flex-1">{food.description}</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">At {food.restaurant}</p>
                            <p className="text-lg font-bold text-primary">{food.price}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground">From</p>
                            <p className="text-sm font-semibold text-foreground">{food.country}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-2">No dishes found</p>
                <p className="text-sm text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
