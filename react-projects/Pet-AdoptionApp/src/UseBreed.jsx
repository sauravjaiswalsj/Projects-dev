import { useEffect, useState } from "react";

const localCache = {};
//custom Hooks
export default function useBreedList(animal){
    const [breedList,setBreedList] = useState([]);
    const [status,setStatus] = useState("unloaded");

    useEffect(()=>{
        if(!animal){
            setBreedList([]);
        }else if(localCache[animal]){
            setBreedList(localCache[animal]);
        }else{
            requestBreedList();
        }
        async function requestBreedList(){
            setBreedList([]);
            setStatus("loading");
            const getPets = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
            const petsData = await getPets.json();
            localCache[animal] = petsData.breeds || []
            setBreedList(localCache[animal]);
            setStatus("loaded");
        }
    },[animal]);
    return [breedList,status];
}