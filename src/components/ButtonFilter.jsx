export const ButtonFilter = ({ name, active, style, onButtonClick, id, valIsActive}) => {

  return (
    <button
      className={
        active
          ? ` bg-Red-500 text-Neutral-0 ${style} dark:text-Neutral-900 font-medium`
          : ` bg-Neutral-0 text-Neutral-900 ${style} dark:bg-Neutral-700 dark:text-Neutral-0`
      }
      onClick={() => onButtonClick(id, valIsActive)}
    >
      {name}
    </button>
  );
};
