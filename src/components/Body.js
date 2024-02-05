import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input className="searchText" type="text"></input>
            </div>
            <div className="res-container">
                {
                    resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
                {/* <RestaurantCard resData={resList[0]}/> */}
                {/* <RestaurantCard resName="Pizza Corner" cuisine="Pizza, Italian"/> */}
            </div>
        </div>
    )
}

export default Body;