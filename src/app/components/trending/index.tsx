import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { CardHorizontalFood } from './food'

interface FoodProps {
    id: string
    name: string
    price: number
    time: string
    delivery: number
    rating: number
    image: string
    restaurantId: string
}

export default function TrendingFoods() {
    const [foods, setFoods] = useState([])


    useEffect(() => {
        async function getFoods() {
            const response = await fetch("http://192.168.0.23:3000/foods")
            const data = await response.json()
            setFoods(data)
        }

        getFoods()
    }, [])

    return (
        <FlatList
            data={foods}
            renderItem={({ item }) => <CardHorizontalFood />}
            horizontal={true}
        />
    );
}