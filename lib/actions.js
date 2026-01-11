'use server';   // when this directive is on top of the file, all actions inside of the file will be treated as server-functions

 export async function shareMeal(formData) {
    // "use server"; 

    const meal = {
      title: formData.get("title"), // getting teh value of the input-field with the name 'title' or 'summary'
      summary: formData.get("summary"),
      instructions: formData.get('instructions'), 
      image: formData.get('image'),     // image should be stored in file system, and path should be stored to the database
      creator: formData.get('name'), 
      creator_email: formData.get('email'), 
    };
  }