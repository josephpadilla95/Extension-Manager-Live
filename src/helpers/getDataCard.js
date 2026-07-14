export const getDataCard = async (idButtonFilter) => {
  try {
    const res = await fetch("/data.json");
    const data = await res.json();

    /*const dataFilter =
      idButtonFilter == 1
        ? data
        : idButtonFilter == 2
          ? data.filter((value) => value.isActive == true)
          : data.filter((value) => value.isActive == false);*/

    // 🚀 Lógica única de filtrado en un lugar centralizado
    if (idButtonFilter === 2) {
      return data.filter((value) => value.isActive === true); // Solo activos
    }

    if (idButtonFilter === 3) {
      return data.filter((value) => value.isActive === false); // Solo inactivos
    }

    return data; // Si es el botón 1 (All) o cualquier otro caso, devuelve TODO

    return dataFilter;
  } catch (error) {
    console.error("Error al cargar el archivo JSON:", error);
  }
};
