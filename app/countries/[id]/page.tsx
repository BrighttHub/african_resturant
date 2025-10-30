// "use client"

// import Header from "@/components/header"
// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { ArrowLeft } from "lucide-react"

// const countryData: Record<
//   number,
//   {
//     id: number
//     name: string
//     flag: string
//     color: string
//     description: string
//     history: string
//     foods: Array<{
//       id: number
//       name: string
//       description: string
//       ingredients: string[]
//       origin: string
//       image: string
//     }>
//     restaurants: Array<{
//       id: number
//       name: string
//       rating: number
//     }>
//   }
// > = {
//   1: {
//     id: 1,
//     name: "Ethiopia",
//     flag: "🇪🇹",
//     color: "from-red-600 to-yellow-500",
//     description: "Ethiopia has one of the oldest and most unique cuisines in Africa",
//     history:
//       "Ethiopian cuisine dates back thousands of years and is deeply rooted in the country's culture and traditions. The use of spices like berbere and mitmita, combined with injera bread, creates a distinctive culinary experience.",
//     foods: [
//       {
//         id: 1,
//         name: "Injera",
//         description: "Spongy flatbread made from teff flour",
//         ingredients: ["Teff flour", "Water", "Salt"],
//         origin: "Ethiopia",
//         image: "/injera-food.jpg",
//       },
//       {
//         id: 2,
//         name: "Doro Wot",
//         description: "Spicy chicken stew with hard-boiled eggs",
//         ingredients: ["Chicken", "Eggs", "Onions", "Berbere spice", "Ginger"],
//         origin: "Ethiopia",
//         image: "/doro-wot-food.jpg",
//       },
//       {
//         id: 3,
//         name: "Misir Wot",
//         description: "Red lentil stew with traditional spices",
//         ingredients: ["Red lentils", "Onions", "Garlic", "Ginger", "Berbere"],
//         origin: "Ethiopia",
//         image: "/misir-wot-food.jpg",
//       },
//       {
//         id: 4,
//         name: "Tibs",
//         description: "Sautéed meat with vegetables and spices",
//         ingredients: ["Beef", "Vegetables", "Onions", "Garlic", "Spices"],
//         origin: "Ethiopia",
//         image: "/tibs-food.jpg",
//       },
//       {
//         id: 5,
//         name: "Shiro",
//         description: "Creamy chickpea or bean flour stew",
//         ingredients: ["Chickpea flour", "Onions", "Garlic", "Spices"],
//         origin: "Ethiopia",
//         image: "/shiro-food.jpg",
//       },
//     ],
//     restaurants: [
//       { id: 1, name: "Addis Red Sea", rating: 4.8 },
//       { id: 2, name: "Ethiopian Flavors", rating: 4.6 },
//       { id: 3, name: "Addis Ababa Kitchen", rating: 4.7 },
//     ],
//   },
//   2: {
//     id: 2,
//     name: "Nigeria",
//     flag: "🇳🇬",
//     color: "from-green-600 to-white",
//     description: "Nigeria's cuisine is vibrant, diverse, and reflects the country's rich cultural heritage",
//     history:
//       "Nigerian cuisine is a blend of over 250 ethnic groups' culinary traditions. From the north to the south, each region has its own unique dishes and cooking styles that have been passed down through generations.",
//     foods: [
//       {
//         id: 6,
//         name: "Jollof Rice",
//         description: "Fragrant rice cooked in tomato sauce with spices",
//         ingredients: ["Rice", "Tomatoes", "Onions", "Peppers", "Spices"],
//         origin: "Nigeria",
//         image: "/jollof-rice-food.jpg",
//       },
//       {
//         id: 7,
//         name: "Suya",
//         description: "Grilled meat skewers with peanut seasoning",
//         ingredients: ["Beef", "Peanut powder", "Spices", "Onions"],
//         origin: "Nigeria",
//         image: "/suya-food.jpg",
//       },
//       {
//         id: 8,
//         name: "Egusi Soup",
//         description: "Melon seed soup with meat and vegetables",
//         ingredients: ["Melon seeds", "Meat", "Vegetables", "Spices"],
//         origin: "Nigeria",
//         image: "/egusi-soup-food.jpg",
//       },
//       {
//         id: 9,
//         name: "Pepper Soup",
//         description: "Spicy broth with meat and traditional herbs",
//         ingredients: ["Meat", "Peppers", "Herbs", "Spices", "Broth"],
//         origin: "Nigeria",
//         image: "/pepper-soup-food.jpg",
//       },
//       {
//         id: 10,
//         name: "Akara",
//         description: "Deep-fried bean fritters",
//         ingredients: ["Black-eyed peas", "Onions", "Peppers", "Oil"],
//         origin: "Nigeria",
//         image: "/akara-food.jpg",
//       },
//     ],
//     restaurants: [
//       { id: 2, name: "Lagos Kitchen", rating: 4.7 },
//       { id: 3, name: "Nigerian Spice House", rating: 4.5 },
//       { id: 4, name: "Naija Flavors", rating: 4.6 },
//       { id: 5, name: "Lagos Street Food", rating: 4.4 },
//     ],
//   },
//   3: {
//     id: 3,
//     name: "Morocco",
//     flag: "🇲🇦",
//     color: "from-red-600 to-green-600",
//     description: "Moroccan cuisine is a harmonious blend of Berber, Arab, and Mediterranean influences",
//     history:
//       "Moroccan food reflects centuries of cultural exchange and trade. The use of aromatic spices, preserved lemons, and slow-cooking techniques creates dishes that are both complex and deeply satisfying.",
//     foods: [
//       {
//         id: 11,
//         name: "Tagine",
//         description: "Slow-cooked stew with meat and dried fruits",
//         ingredients: ["Meat", "Dried fruits", "Onions", "Spices", "Broth"],
//         origin: "Morocco",
//         image: "/tagine-food.jpg",
//       },
//       {
//         id: 12,
//         name: "Couscous",
//         description: "Steamed semolina grains with vegetables and meat",
//         ingredients: ["Semolina", "Vegetables", "Meat", "Broth"],
//         origin: "Morocco",
//         image: "/couscous-food.jpg",
//       },
//       {
//         id: 13,
//         name: "Harira",
//         description: "Traditional tomato and lentil soup",
//         ingredients: ["Lentils", "Tomatoes", "Chickpeas", "Spices"],
//         origin: "Morocco",
//         image: "/harira-food.jpg",
//       },
//       {
//         id: 14,
//         name: "Pastilla",
//         description: "Crispy pastry with meat and almonds",
//         ingredients: ["Phyllo dough", "Meat", "Almonds", "Spices", "Eggs"],
//         origin: "Morocco",
//         image: "/pastilla-food.jpg",
//       },
//       {
//         id: 15,
//         name: "Tanjia",
//         description: "Slow-cooked meat in a clay pot",
//         ingredients: ["Meat", "Preserved lemons", "Olives", "Spices"],
//         origin: "Morocco",
//         image: "/tanjia-food.jpg",
//       },
//     ],
//     restaurants: [
//       { id: 3, name: "Marrakech Spice", rating: 4.9 },
//       { id: 4, name: "Moroccan Riad", rating: 4.8 },
//       { id: 5, name: "Fez Kitchen", rating: 4.7 },
//     ],
//   },
// }

