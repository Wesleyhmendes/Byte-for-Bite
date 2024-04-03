type DoneOrFavoriteMessageProps = {
  mealUserId: number | undefined;
  drinkUserId: number | undefined;
  filter: string;
  doneOrFav: 'done' | 'favorite'
};

function DoneOrFavoriteMessage({
  mealUserId,
  drinkUserId,
  filter,
  doneOrFav,
}: DoneOrFavoriteMessageProps) {
  return (
    <>
      {!mealUserId && !drinkUserId && filter === 'all' ? (
        <p>{`You don't have any ${doneOrFav} recipe. `}</p>
      ) : null}
      {!mealUserId && filter === 'meals' ? (
        <p>{`You don't have any ${doneOrFav} meal. `}</p>
      ) : null}
      {!drinkUserId && filter === 'drinks' ? (
        <p>{`You don't have any ${doneOrFav} drink. `}</p>
      ) : null}
    </>

  );
}

export default DoneOrFavoriteMessage;
