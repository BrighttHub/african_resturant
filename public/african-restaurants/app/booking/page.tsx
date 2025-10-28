"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

const COUNTRIES = [
  { id: "ethiopia", name: "Ethiopia", flag: "🇪🇹" },
  { id: "nigeria", name: "Nigeria", flag: "🇳🇬" },
  { id: "morocco", name: "Morocco", flag: "🇲🇦" },
  { id: "kenya", name: "Kenya", flag: "🇰🇪" },
  { id: "south-africa", name: "South Africa", flag: "🇿🇦" },
  { id: "senegal", name: "Senegal", flag: "🇸🇳" },
  { id: "ghana", name: "Ghana", flag: "🇬🇭" },
  { id: "egypt", name: "Egypt", flag: "🇪🇬" },
]

const FOODS_BY_COUNTRY = {
  ethiopia: [
    { id: 1, name: "Injera", price: 12 },
    { id: 2, name: "Doro Wot", price: 14 },
    { id: 3, name: "Misir Wot", price: 11 },
    { id: 4, name: "Shiro", price: 10 },
  ],
  nigeria: [
    { id: 5, name: "Jollof Rice", price: 13 },
    { id: 6, name: "Suya", price: 12 },
    { id: 7, name: "Egusi Soup", price: 14 },
    { id: 8, name: "Akara", price: 9 },
  ],
  morocco: [
    { id: 9, name: "Tagine", price: 15 },
    { id: 10, name: "Couscous", price: 13 },
    { id: 11, name: "Pastilla", price: 14 },
    { id: 12, name: "Harira", price: 11 },
  ],
  kenya: [
    { id: 13, name: "Nyama Choma", price: 16 },
    { id: 14, name: "Ugali", price: 10 },
    { id: 15, name: "Sukuma Wiki", price: 9 },
    { id: 16, name: "Chapati", price: 8 },
  ],
  "south-africa": [
    { id: 17, name: "Bobotie", price: 14 },
    { id: 18, name: "Bunny Chow", price: 12 },
    { id: 19, name: "Sosaties", price: 13 },
    { id: 20, name: "Pap", price: 8 },
  ],
  senegal: [
    { id: 21, name: "Thieboudienne", price: 15 },
    { id: 22, name: "Yassa Chicken", price: 13 },
    { id: 23, name: "Mafe", price: 12 },
    { id: 24, name: "Accra", price: 10 },
  ],
  ghana: [
    { id: 25, name: "Fufu", price: 11 },
    { id: 26, name: "Jollof Rice", price: 13 },
    { id: 27, name: "Waakye", price: 10 },
    { id: 28, name: "Kelewele", price: 9 },
  ],
  egypt: [
    { id: 29, name: "Koshari", price: 12 },
    { id: 30, name: "Ful Medames", price: 9 },
    { id: 31, name: "Falafel", price: 8 },
    { id: 32, name: "Tanjia", price: 14 },
  ],
}

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [orderType, setOrderType] = useState<"preorder" | "dine-in" | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    selectedCountries: [] as string[],
    selectedFoods: [] as number[],
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCountryToggle = (countryId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedCountries: prev.selectedCountries.includes(countryId)
        ? prev.selectedCountries.filter((id) => id !== countryId)
        : [...prev.selectedCountries, countryId],
      selectedFoods: prev.selectedFoods.filter(
        (foodId) => !FOODS_BY_COUNTRY[countryId as keyof typeof FOODS_BY_COUNTRY]?.some((f) => f.id === foodId),
      ),
    }))
  }

  const handleFoodToggle = (foodId: number) => {
    setFormData((prev) => ({
      ...prev,
      selectedFoods: prev.selectedFoods.includes(foodId)
        ? prev.selectedFoods.filter((id) => id !== foodId)
        : [...prev.selectedFoods, foodId],
    }))
  }

  const getSelectedFoods = () => {
    const foods: any[] = []
    formData.selectedCountries.forEach((countryId) => {
      const countryFoods = FOODS_BY_COUNTRY[countryId as keyof typeof FOODS_BY_COUNTRY] || []
      foods.push(...countryFoods)
    })
    return foods
  }

  const calculateTotal = () => {
    let total = 0
    formData.selectedFoods.forEach((foodId) => {
      const allFoods = Object.values(FOODS_BY_COUNTRY).flat()
      const food = allFoods.find((f) => f.id === foodId)
      if (food) total += food.price
    })
    return total
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (orderType === "dine-in" && step < 2) {
      setStep(step + 1)
    } else if (orderType === "preorder" && step < 4) {
      setStep(step + 1)
    } else {
      // Handle final submission
      console.log("Booking submitted:", { ...formData, orderType })
      alert(
        `Booking confirmed! ${orderType === "preorder" ? "Your pre-order total is $" + calculateTotal() : "You'll choose your food at the restaurant"}. We'll contact you soon at ${formData.email}`,
      )
      setStep(1)
      setOrderType(null)
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        selectedCountries: [],
        selectedFoods: [],
      })
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        {/* Back Button */}
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
          <ChevronLeft size={20} />
          Back to Home
        </Link>

        {/* Progress Indicator */}
        <div className="flex gap-4 mb-12">
          {orderType === null
            ? [1].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-primary text-primary-foreground">
                    {s}
                  </div>
                </div>
              ))
            : [1, 2, ...(orderType === "preorder" ? [3, 4] : [])].map((s, idx) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition ${
                      s <= step ? "bg-primary text-primary-foreground" : "bg-border text-muted-foreground"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  {idx < (orderType === "preorder" ? 3 : 1) && (
                    <div className={`h-1 w-12 ${s < step ? "bg-primary" : "bg-border"}`} />
                  )}
                </div>
              ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 0: Choose Order Type */}
          {orderType === null && (
            <div className="space-y-6 bg-card p-8 rounded-xl border border-border">
              <h2 className="text-2xl font-bold text-foreground">How would you like to order?</h2>
              <p className="text-muted-foreground">Choose your preferred way to enjoy our African cuisine</p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Pre-order Option */}
                <button
                  type="button"
                  onClick={() => {
                    setOrderType("preorder")
                    setStep(1)
                  }}
                  className="p-8 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition text-left"
                >
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Pre-Order Food</h3>
                  <p className="text-muted-foreground">
                    Select and order your favorite dishes before you arrive. We'll have everything ready for you!
                  </p>
                </button>

                {/* Dine-in Option */}
                <button
                  type="button"
                  onClick={() => {
                    setOrderType("dine-in")
                    setStep(1)
                  }}
                  className="p-8 rounded-lg border-2 border-border hover:border-accent hover:bg-accent/5 transition text-left"
                >
                  <div className="text-4xl mb-4">🍽️</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Dine In & Choose</h3>
                  <p className="text-muted-foreground">
                    Come to our restaurant and explore our full menu. Our staff will help you discover new favorites!
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* Step 1: Personal Information */}
          {orderType !== null && step === 1 && (
            <div className="space-y-6 bg-card p-8 rounded-xl border border-border">
              <h2 className="text-2xl font-bold text-foreground">Your Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Time</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Number of Guests</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Select Countries (only for pre-order) */}
          {orderType === "preorder" && step === 2 && (
            <div className="space-y-6 bg-card p-8 rounded-xl border border-border">
              <h2 className="text-2xl font-bold text-foreground">Select Countries</h2>
              <p className="text-muted-foreground">Choose which African countries' cuisines you'd like to explore</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {COUNTRIES.map((country) => (
                  <button
                    key={country.id}
                    type="button"
                    onClick={() => handleCountryToggle(country.id)}
                    className={`p-4 rounded-lg border-2 transition text-center ${
                      formData.selectedCountries.includes(country.id)
                        ? "border-primary bg-primary/10"
                        : "border-border bg-background hover:border-primary/50"
                    }`}
                  >
                    <div className="text-3xl mb-2">{country.flag}</div>
                    <div className="font-medium text-foreground">{country.name}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Select Foods & Review (only for pre-order) */}
          {orderType === "preorder" && step === 3 && (
            <div className="space-y-6 bg-card p-8 rounded-xl border border-border">
              <h2 className="text-2xl font-bold text-foreground">Select Your Foods</h2>
              <p className="text-muted-foreground">Choose dishes from your selected countries</p>

              <div className="space-y-6">
                {formData.selectedCountries.map((countryId) => {
                  const country = COUNTRIES.find((c) => c.id === countryId)
                  const foods = FOODS_BY_COUNTRY[countryId as keyof typeof FOODS_BY_COUNTRY] || []

                  return (
                    <div key={countryId} className="border border-border rounded-lg p-4">
                      <h3 className="font-bold text-lg text-foreground mb-4">
                        {country?.flag} {country?.name}
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {foods.map((food) => (
                          <button
                            key={food.id}
                            type="button"
                            onClick={() => handleFoodToggle(food.id)}
                            className={`p-3 rounded-lg border-2 transition text-left ${
                              formData.selectedFoods.includes(food.id)
                                ? "border-primary bg-primary/10"
                                : "border-border bg-background hover:border-primary/50"
                            }`}
                          >
                            <div className="font-medium text-foreground">{food.name}</div>
                            <div className="text-sm text-primary font-bold">${food.price}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Order Summary */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
                <h3 className="font-bold text-lg text-foreground mb-4">Order Summary</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-foreground">
                    <span>Date & Time:</span>
                    <span className="font-medium">
                      {formData.date} at {formData.time}
                    </span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Guests:</span>
                    <span className="font-medium">{formData.guests}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Items:</span>
                    <span className="font-medium">{formData.selectedFoods.length}</span>
                  </div>
                </div>
                <div className="border-t border-primary/20 pt-4 flex justify-between text-lg font-bold text-foreground">
                  <span>Total:</span>
                  <span className="text-primary">${calculateTotal()}</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 2 Review (for dine-in) */}
          {orderType === "dine-in" && step === 2 && (
            <div className="space-y-6 bg-card p-8 rounded-xl border border-border">
              <h2 className="text-2xl font-bold text-foreground">Confirm Your Reservation</h2>

              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                <h3 className="font-bold text-lg text-foreground mb-4">Reservation Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-foreground">
                    <span>Name:</span>
                    <span className="font-medium">{formData.name}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Email:</span>
                    <span className="font-medium">{formData.email}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Phone:</span>
                    <span className="font-medium">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Date & Time:</span>
                    <span className="font-medium">
                      {formData.date} at {formData.time}
                    </span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Number of Guests:</span>
                    <span className="font-medium">{formData.guests}</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-900">
                  You'll be able to explore our full menu and choose your favorite dishes when you arrive at our
                  restaurant. Our friendly staff will be happy to guide you through our authentic African cuisine!
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-between">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  if (step === 1) {
                    setOrderType(null)
                  } else {
                    setStep(step - 1)
                  }
                }}
                className="border-primary text-primary hover:bg-primary/5"
              >
                Previous
              </Button>
            )}
            <div className="flex-1" />
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={
                (step === 1 &&
                  (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time)) ||
                (orderType === "preorder" && step === 2 && formData.selectedCountries.length === 0) ||
                (orderType === "preorder" && step === 3 && formData.selectedFoods.length === 0)
              }
            >
              {step === (orderType === "preorder" ? 3 : 2) ? "Confirm Booking" : "Next"}
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}