// // export default function CountryDetailPage({ params }: { params: { id: string } }) {
// //   const countryId = Number.parseInt(params.id)
// //   const country = countryData[countryId]

// // interface CountryPageProps {
// //   params: { id: string }
// // }

// // export default async function CountryPage({ params }: CountryPageProps) {
// //   const countryId = Number(params.id)
// //   const country = countryData[countryId]

// type Props = {
//   params: { id: string }
// }

// export default function CountryPage({ params }: Props) {
//   const countryId = Number(params.id)
//   const country = countryData[countryId]


//   if (!country) {
//     return (
//       <main className="min-h-screen bg-background">
//         <Header />
//         <div className="py-20 px-4 text-center">
//           <h1 className="text-2xl font-bold text-foreground">Country not found</h1>
//           <Link href="/countries">
//             <Button className="mt-4 bg-primary text-primary-foreground">Back to Countries</Button>
//           </Link>
//         </div>
//       </main>
//     )
//   }

//   return (
//     <main className="min-h-screen bg-background">
//       <Header />

//       {/* Back Button */}
//       <div className="px-4 md:px-8 py-4">
//         <Link href="/countries" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
//           <ArrowLeft size={20} />
//           Back to Countries
//         </Link>
//       </div>

//       {/* Hero Section */}
//       <section className={`bg-gradient-to-br ${country.color} py-20 px-4 md:px-8 text-white`}>
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="text-8xl mb-6">{country.flag}</div>
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">{country.name}</h1>
//           <p className="text-xl opacity-90 max-w-2xl mx-auto">{country.description}</p>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-16 px-4 md:px-8 bg-card/50">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-foreground mb-6">Culinary Heritage</h2>
//           <p className="text-lg text-muted-foreground leading-relaxed">{country.history}</p>
//         </div>
//       </section>

