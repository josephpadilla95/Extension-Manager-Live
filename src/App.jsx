import { Header } from "./components/Header";
import { Filters } from "./components/Filters";
import { CardsItem } from "./components/CardsItem";
import { useEffect, useState } from "react";
import { getDataCard } from "./helpers/getDataCard";

function App() {
  const savedIdButtonFilter = localStorage.getItem( "idButtonFilter" );
  const valSavedButtonFilter = JSON.parse( savedIdButtonFilter ) || 1;
  const [cargarCard, setCargarCard] = useState([]);
  const [activeButton, setActiveButton] = useState(valSavedButtonFilter);

  const buttonFilterList = [
    {
      id: 1,
      name: "All",
      valIsActive: "",
    },
    {
      id: 2,
      name: "Active",
      valIsActive: true,
    },
    {
      id: 3,
      name: "Inactive",
      valIsActive: false,
    },
  ];

  useEffect(() => {
    const cardData = async () => {
      const datosTarjeta = await getDataCard(activeButton);
      setCargarCard(datosTarjeta);
    };

    cardData();
  }, []); // <-- Corchetes vacíos para que SOLO se ejecute UNA VEZ al cargar la página

  const handleChangeCardFilter = async (idButtonFilter) => {
    setActiveButton(idButtonFilter);
    localStorage.setItem( "idButtonFilter" , idButtonFilter );

    const listCardFilter = await getDataCard( idButtonFilter);

    setCargarCard(listCardFilter);
  };

  return (
    <main className="font-NotoSans light-gradient dark:dark-gradient min-h-screen flex flex-col items-center">
      <section className="w-[343px] my-6 md:w-[672px] lg:w-[980px] 2xl:w-[1440px]">
        <Header />
        <Filters
          buttonFilterList={buttonFilterList}
          onActiveButton={handleChangeCardFilter}
          activeButton={activeButton}
        />
        <section className="grid grid-cols-1 gap-y-3 my-[1.8rem] md:my-[0.8rem] md:grid-cols-2 md:gap-x-3 lg:grid-cols-3">
          {cargarCard.map((value) => {
            return <CardsItem key={value.name} {...value} />;
          })}
        </section>
      </section>
    </main>
  );
}

export default App;
