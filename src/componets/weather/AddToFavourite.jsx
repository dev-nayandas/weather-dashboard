import { useContext, useEffect, useState } from "react";
import heart from "../../assets/heart.svg"
import redHeart from "../../assets/heart-red.svg"
import { FavouriteContext  ,WeatherContext} from "../../context";
export default function AddToFavourite() {
    const {favourites, addToFavourites, removeFromFavourites} = useContext(FavouriteContext);
    const { weatherData } = useContext(WeatherContext);
    const { latitude, longitude, location } = weatherData;
    const [isFavourite, setfavourites] = useState(false);

    useEffect(() => {
        const found = favourites.find((fav) => fav.location === location);
        setfavourites(found);
    },[])
    function  handlefavourites(){
        const found = favourites.find((fav) => fav.location === location);
        if(!found){
            addToFavourites(latitude, longitude, location)
        }else{
            removeFromFavourites(location)
        }
        setfavourites(!isFavourite);
    }
    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button onClick={handlefavourites} className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
                    <span>Add to Favourite</span>
                    <img src={isFavourite ? redHeart : heart } alt="" />
                </button>

            </div>
        </div>
    );
}