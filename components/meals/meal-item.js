import classes from "./meal-item.module.css";
import Link from "next/link";
import Image from "next/image";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
          {/* automatically detects dimensions of the pictures that users will be uploading - better image optimisation */}
          {/* fill - tells to Next.js that it should just fill the available space with the uploaded image */}
          {/* but if we know the img-dimensions up front, we should add wanted width & height here, instead of just 'fill' */}
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
          {/* dynamic 'slug' - route will be different for every meal */}
        </div>
      </div>
    </article>
  );
}
