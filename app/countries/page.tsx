// "use client"

// import Header from "@/components/header"
// import { Card } from "@/components/ui/card"
// import Link from "next/link"

// const countries = [
//   {
//     id: 1,
//     name: "Ethiopia",
//     flag: "🇪🇹",
//     foods: ["Injera", "Doro Wot", "Misir Wot", "Tibs", "Shiro"],
//     description: "Ethiopian cuisine is known for its unique spices and communal dining style",
//     restaurants: 3,
//     color: "from-red-600 to-yellow-500",
//   },
//   {
//     id: 2,
//     name: "Nigeria",
//     flag: "🇳🇬",
//     foods: ["Jollof Rice", "Suya", "Egusi Soup", "Pepper Soup", "Akara"],
//     description: "Nigerian food is vibrant, flavorful, and reflects the country's diverse cultures",
//     restaurants: 4,
//     color: "from-green-600 to-white",
//   },
//   {
//     id: 3,
//     name: "Morocco",
//     flag: "🇲🇦",
//     foods: ["Tagine", "Couscous", "Harira", "Pastilla", "Tanjia"],
//     description: "Moroccan cuisine blends Arabic, Berber, and Mediterranean influences",
//     restaurants: 3,
//     color: "from-red-600 to-green-600",
//   },
//   {
//     id: 4,
//     name: "Kenya",
//     flag: "🇰🇪",
//     foods: ["Ugali", "Nyama Choma", "Sukuma Wiki", "Chapati", "Githeri"],
//     description: "Kenyan food is hearty and reflects the country's agricultural heritage",
//     restaurants: 2,
//     color: "from-black to-red-600",
//   },
//   {
//     id: 5,
//     name: "South Africa",
//     flag: "🇿🇦",
//     foods: ["Bobotie", "Bunny Chow", "Boerewors", "Sosaties", "Pap"],
//     description: "South African cuisine is a fusion of indigenous and colonial influences",
//     restaurants: 3,
//     color: "from-green-600 to-yellow-500",
//   },
//   {
//     id: 6,
//     name: "Senegal",
//     flag: "🇸🇳",
//     foods: ["Thieboudienne", "Yassa", "Mafe", "Ceebu Jen", "Accra"],
//     description: "Senegalese cuisine features fresh seafood and aromatic spices",
//     restaurants: 2,
//     color: "from-green-600 to-red-600",
//   },
//   {
//     id: 7,
//     name: "Ghana",
//     flag: "🇬🇭",
//     foods: ["Fufu", "Jollof Rice", "Waakye", "Kelewele", "Banku"],
//     description: "Ghanaian food is comfort food at its finest with bold flavors",
//     restaurants: 2,
//     color: "from-red-600 to-yellow-500",
//   },
//   {
//     id: 8,
//     name: "Egypt",
//     flag: "🇪🇬",
//     foods: ["Koshari", "Falafel", "Ful Medames", "Shakshuka", "Basboosa"],
//     description: "Egyptian cuisine is one of the oldest and most diverse in Africa",
//     restaurants: 2,
//     color: "from-red-600 to-white",
//   },
// ]

// export default function CountriesPage() {
//   return (
//     <main className="min-h-screen bg-background">
//       <Header />

//       <section className="py-12 px-4 md:px-8 bg-primary/5">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">African Countries</h1>
//           <p className="text-lg text-muted-foreground">Explore cuisines from different African nations</p>
//         </div>
//       </section>

//       <section className="py-12 px-4 md:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {countries.map((country) => (
//               <Link key={country.id} href={`/countries/${country.id}`}>
//                 <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
//                   <div className={`bg-gradient-to-br ${country.color} p-8 text-white text-center`}>
//                     <div className="text-6xl mb-3">{country.flag}</div>
//                     <h3 className="text-2xl font-bold">{country.name}</h3>
//                   </div>
//                   <div className="p-4 flex-1 flex flex-col">
//                     <p className="text-sm text-muted-foreground mb-3">{country.description}</p>
//                     <div className="mb-4">
//                       <p className="text-xs text-muted-foreground mb-2 font-semibold">Popular Dishes:</p>
//                       <div className="flex flex-wrap gap-2">
//                         {country.foods.slice(0, 3).map((food, idx) => (
//                           <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
//                             {food}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="text-sm font-semibold text-foreground mt-auto">
//                       {country.restaurants} Restaurants
//                     </div>
//                   </div>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }



// "use client"

// import Header from "@/components/header"
// import { Card } from "@/components/ui/card"
// import Link from "next/link"

