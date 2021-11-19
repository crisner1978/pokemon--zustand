import useStore from "../store";

const PokemonTable = () => {
  const pokemon = useStore((s) => s.pokemon);
  const filter = useStore((s) => s.filter);

  return (
    <table width="100%">
      <tbody>
        {pokemon
          .filter((p) =>
            p.name.toLowerCase().includes(filter.toLocaleLowerCase())
          )
          .map((p) => (
            <tr key={p.name}>
              <td>{p.name}</td>
              <td>{p.url}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
