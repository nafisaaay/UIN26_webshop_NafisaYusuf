import PokemonCard from "./PokemonCard";

export default function PokemonList({pokemons}){
    return (
        <section className="flex">  
            <h2>Pokemons</h2>
            {pokemons?.map((pokemon) => (<PokemonCard key={pokemon.id} url={pokemon.url} />)  
            )}
        </section>
    )
}