// const countries = [
//   {
//     id: 1,
//     name: "Ethiopia",
//     flag: "🇪🇹",
//     foods: ["Injera", "Doro Wot", "Misir Wot", "Tibs", "Shiro"],
//     description: "Ethiopian cuisine is known for its unique spices and communal dining style",
//     restaurants: 3,
//     color: "from-red-600 to-yellow-500",
//   },
//   {
//     id: 2,
//     name: "Nigeria",
//     flag: "🇳🇬",
//     foods: ["Jollof Rice", "Suya", "Egusi Soup", "Pepper Soup", "Akara"],
//     description: "Nigerian food is vibrant, flavorful, and reflects the country's diverse cultures",
//     restaurants: 4,
//     color: "from-green-600 to-white",
//   },
//   {
//     id: 3,
//     name: "Morocco",
//     flag: "🇲🇦",
//     foods: ["Tagine", "Couscous", "Harira", "Pastilla", "Tanjia"],
//     description: "Moroccan cuisine blends Arabic, Berber, and Mediterranean influences",
//     restaurants: 3,
//     color: "from-red-600 to-green-600",
//   },
//   {
//     id: 4,
//     name: "Kenya",
//     flag: "🇰🇪",
//     foods: ["Ugali", "Nyama Choma", "Sukuma Wiki", "Chapati", "Githeri"],
//     description: "Kenyan food is hearty and reflects the country's agricultural heritage",
//     restaurants: 2,
//     color: "from-black to-red-600",
//   },
//   {
//     id: 5,
//     name: "South Africa",
//     flag: "🇿🇦",
//     foods: ["Bobotie", "Bunny Chow", "Boerewors", "Sosaties", "Pap"],
//     description: "South African cuisine is a fusion of indigenous and colonial influences",
//     restaurants: 3,
//     color: "from-green-600 to-yellow-500",
//   },
//   {
//     id: 6,
//     name: "Senegal",
//     flag: "🇸🇳",
//     foods: ["Thieboudienne", "Yassa", "Mafe", "Ceebu Jen", "Accra"],
//     description: "Senegalese cuisine features fresh seafood and aromatic spices",
//     restaurants: 2,
//     color: "from-green-600 to-red-600",
//   },
//   {
//     id: 7,
//     name: "Ghana",
//     flag: "🇬🇭",
//     foods: ["Fufu", "Jollof Rice", "Waakye", "Kelewele", "Banku"],
//     description: "Ghanaian food is comfort food at its finest with bold flavors",
//     restaurants: 2,
//     color: "from-red-600 to-yellow-500",
//   },
//   {
//     id: 8,
//     name: "Egypt",
//     flag: "🇪🇬",
//     foods: ["Koshari", "Falafel", "Ful Medames", "Shakshuka", "Basboosa"],
//     description: "Egyptian cuisine is one of the oldest and most diverse in Africa",
//     restaurants: 2,
//     color: "from-red-600 to-white",
//   },
// ]

// export default function CountriesPage() {
//   return (
//     <main className="min-h-screen bg-background">
//       <Header />

//       <section className="py-12 px-4 md:px-8 bg-primary/5">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">African Countries</h1>
//           <p className="text-lg text-muted-foreground">Explore cuisines from different African nations</p>
//         </div>
//       </section>

//       <section className="py-12 px-4 md:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {countries.map((country) => (
//               <Link key={country.id} href={`/countries/${country.id}`}>
//                 <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
//                   <div className={`bg-gradient-to-br ${country.color} p-8 text-white text-center`}>
//                     <div className="text-6xl mb-3">{country.flag}</div>
//                     <h3 className="text-2xl font-bold">{country.name}</h3>
//                   </div>
//                   <div className="p-4 flex-1 flex flex-col">
//                     <p className="text-sm text-muted-foreground mb-3">{country.description}</p>
//                     <div className="mb-4">
//                       <p className="text-xs text-muted-foreground mb-2 font-semibold">Popular Dishes:</p>
//                       <div className="flex flex-wrap gap-2">
//                         {country.foods.slice(0, 3).map((food, idx) => (
//                           <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
//                             {food}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="text-sm font-semibold text-foreground mt-auto">
//                       {country.restaurants} Restaurants
//                     </div>
//                   </div>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }


// app/countries/page.tsx
import Header from "@/components/header"
import { Card } from "@/components/ui/card"
import Link from "next/link"

// -------------------- Countries List --------------------
const countries = [
  {
    id: 1,
    name: "Ethiopia",
    flag: "🇪🇹",
    description: "Ethiopian cuisine is known for its unique spices and communal dining style",
    foods: ["Injera", "Doro Wot", "Misir Wot", "Tibs", "Shiro"],
    restaurants: 3,
    color: "from-red-600 to-yellow-500",
  },
  {
    id: 2,
    name: "Nigeria",
    flag: "🇳🇬",
    description: "Nigerian food is vibrant, flavorful, and reflects the country's diverse cultures",
    foods: ["Jollof Rice", "Suya", "Egusi Soup", "Pepper Soup", "Akara"],
    restaurants: 4,
    color: "from-green-600 to-white",
  },
  {
    id: 3,
    name: "Morocco",
    flag: "🇲🇦",
    description: "Moroccan cuisine blends Arabic, Berber, and Mediterranean influences",
    foods: ["Tagine", "Couscous", "Harira", "Pastilla", "Tanjia"],
    restaurants: 3,
    color: "from-red-600 to-green-600",
  },
  {
    id: 4,
    name: "Kenya",
    flag: "🇰🇪",
    description: "Kenyan food is hearty and reflects the country's agricultural heritage",
    foods: ["Ugali", "Nyama Choma", "Sukuma Wiki", "Chapati", "Githeri"],
    restaurants: 2,
    color: "from-black to-red-600",
  },
  {
    id: 5,
    name: "South Africa",
    flag: "🇿🇦",
    description: "South African cuisine is a fusion of indigenous and colonial influences",
    foods: ["Bobotie", "Bunny Chow", "Boerewors", "Sosaties", "Pap"],
    restaurants: 3,
    color: "from-green-600 to-yellow-500",
  },
]

// -------------------- Countries Page Component --------------------
export default function CountriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 px-4 md:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">African Countries</h1>
          <p className="text-lg text-muted-foreground">Explore cuisines from different African nations</p>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country) => (
              <Link key={country.id} href={`/countries/${country.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                  <div className={`bg-gradient-to-br ${country.color} p-8 text-white text-center`}>
                    <div className="text-6xl mb-3">{country.flag}</div>
                    <h3 className="text-2xl font-bold">{country.name}</h3>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-3">{country.description}</p>
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-2 font-semibold">Popular Dishes:</p>
                      <div className="flex flex-wrap gap-2">
                        {country.foods.slice(0, 3).map((food, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {food}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-foreground mt-auto">
                      {country.restaurants} Restaurants
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