//       {/* Foods Section */}
//       <section className="py-16 px-4 md:px-8">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Traditional Dishes</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {country.foods.map((food) => (
//               <Card key={food.id} className="overflow-hidden hover:shadow-lg transition-shadow">
//                 <div className="relative h-64 bg-muted overflow-hidden">
//                   <img
//                     src={food.image || "/placeholder.svg"}
//                     alt={food.name}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold text-foreground mb-2">{food.name}</h3>
//                   <p className="text-muted-foreground mb-4">{food.description}</p>

//                   <div className="mb-4">
//                     <p className="text-sm font-semibold text-foreground mb-2">Key Ingredients:</p>
//                     <div className="flex flex-wrap gap-2">
//                       {food.ingredients.map((ingredient, idx) => (
//                         <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
//                           {ingredient}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <p className="text-sm text-muted-foreground">
//                     <span className="font-semibold">Origin:</span> {food.origin}
//                   </p>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Restaurants Section */}
//       <section className="py-16 px-4 md:px-8 bg-card/50">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Restaurants Serving {country.name}</h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {country.restaurants.map((restaurant) => (
//               <Link key={restaurant.id} href={`/restaurants/${restaurant.id}`}>
//                 <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl font-bold text-foreground mb-2">{restaurant.name}</h3>
//                     <div className="flex items-center gap-2">
//                       <span className="text-lg font-bold text-primary">{restaurant.rating}</span>
//                       <span className="text-sm text-muted-foreground">★ Rating</span>
//                     </div>
//                   </div>
//                   <Button className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">
//                     View Menu
//                   </Button>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4 md:px-8">
//         <div className="max-w-4xl mx-auto text-center bg-primary/5 rounded-lg p-8">
//           <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Explore {country.name} Cuisine?</h2>
//           <p className="text-lg text-muted-foreground mb-6">
//             Visit one of our partner restaurants to experience authentic {country.name} flavors
//           </p>
//           <Link href="/restaurants">
//             <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
//               Find Restaurants
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </main>
//   )
// }



// "use client"

