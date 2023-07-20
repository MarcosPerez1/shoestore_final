import { useState, useEffect } from "react"
import { info } from "../services"

export const useProducts = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await info.products()
        setData(response.data)
        setIsLoading(false)
      } catch (error) {

        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { data, isLoading }
}
