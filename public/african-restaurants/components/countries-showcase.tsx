import { Card } from "@/components/ui/card"
import Link from "next/link"

const countries = [
  {
    id: 1,
    name: "Ethiopia",
    flag: "🇪🇹",
    foods: ["Injera", "Doro Wot", "Misir Wot"],
    color: "from-red-600 to-yellow-500",
  },
  {
    id: 2,
    name: "Nigeria",
    flag: "🇳🇬",
    foods: ["Jollof Rice", "Suya", "Egusi Soup"],
    color: "from-green-600 to-white",
  },
  {
    id: 3,
    name: "Morocco",
    flag: "🇲🇦",
    foods: ["Tagine", "Couscous", "Harira"],
    color: "from-red-600 to-green-600",
  },
  {
    id: 4,
    name: "Kenya",
    flag: "🇰🇪",
    foods: ["Ugali", "Nyama Choma", "Sukuma Wiki"],
    color: "from-black to-red-600",
  },
  {
    id: 5,
    name: "South Africa",
    flag: "🇿🇦",
    foods: ["Bobotie", "Bunny Chow", "Boerewors"],
    color: "from-green-600 to-yellow-500",
  },
  {
    id: 6,
    name: "Senegal",
    flag: "🇸🇳",
    foods: ["Thieboudienne", "Yassa", "Mafe"],
    color: "from-green-600 to-red-600",
  },
]

export default function CountriesShowcase() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">African Countries</h2>
          <p className="text-muted-foreground">Explore cuisines from different African nations</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country) => (
            <Link key={country.id} href={`/countries/${country.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className={`bg-gradient-to-br ${country.color} p-8 text-white text-center`}>
                  <div className="text-6xl mb-3">{country.flag}</div>
                  <h3 className="text-2xl font-bold">{country.name}</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-3">Popular Dishes:</p>
                  <div className="flex flex-wrap gap-2">
                    {country.foods.map((food, idx) => (
                      <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {food}
                      </span>
                    ))}
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