// import Header from "@/components/header"
// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { ArrowLeft } from "lucide-react"
// import { useEffect, useState } from "react"
// import { useParams } from "next/navigation"
// // -------------------- Country Data --------------------
// const countryData: Record<
//   number,
//   {
//     id: number
//     name: string
//     flag: string
//     color: string
//     description: string
//     history: string
//     foods: Array<{
//       id: number
//       name: string
//       description: string
//       ingredients: string[]
//       origin: string
//       image: string
//     }>
//     restaurants: Array<{
//       id: number
//       name: string
//       rating: number
//     }>
//   }
// > = {
//   1: {
//     id: 1,
//     name: "Ethiopia",
//     flag: "🇪🇹",
//     color: "from-red-600 to-yellow-500",
//     description: "Ethiopia has one of the oldest and most unique cuisines in Africa",
//     history:
//       "Ethiopian cuisine dates back thousands of years and is deeply rooted in the country's culture and traditions. The use of spices like berbere and mitmita, combined with injera bread, creates a distinctive culinary experience.",
//     foods: [
//       {
//         id: 1,
//         name: "Injera",
//         description: "Spongy flatbread made from teff flour",
//         ingredients: ["Teff flour", "Water", "Salt"],
//         origin: "Ethiopia",
//         image: "/injera-food.jpg",
//       },
//       {
//         id: 2,
//         name: "Doro Wot",
//         description: "Spicy chicken stew with hard-boiled eggs",
//         ingredients: ["Chicken", "Eggs", "Onions", "Berbere spice", "Ginger"],
//         origin: "Ethiopia",
//         image: "/doro-wot-food.jpg",
//       },
//       // ... add remaining foods
//     ],
//     restaurants: [
//       { id: 1, name: "Addis Red Sea", rating: 4.8 },
//       { id: 2, name: "Ethiopian Flavors", rating: 4.6 },
//       { id: 3, name: "Addis Ababa Kitchen", rating: 4.7 },
//     ],
//   },
//   2: {
//     id: 2,
//     name: "Nigeria",
//     flag: "🇳🇬",
//     color: "from-green-600 to-white",
//     description: "Nigeria's cuisine is vibrant, diverse, and reflects the country's rich cultural heritage",
//     history:
//       "Nigerian cuisine is a blend of over 250 ethnic groups' culinary traditions. From the north to the south, each region has its own unique dishes and cooking styles that have been passed down through generations.",
//     foods: [
//       {
//         id: 6,
//         name: "Jollof Rice",
//         description: "Fragrant rice cooked in tomato sauce with spices",
//         ingredients: ["Rice", "Tomatoes", "Onions", "Peppers", "Spices"],
//         origin: "Nigeria",
//         image: "/jollof-rice-food.jpg",
//       },
//       // ... add remaining foods
//     ],
//     restaurants: [
//       { id: 2, name: "Lagos Kitchen", rating: 4.7 },
//       { id: 3, name: "Nigerian Spice House", rating: 4.5 },
//       { id: 4, name: "Naija Flavors", rating: 4.6 },
//       { id: 5, name: "Lagos Street Food", rating: 4.4 },
//     ],
//   },
//   3: {
//     id: 3,
//     name: "Morocco",
//     flag: "🇲🇦",
//     color: "from-red-600 to-green-600",
//     description: "Moroccan cuisine is a harmonious blend of Berber, Arab, and Mediterranean influences",
//     history:
//       "Moroccan food reflects centuries of cultural exchange and trade. The use of aromatic spices, preserved lemons, and slow-cooking techniques creates dishes that are both complex and deeply satisfying.",
//     foods: [
//       {
//         id: 11,
//         name: "Tagine",
//         description: "Slow-cooked stew with meat and dried fruits",
//         ingredients: ["Meat", "Dried fruits", "Onions", "Spices", "Broth"],
//         origin: "Morocco",
//         image: "/tagine-food.jpg",
//       },
//       // ... add remaining foods
//     ],
//     restaurants: [
//       { id: 3, name: "Marrakech Spice", rating: 4.9 },
//       { id: 4, name: "Moroccan Riad", rating: 4.8 },
//       { id: 5, name: "Fez Kitchen", rating: 4.7 },
//     ],
//   },
// }

// // -------------------- Component --------------------
// // interface CountryPageProps {
// //   params: { id: string }
// // }

// // export default function CountryPage({ params }: CountryPageProps) {
// //   const countryId = Number(params.id)
// //   const country = countryData[countryId] // ✅ access via object key



