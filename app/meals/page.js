import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "../component/meals/meals-grid";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicius Meals, create{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
