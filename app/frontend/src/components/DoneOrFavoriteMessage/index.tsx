import { P } from './message.styles';

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
        <P>{`You don't have any ${doneOrFav} recipe. `}</P>
      ) : null}
      {!mealUserId && filter === 'meals' ? (
        <P>{`You don't have any ${doneOrFav} meal. `}</P>
      ) : null}
      {!drinkUserId && filter === 'drinks' ? (
        <P>{`You don't have any ${doneOrFav} drink. `}</P>
      ) : null}
    </>

  );
}

export default DoneOrFavoriteMessage;
