import React from 'react';
import ReactDOM from 'react-dom/client';
import MyImage from "../images/logo.jpg";

const Title = ()=>(
    <a href="/">
    <img className='logo'
    src= {MyImage}
    alt="logo" />
    </a>
)

//JSX => React.createElement => Object => HTML(DOM)
const Header = () =>(
    <div className='header'>
        <Title />
        <div className= "nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
            
        </div>
    </div>
)


const restaurantList = [
    {
        id: 1,
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63a5569f00995b064bfd054f3941592b",
        name: 'Burger Singh',
        cuisine: ["Burgers", "Punjabi"],
        rating: "4.5",
    },
    {   
        id: 2,
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
        name: 'Burger King',
        cuisine: ["Burgers", "American"],
        rating: "4.2",
    },
    {
        id: 3,
        image: "https://img.paisawapas.com/ovz3vew9pw/2022/08/06165923/dominos-pizza-delivery-train.png",
        name: 'Dominos',
        cuisine: ["Pizza", "Italian"],
        rating: "4.6",
    }
]


const RestaurantCard = ({image, name, cuisine, rating}) => {
    

    return (
        <div className='card'>
            <img src= {image} alt="food image" />
            <h2>{name}</h2>
            <h4>{cuisine.join(", ")}</h4>
            <h5>{rating} ⭐</h5>
        </div>
    )
}

const Body = () => {
    
    return(
    <div className="card-list">
        {
            restaurantList.map(res =>{
                return <RestaurantCard {...res} key={res.id} />
            })
        }
    </div> 
)
}



const AppLayout = ()=>{
    return (
        <>
            <Header />
            <Body />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)

