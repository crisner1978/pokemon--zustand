import useStore from "../store";

function FilterInput() {
    const {filter, setFilter } = useStore((s) => s);
  
    return <input value={filter} onChange={(e) => setFilter(e.target.value)} />;
  }
  

export default FilterInput
