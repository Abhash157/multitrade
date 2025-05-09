"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Part {
  id: string
  name: string
  category: string
  price: number
  count: number
}

interface MaintenanceRequest {
  id: string
  service: string
  description: string
  status: 'pending' | 'in-progress' | 'completed'
  date: string
}

interface Order {
  id: string
  parts: Part[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
  date: string
}

interface AppContextType {
  cart: Part[]
  orders: Order[]
  maintenanceRequests: MaintenanceRequest[]
  addToCart: (part: Part) => void
  removeFromCart: (partId: string) => void
  createMaintenanceRequest: (service: string, description: string) => void
  createOrder: (parts: Part[]) => void
  searchParts: (query: string) => Part[]
  filterParts: (category: string) => Part[]
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Part[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [maintenanceRequests, setMaintenanceRequests] = useState<MaintenanceRequest[]>([])

  const addToCart = (part: Part) => {
    setCart([...cart, part])
  }

  const removeFromCart = (partId: string) => {
    setCart(cart.filter(part => part.id !== partId))
  }

  const createMaintenanceRequest = (service: string, description: string) => {
    const newRequest: MaintenanceRequest = {
      id: Date.now().toString(),
      service,
      description,
      status: 'pending',
      date: new Date().toISOString(),
    }
    setMaintenanceRequests([...maintenanceRequests, newRequest])
  }

  const createOrder = (parts: Part[]) => {
    const newOrder: Order = {
      id: Date.now().toString(),
      parts,
      total: parts.reduce((sum, part) => sum + part.price, 0),
      status: 'pending',
      date: new Date().toISOString(),
    }
    setOrders([...orders, newOrder])
    setCart([]) // Clear cart after order
  }

  const searchParts = (query: string) => {
    // This would typically call an API
    return [] // Placeholder
  }

  const filterParts = (category: string) => {
    // This would typically call an API
    return [] // Placeholder
  }

  return (
    <AppContext.Provider
      value={{
        cart,
        orders,
        maintenanceRequests,
        addToCart,
        removeFromCart,
        createMaintenanceRequest,
        createOrder,
        searchParts,
        filterParts,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
} 