// export default function CountryPageClient() {
//   const params = useParams() // get id from URL
//   const [country, setCountry] = useState<typeof countryData[1] | null>(null)

//   useEffect(() => {
//     if (!params?.id) return
//     const id = Number(params.id)
//     setCountry(countryData[id] || null)
//   }, [params?.id])

//   if (!country) {
//     return (
//       <main className="min-h-screen bg-background">
//         <Header />
//         <div className="py-20 px-4 text-center">
//           <h1 className="text-2xl font-bold text-foreground">Country not found</h1>
//           <Link href="/countries">
//             <Button className="mt-4 bg-primary text-primary-foreground">Back to Countries</Button>
//           </Link>
//         </div>
//       </main>
//     )
//   }

//   return (
//     <main className="min-h-screen bg-background">
//       <Header />

//       {/* Back Button */}
//       <div className="px-4 md:px-8 py-4">
//         <Link href="/countries" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
//           <ArrowLeft size={20} />
//           Back to Countries
//         </Link>
//       </div>

//       {/* Hero Section */}
//       <section className={`bg-gradient-to-br ${country.color} py-20 px-4 md:px-8 text-white`}>
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="text-8xl mb-6">{country.flag}</div>
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">{country.name}</h1>
//           <p className="text-xl opacity-90 max-w-2xl mx-auto">{country.description}</p>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-16 px-4 md:px-8 bg-card/50">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-foreground mb-6">Culinary Heritage</h2>
//           <p className="text-lg text-muted-foreground leading-relaxed">{country.history}</p>
//         </div>
//       </section>

