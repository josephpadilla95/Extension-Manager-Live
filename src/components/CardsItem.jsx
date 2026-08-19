import { Toggle } from "rsuite";
import 'rsuite/Toggle/styles/index.css';
import LogoItemCard from '../assets/images/logo-json-wizard.svg'

export const CardsItem = ({ logo, name, description, isActive }) => {
  return (
    <div className="bg-Neutral-0 rounded-2xl shadow-md p-[15px] flex flex-col gap-y-4 border border-Neutral-200 dark:bg-Neutral-800 dark:border-Neutral-600">
      <div className="flex flex-row gap-x-4 items-start">
        <img className="w-[50px]" src={LogoItemCard} alt="" />
        <div>
          <h4 className="font-semibold mb-[5px] dark:text-Neutral-0">{name}</h4>
          <p className="text-[13px] dark:text-Neutral-0">{description}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <button className="cursor-pointer text-[15px] font-medium border border-Neutral-300 py-[3px] px-[14px] rounded-full dark:text-Neutral-0 dark:border-Neutral-600 hover:bg-Neutral-600 hover:text-Neutral-0 transition duration-300 ease-in-out">
          Remove
        </button>
        <Toggle color="red" checked={isActive} />
      </div>
    </div>
  );
};
