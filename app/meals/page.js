import MealsGrid from "../../components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import { getMeals } from "../../lib/meals";
import { Suspense } from "react";
// Suspense - a component provided by React that allows us to handle loading states and show fallback-content until data is loaded

// separate component to be used while the meals are being loaded:
// idea: this component will fetch the data. We are outsorcing the data-fetching part into a separate component:
async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

// Server components can be turned into async-components by adding 'async' before the 'function' keyword (not usual in React):
// export default async function MealsPage() {   // removed async, because now it happens in the Meals-component
export default function MealsPage() {
  // const meals = await getMeals();
  // getting meals directly from the database (using the getMeals-function from lib/meals.js), without using any client-side fetch-requests

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        {/* <MealsGrid meals={meals} />   */}
        {/* passing the fetched meals to the MealsGrid component */}
        <Suspense fallback ={<p className={classes.loading}>Fetching meals...</p>}>
          <Meals />
          {/* added Meals-component here, it will be fetching data and rendering the meals, instead of MealsGrid-component */}
        </Suspense>
        {/* now the header will be there all the time, but Meals underneath will be showing Loader first, and then fetched data,
        because it is wrapped in Suspense - better user experience */}
      </main>
    </>
  );
}
