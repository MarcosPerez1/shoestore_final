import { useState, useEffect } from "react"
import { mostFavs} from "../services"

export const useFavs = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await mostFavs.mostFavourites()
        console.log(response)
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
