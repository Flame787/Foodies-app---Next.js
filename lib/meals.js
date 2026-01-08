import sql from "better-sqlite3";

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
