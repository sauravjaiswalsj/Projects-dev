import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useBreedList from "./UseBreed";
import Results from "./Results";
import FetchSearch from "./FetchSearch";

const Animal = ["bird", "cat", "dog"];
const SearchParams = () => {
    const [requestParams, setParams] = useState({
        location: "",
        animal: "",
        breed: ""
    })
    const [animal, setAnimal] = useState("");
    const [breeds] = useBreedList(animal);

    const results = useQuery(["search", requestParams], FetchSearch);
    const pets = results?.data?.pets ?? [];

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const obj = {
                        animal: formData.get("animal") ?? "",
                        breed: formData.get("breed") ?? "",
                        location: formData.get("location") ?? "",
                    };
                    setParams(obj);
                }}
            >
                <label htmlFor="location">
                    Location
                    <input
                        name="location"
                        id="location"
                        placeholder="Location"
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        name="animal"
                        id="animal"
                        onChange={(e) => {
                            setAnimal(e.target.value);
                        }}
                    >
                        <option />
                        {Animal.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        disabled={breeds.length === 0}
                        name="breed"
                        id="breed"
                    >
                        <option />
                        {breeds.map((x) => (
                            <option key={x}>{x}</option>
                        ))}
                    </select>
                </label>

                <button

                >submit
                </button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;



/*
UseEffect way

import { useState, useEffect } from "react";
import useBreedList from "./UseBreed";
import Results from "./Results";
const Animal = ["bird", "cat", "dog"];
const SearchParams = () => {
    const [location, setLocation] = useState("");
    //const locationHooks = useState("");
    //const location = locationHooks[0];
    //const setLocation = userState[1];
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);

    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const getPets = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
        const petsData = await getPets.json();
        setPets(petsData.pets);
    }
    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
                }}
            >
                <label htmlFor="location">
                    Location
                    <input
                        onChange={(e) => setLocation(e.target.value)}
                        id="location"
                        value={location}
                        placeholder="Location"
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                            setBreed("")
                        }}
                    >
                        <option />
                        {Animal.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        disabled={breeds.length === 0}
                        id="breed"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                    >
                        <option />
                        {breeds.map((x) => (
                            <option key={x}>{x}</option>
                        ))}
                    </select>
                </label>

                <button

                >submit
                </button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;
*/