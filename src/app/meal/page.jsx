import MealSearchInput from "./components/MealSearchInput";
import style from "./details.module.css"

export default async function MealsPage({searchParams}) {
    const query = searchParams;

    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
            const data = await res.json();
            return data.meals;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
    const meals = await fetchMeals() || [];

    return (
        <div>
            <MealSearchInput></MealSearchInput>
            {
                meals.map(meal => {
                    return <div>
                        <div className={style["post-body"]}>
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