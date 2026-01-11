import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

// working on db-object, to perform actions on the database:
// Async-function, to match the async function in meals/page.js where this function will be used:
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // simulating network delay of 2s (we would't use it normally, just here to slow down the app)

  // throw new Error('Loading meals failed'); // simulating an error during data fetching
  return db.prepare("SELECT * FROM meals").all(); // not using run-method, but all-method to get all (multiple) rows from the meals-table
  // run() would be used for insert, update, delete operations
  // get() if we want to fetch only a single row
}

// returning a single meal:

// export async function getMeal(slug) {    // async-await not needed here
export function getMeal(slug) {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

// storing a single new meal:

export function saveMeal(meal) {
  // we would like to generate a slug for every new meal, and we don't get slug from the form, but we generate it here based on the title,
  // this is done with help of the package called 'slugify'
  // we will also install package 'xss' to protect us from xss-attacks (cross-site scripting attacks) - users could post a malitious script

  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
}
