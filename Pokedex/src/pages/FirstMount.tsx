import React from "react";
import './FirstMount.css'
import pokeballIMG from "../assets/pokeball.png"
import axios from "axios";
import PokeCard from "../components/PokeCard";
import PokeModal from './../components/PokeModal';





const FirstMount = () => {
    const [pokedex, setPokedex] = React.useState(true)
    const [loader, setLoader] = React.useState(false)
    const [pokemonList, setPokemonList] = React.useState([{name: "", url: ""}])
    const [modalShow, setModalShow] = React.useState(false);
    const [value, setValue] = React.useState("")

    function handleClick(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault();

        setPokedex(false)
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 3000)
        loadPokedex();

    }

    function loadPokedex() {

            axios
                .get("https://pokeapi.co/api/v2/pokemon?limit=1008&offset=0")
                .then((response) => {
                    setPokemonList(response.data.results)
                    console.log(response.data.results)
                })
                .catch((error) => {
                    console.log(error)
                })
    }

    function handleShowModal(e: React.MouseEvent<HTMLDivElement>) {
      e.preventDefault();
      setValue(e.currentTarget.id)
      setModalShow(true);
    }

  return (
    <>
      <div className="pokedex-container" >
        { pokedex && <div className="pokedex" onClick={handleClick}></div>}
        { loader && <img src={pokeballIMG} alt="pokeball" className="pokeball" />}
        <div className="pokeCardWrap">
        { !pokedex && !loader && pokemonList.map((pokemon, i) => {
            return <PokeCard name={pokemon.name} url={pokemon.url} key={i} number={i+1} mostraModal={handleShowModal} />
         }) 
         }
        { modalShow && <PokeModal name={value} /> }

         </div>
 
      </div>
    </>
  );
};

export default FirstMount;
