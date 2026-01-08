import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";

export default function MealDetailsPage({ params }) {
  console.log("params:", params);
  console.log("mealSlug:", params.mealsSlug);

  const meal = getMeal(params.mealsSlug);
  console.log("meal:", meal);

  // throwing Not-found errors for individual meals - special function in Next.js - notFound():
  if (!meal) {
    notFound();
  }

  // to fix the look of html-content in 'instructions', we can overwrite:
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  // RegExp - look for all line breaks (\n) and replace them with <br>, so content is shown in separated rows.

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
        {/* dangerouslySetInnerHTML - for outputting HTML-code in React */}
      </main>
    </>
  );
}
