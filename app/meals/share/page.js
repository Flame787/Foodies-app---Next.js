// http://localhost:3000/meals/share - a form for sharing own receipes

import classes from "./page.module.css";
import ImagePicker from "../image-picker";
import { shareMeal } from "../../../lib/actions";   
// imported this server-function from a specific file, now it can be used even in a client-component without issues (it's code stays on server-side)

export default function ShareMealPage() {
  // async function shareMeal(formData) {
  //   "use server"; // 'use server'-directive for async server functions. Here, we are adding this function to form-submition-action.

  //   const meal = {
  //     title: formData.get("title"), // getting teh value of the input-field with the name 'title' or 'summary'
  //     summary: formData.get("summary"),
  //     instructions: formData.get('instructions'),
  //     image: formData.get('image'),     // image should be stored in file system, and path should be stored to the database
  //     creator: formData.get('name'),
  //     creator_email: formData.get('email'),
  //   };
  // }

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
