"use client"

import { useState } from "react"
import Header from "@/components/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star, MapPin, Phone, Clock, ArrowLeft } from "lucide-react"

const restaurantData: Record<
  number,
  {
    id: number
    name: string
    country: string
    cuisine: string
    rating: number
    image: string
    description: string
    location: string
    phone: string
    hours: string
    foods: Array<{
      id: number
      name: string
      description: string
      price: string
      image: string
    }>
  }
> = {
  1: {
    id: 1,
    name: "Addis Red Sea",
    country: "Ethiopia",
    cuisine: "Ethiopian",
    rating: 4.8,
    image: "/ethiopian-restaurant-with-injera.jpg",
    description: "Authentic Ethiopian cuisine with traditional coffee ceremony",
    location: "123 Main St, Downtown",
    phone: "(555) 123-4567",
    hours: "11:00 AM - 10:00 PM",
    foods: [
      {
        id: 1,
        name: "Injera",
        description: "Spongy flatbread made from teff flour",
        price: "$12",
        image: "/injera-food.jpg",
      },
      {
        id: 2,
        name: "Doro Wot",
        description: "Spicy chicken stew with hard-boiled eggs",
        price: "$14",
        image: "/doro-wot-food.jpg",
      },
      {
        id: 3,
        name: "Misir Wot",
        description: "Red lentil stew with traditional spices",
        price: "$11",
        image: "/misir-wot-food.jpg",
      },
      {
        id: 4,
        name: "Tibs",
        description: "Sautéed meat with vegetables and spices",
        price: "$15",
        image: "/tibs-food.jpg",
      },
    ],
  },
  2: {
    id: 2,
    name: "Lagos Kitchen",
    country: "Nigeria",
    cuisine: "Nigerian",
    rating: 4.7,
    image: "/nigerian-restaurant-with-jollof-rice.jpg",
    description: "Vibrant Nigerian flavors and street food favorites",
    location: "456 Oak Ave, Midtown",
    phone: "(555) 234-5678",
    hours: "12:00 PM - 11:00 PM",
    foods: [
      {
        id: 3,
        name: "Jollof Rice",
        description: "Fragrant rice cooked in tomato sauce",
        price: "$11",
        image: "/jollof-rice-food.jpg",
      },
      {
        id: 4,
        name: "Suya",
        description: "Grilled meat skewers with peanut seasoning",
        price: "$13",
        image: "/suya-food.jpg",
      },
      {
        id: 5,
        name: "Egusi Soup",
        description: "Melon seed soup with meat and vegetables",
        price: "$12",
        image: "/egusi-soup-food.jpg",
      },
      {
        id: 6,
        name: "Pepper Soup",
        description: "Spicy broth with meat and traditional herbs",
        price: "$10",
        image: "/pepper-soup-food.jpg",
      },
    ],
  },
  3: {
    id: 3,
    name: "Marrakech Spice",
    country: "Morocco",
    cuisine: "Moroccan",
    rating: 4.9,
    image: "/moroccan-restaurant-with-tagine.jpg",
    description: "Exotic Moroccan spices and traditional tagines",
    location: "789 Pine Rd, Arts District",
    phone: "(555) 345-6789",
    hours: "10:00 AM - 11:00 PM",
    foods: [
      {
        id: 7,
        name: "Tagine",
        description: "Slow-cooked stew with meat and dried fruits",
        price: "$15",
        image: "/tagine-food.jpg",
      },
      {
        id: 8,
        name: "Couscous",
        description: "Steamed semolina with vegetables and meat",
        price: "$12",
        image: "/couscous-food.jpg",
      },
      {
        id: 9,
        name: "Harira",
        description: "Traditional tomato and lentil soup",
        price: "$9",
        image: "/harira-food.jpg",
      },
      {
        id: 10,
        name: "Pastilla",
        description: "Crispy pastry with meat and almonds",
        price: "$14",
        image: "/pastilla-food.jpg",
      },
    ],
  },
}

export default function RestaurantDetailPage({ params }: { params: { id: string } }) {
  const restaurantId = Number.parseInt(params.id)
  const restaurant = restaurantData[restaurantId]
  const [selectedFood, setSelectedFood] = useState<(typeof restaurant.foods)[0] | null>(null)

  if (!restaurant) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="py-20 px-4 text-center">
          <h1 className="text-2xl font-bold text-foreground">Restaurant not found</h1>
          <Link href="/restaurants">
            <Button className="mt-4 bg-primary text-primary-foreground">Back to Restaurants</Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Back Button */}
      <div className="px-4 md:px-8 py-4">
        <Link href="/restaurants" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
          <ArrowLeft size={20} />
          Back to Restaurants
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={restaurant.image || "/placeholder.svg"}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-4 md:px-8 py-8 text-white">
            <div className="max-w-7xl mx-auto">
              <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full mb-4 font-semibold">
                {restaurant.country}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{restaurant.name}</h1>
              <p className="text-lg opacity-90">{restaurant.cuisine} Cuisine</p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Info */}
      <section className="py-12 px-4 md:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Star className="fill-primary text-primary" size={24} />
                <span className="text-3xl font-bold text-foreground">{restaurant.rating}</span>
              </div>
              <p className="text-sm text-muted-foreground">Rating</p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="text-primary" size={24} />
              </div>
              <p className="text-sm text-foreground font-semibold">{restaurant.location}</p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="text-primary" size={24} />
              </div>
              <p className="text-sm text-foreground font-semibold">{restaurant.phone}</p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="text-primary" size={24} />
              </div>
              <p className="text-sm text-foreground font-semibold">{restaurant.hours}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Menu</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurant.foods.map((food) => (
              <Card
                key={food.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedFood(food)}
              >
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img
                    src={food.image || "/placeholder.svg"}
                    alt={food.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">{food.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{food.description}</p>
                  <p className="text-2xl font-bold text-primary">{food.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Food Detail Modal */}
      {selectedFood && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-md w-full overflow-hidden">
            <img
              src={selectedFood.image || "/placeholder.svg"}
              alt={selectedFood.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">{selectedFood.name}</h3>
              <p className="text-muted-foreground mb-4">{selectedFood.description}</p>
              <p className="text-3xl font-bold text-primary mb-6">{selectedFood.price}</p>
              <div className="flex gap-3">
                <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">Add to Order</Button>
                <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setSelectedFood(null)}>
                  Close
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </main>
  )
}
