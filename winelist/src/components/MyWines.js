import './MyWines.css'
import { useState } from 'react'




const MyWines = ({loggedInUserId}) => {
    const wineListHolder = [{name: 'Clare Valley Red', location: 'Clare Valley, NSW', brewYear: 1997, drinkYear: 2021, balance: {sweetness: 5, acidity: 5, tannin: 5, alcohol: 5}, length: 10, depth: 10, complexity: 10, finish: 10, typicity: 'idk'}]
    const [wineList, setWineList] = useState([])

    return (
        <div>
            <h2>Your Favourite Winelist</h2>
            <div className="wineTypes">
            <p className='wineType'>Red</p>
            <p className='wineType'>White</p>
            <p className='wineType'>Rose</p>
            <p className='wineType'>Champagne</p>
            </div>

        </div>
    )
}

export default MyWines