import { FavouriteContext } from "../context"
import { useLocalStorage } from "../hooks"


const FavouriteProvider = ({children})=>{
    const [favourites, setfavourites] = useLocalStorage("favourites", [])

    const addToFavourites = (latitude, longitude , location) =>{
        setfavourites([
            ...favourites,
            {latitude: latitude, longitude: longitude,location: location}]
        )
    }

    const removeFromFavourites = (location) =>{
        const restFavourites = favourites.filter((fav) => fav.location !== location)
        setfavourites(restFavourites)
    }


    return(
        <FavouriteContext.Provider value={{favourites, addToFavourites, removeFromFavourites}}>
            {children}
        </FavouriteContext.Provider>
    )
}

export default FavouriteProvider