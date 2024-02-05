import {CDN_URL} from '../utils/constants.js'

const styleCard = {
    backgroundColor: "lightgrey"
}

const RestaurantCard  = (props) => {
    const { resData } = props;
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo} = resData?.info;
    return (
        <div className="res-card" style={styleCard}>
            <img src={CDN_URL+cloudinaryImageId} className="res-logo" alt="res-logo"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;