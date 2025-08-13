"use client"
import React, { useEffect, useState } from "react";

export default function MealsPage() {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');


    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const data = await res.json();
            return setMeals(data?.meals || []);
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    useEffect(() => {
        fetchMeals();
    }, [search]);

    return (
        <div>
            <div>
                <input className="border-2 border-black" placeholder="search"    type="text" value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            {
                meals.map(meal => {
                    return <div>
                        <div>
                            <p>Name: {meal?.strMeal}</p>
                            <p>Origin: {meal?.strArea}</p>
                            <img src={meal?.strMealThumb} alt="" />
                            <p>description: {meal?.strInstructions}</p>
                        </div>
                    </div>
                })
            }
        </div>
    );
}