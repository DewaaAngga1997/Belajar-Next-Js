export default function MealDetailsPage(params) {
  return (
    <div>
      <h1>Meals Detail</h1>
      <p>{params.params.mealSlug}</p>
    </div>
  );
}
