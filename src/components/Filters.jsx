import { useState } from "react";
import { ButtonFilter } from "./ButtonFilter";

export const Filters = ({ buttonFilterList, onActiveButton, activeButton }) => {

  const styleButton =
    "border border-Neutral-300 hover:text-Neutral-0 hover:bg-Red-500 rounded-full py-2 px-5 cursor-pointer dark:border-Neutral-900";

  return (
    <div className="flex flex-col md:flex-row justify-between items-center pt-8 pb-4 md:mt-4">
      <h2 className="text-center text-2xl mb-4 md:mb-0 font-semibold text-Neutral-900 dark:text-Neutral-0">
        Extensions List
      </h2>
      <div className="flex flex-row gap-x-4 justify-center">
        {buttonFilterList.map((value) => {
          return (
            <ButtonFilter
              key={value.id}
              id={ value.id }
              name={value.name}
              active={value.id === activeButton}
              valIsActive={value.valIsActive}
              style={styleButton}
              onButtonClick={onActiveButton}
            />
          );
        })}
      </div>
    </div>
  );
};
