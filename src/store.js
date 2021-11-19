import create from "zustand";
import axios from "axios";
import { mountStoreDevtool } from "simple-zustand-devtools";

const useStore = create((set) => ({
  pokemon: [],
  filter: "",
  setPokemon: (pokemon) => set({ pokemon }),
  setFilter: (filter) => set({ filter }),
}));

axios
  .get("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.data.results)
  .then((pokemon) =>
    useStore.setState((state) => ({
      ...state,
      pokemon,
    }))
  );

  if(process.env.NODE_ENV === 'development'){
    mountStoreDevtool('Store', useStore);
  }

export default useStore;