//       {/* Foods Section */}
//       <section className="py-16 px-4 md:px-8">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Traditional Dishes</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {country.foods.map((food) => (
//               <Card key={food.id} className="overflow-hidden hover:shadow-lg transition-shadow">
//                 <div className="relative h-64 bg-muted overflow-hidden">
//                   <img
//                     src={food.image || "/placeholder.svg"}
//                     alt={food.name}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold text-foreground mb-2">{food.name}</h3>
//                   <p className="text-muted-foreground mb-4">{food.description}</p>
//                   <div className="mb-4">
//                     <p className="text-sm font-semibold text-foreground mb-2">Key Ingredients:</p>
//                     <div className="flex flex-wrap gap-2">
//                       {food.ingredients.map((ingredient, idx) => (
//                         <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
//                           {ingredient}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                   <p className="text-sm text-muted-foreground">
//                     <span className="font-semibold">Origin:</span> {food.origin}
//                   </p>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Restaurants Section */}
//       <section className="py-16 px-4 md:px-8 bg-card/50">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
//             Restaurants Serving {country.name}
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {country.restaurants.map((restaurant) => (
//               <Link key={restaurant.id} href={`/restaurants/${restaurant.id}`}>
//                 <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl font-bold text-foreground mb-2">{restaurant.name}</h3>
//                     <div className="flex items-center gap-2">
//                       <span className="text-lg font-bold text-primary">{restaurant.rating}</span>
//                       <span className="text-sm text-muted-foreground">★ Rating</span>
//                     </div>
//                   </div>
//                   <Button className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">
//                     View Menu
//                   </Button>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }




// app/countries/[id]/page.tsx

import Header from "@/components/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// -------------------- Country Data --------------------
const countryData: Record<
  number,
  {
    id: number
    name: string
    flag: string
    color: string
    description: string
    history: string
    foods: Array<{
      id: number
      name: string
      description: string
      ingredients: string[]
      origin: string
      image: string
    }>
    restaurants: Array<{
      id: number
      name: string
      rating: number
    }>
  }
> = {
  1: {
    id: 1,
    name: "Ethiopia",
    flag: "🇪🇹",
    color: "from-red-600 to-yellow-500",
    description: "Ethiopia has one of the oldest and most unique cuisines in Africa",
    history:
      "Ethiopian cuisine dates back thousands of years and is deeply rooted in the country's culture and traditions. The use of spices like berbere and mitmita, combined with injera bread, creates a distinctive culinary experience.",
    foods: [
      {
        id: 1,
        name: "Injera",
        description: "Spongy flatbread made from teff flour",
        ingredients: ["Teff flour", "Water", "Salt"],
        origin: "Ethiopia",
        image: "/injera-food.jpg",
      },
      {
        id: 2,
        name: "Doro Wot",
        description: "Spicy chicken stew with hard-boiled eggs",
        ingredients: ["Chicken", "Eggs", "Onions", "Berbere spice", "Ginger"],
        origin: "Ethiopia",
        image: "/doro-wot-food.jpg",
      },
      {
        id: 3,
        name: "Misir Wot",
        description: "Red lentil stew with traditional spices",
        ingredients: ["Red lentils", "Onions", "Garlic", "Ginger", "Berbere"],
        origin: "Ethiopia",
        image: "/misir-wot-food.jpg",
      },
      {
        id: 4,
        name: "Tibs",
        description: "Sautéed meat with vegetables and spices",
        ingredients: ["Beef", "Vegetables", "Onions", "Garlic", "Spices"],
        origin: "Ethiopia",
        image: "/tibs-food.jpg",
      },
      {
        id: 5,
        name: "Shiro",
        description: "Creamy chickpea or bean flour stew",
        ingredients: ["Chickpea flour", "Onions", "Garlic", "Spices"],
        origin: "Ethiopia",
        image: "/shiro-food.jpg",
      },
    ],
    restaurants: [
      { id: 1, name: "Addis Red Sea", rating: 4.8 },
      { id: 2, name: "Ethiopian Flavors", rating: 4.6 },
      { id: 3, name: "Addis Ababa Kitchen", rating: 4.7 },
    ],
  },
  2: {
    id: 2,
    name: "Nigeria",
    flag: "🇳🇬",
    color: "from-green-600 to-white",
    description: "Nigeria's cuisine is vibrant, diverse, and reflects the country's rich cultural heritage",
    history:
      "Nigerian cuisine is a blend of over 250 ethnic groups' culinary traditions. From the north to the south, each region has its own unique dishes and cooking styles that have been passed down through generations.",
    foods: [
      {
        id: 6,
        name: "Jollof Rice",
        description: "Fragrant rice cooked in tomato sauce with spices",
        ingredients: ["Rice", "Tomatoes", "Onions", "Peppers", "Spices"],
        origin: "Nigeria",
        image: "/jollof-rice-food.jpg",
      },
      {
        id: 7,
        name: "Suya",
        description: "Grilled meat skewers with peanut seasoning",
        ingredients: ["Beef", "Peanut powder", "Spices", "Onions"],
        origin: "Nigeria",
        image: "/suya-food.jpg",
      },
      {
        id: 8,
        name: "Egusi Soup",
        description: "Melon seed soup with meat and vegetables",
        ingredients: ["Melon seeds", "Meat", "Vegetables", "Spices"],
        origin: "Nigeria",
        image: "/egusi-soup-food.jpg",
      },
      {
        id: 9,
        name: "Pepper Soup",
        description: "Spicy broth with meat and traditional herbs",
        ingredients: ["Meat", "Peppers", "Herbs", "Spices", "Broth"],
        origin: "Nigeria",
        image: "/pepper-soup-food.jpg",
      },
      {
        id: 10,
        name: "Akara",
        description: "Deep-fried bean fritters",
        ingredients: ["Black-eyed peas", "Onions", "Peppers", "Oil"],
        origin: "Nigeria",
        image: "/akara-food.jpg",
      },
    ],
    restaurants: [
      { id: 2, name: "Lagos Kitchen", rating: 4.7 },
      { id: 3, name: "Nigerian Spice House", rating: 4.5 },
      { id: 4, name: "Naija Flavors", rating: 4.6 },
      { id: 5, name: "Lagos Street Food", rating: 4.4 },
    ],
  },
  3: {
    id: 3,
    name: "Morocco",
    flag: "🇲🇦",
    color: "from-red-600 to-green-600",
    description: "Moroccan cuisine is a harmonious blend of Berber, Arab, and Mediterranean influences",
    history:
      "Moroccan food reflects centuries of cultural exchange and trade. The use of aromatic spices, preserved lemons, and slow-cooking techniques creates dishes that are both complex and deeply satisfying.",
    foods: [
      {
        id: 11,
        name: "Tagine",
        description: "Slow-cooked stew with meat and dried fruits",
        ingredients: ["Meat", "Dried fruits", "Onions", "Spices", "Broth"],
        origin: "Morocco",
        image: "/tagine-food.jpg",
      },
      {
        id: 12,
        name: "Couscous",
        description: "Steamed semolina grains with vegetables and meat",
        ingredients: ["Semolina", "Vegetables", "Meat", "Broth"],
        origin: "Morocco",
        image: "/couscous-food.jpg",
      },
      {
        id: 13,
        name: "Harira",
        description: "Traditional tomato and lentil soup",
        ingredients: ["Lentils", "Tomatoes", "Chickpeas", "Spices"],
        origin: "Morocco",
        image: "/harira-food.jpg",
      },
      {
        id: 14,
        name: "Pastilla",
        description: "Crispy pastry with meat and almonds",
        ingredients: ["Phyllo dough", "Meat", "Almonds", "Spices", "Eggs"],
        origin: "Morocco",
        image: "/pastilla-food.jpg",
      },
      {
        id: 15,
        name: "Tanjia",
        description: "Slow-cooked meat in a clay pot",
        ingredients: ["Meat", "Preserved lemons", "Olives", "Spices"],
        origin: "Morocco",
        image: "/tanjia-food.jpg",
      },
    ],
    restaurants: [
      { id: 3, name: "Marrakech Spice", rating: 4.9 },
      { id: 4, name: "Moroccan Riad", rating: 4.8 },
      { id: 5, name: "Fez Kitchen", rating: 4.7 },
    ],
  },
}

// -------------------- PAGE COMPONENT --------------------
interface CountryPageProps {
  params: { id: string }
}

export default function CountryPage({ params }: CountryPageProps) {
  const countryId = Number(params.id)
  const country = countryData[countryId]

  if (!country) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="py-20 px-4 text-center">
          <h1 className="text-2xl font-bold text-foreground">Country not found</h1>
          <Link href="/countries">
            <Button className="mt-4 bg-primary text-primary-foreground">Back to Countries</Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="px-4 md:px-8 py-4">
        <Link href="/countries" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
          <ArrowLeft size={20} />
          Back to Countries
        </Link>
      </div>

      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${country.color} py-20 px-4 md:px-8 text-white`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-8xl mb-6">{country.flag}</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{country.name}</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">{country.description}</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">Culinary Heritage</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{country.history}</p>
        </div>
      </section>

      {/* Foods Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Traditional Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {country.foods.map((food) => (
              <Card key={food.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 bg-muted overflow-hidden">
                  <img
                    src={food.image || "/placeholder.svg"}
                    alt={food.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{food.name}</h3>
                  <p className="text-muted-foreground mb-4">{food.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Key Ingredients:</p>
                    <div className="flex flex-wrap gap-2">
                      {food.ingredients.map((ingredient, idx) => (
                        <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Origin:</span> {food.origin}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="py-16 px-4 md:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Restaurants Serving {country.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {country.restaurants.map((restaurant) => (
              <Link key={restaurant.id} href={`/restaurants/${restaurant.id}`}>
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{restaurant.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-primary">{restaurant.rating}</span>
                      <span className="text-sm text-muted-foreground">★ Rating</span>
                    </div>
                  </div>
                  <Button className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    View Menu
                  </Button>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
