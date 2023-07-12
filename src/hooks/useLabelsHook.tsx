import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { sleep } from "../helpers/sleep";
import { githubApi } from "../helpers/githubApi";
import { Label } from "../interfaces/label";

const getLabels01 = async () => {
  await sleep(1); // Demora 2 segundos con el helper que creamos
  const urlAPI = `https://api.github.com/repos/facebook/react/labels`;
  const { data } = await axios.get(urlAPI);
  return data;
}


const getLabels = async ():Promise<Label[]> => {
  await sleep(1);

  const { data } = await githubApi.get<Label[]>('/labels')// ,
  // { // Los comenté ya que me daba error y seguía funcionando je
  //   headers: { // es para sobrescribir la autorización
  //     Authorization: null
  // }
  // }
  return data;
}

// Prime Hook, guardado como respaldo
export const useLabelsHook01 = () => {
  // quitamos las llaves {} que venian del query original
  const data = useQuery(['labels'], getLabels);
  return data;
}
export const useLabelsHook01b = () => {
  // quitamos las llaves {} que venian del query original
  const data = useQuery(['labels'], getLabels,{
    // considera fresca esta info por una hora, no hace peticiones por unahora
    staleTime: 1000 * 60 * 60 // 1 hora
  });
  return data;
}


export const useLabelsHook02 = () => {
  const data = useQuery(['labels'], getLabels,
  {
    // Nos muestra info como para no mostrar el isLoading
    // Minetras hace la petición muestra esta data
    // por defecto muestra esto
    // en los console log manda estos en lugar de undefined
    placeholderData: [{
      id: 725156255,
      node_id: "MDU6TGFiZWw3MjUxNTYyNTU=",
      url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue%20(taken)",
      name: "good first issue (taken)",
      color: "b60205",
      default: false
      // description: null
    },
    {
      id: 717031390,
      node_id: "MDU6TGFiZWw3MTcwMzEzOTA=",
      url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue",
      name: "good first issue",
      color: "6ce26a",
      default: true
      // description: null
    }
  ]
  });
  return data;
}
export const useLabelsHook = () => {
  const data = useQuery(['labels'], getLabels,
  {
    // staleTime: 1000 * 60 * 60,
    //
    initialData: [{
      id: 725156255,
      node_id: "MDU6TGFiZWw3MjUxNTYyNTU=",
      url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue%20(taken)",
      name: "good first issue (taken)",
      color: "b60205",
      default: false
      // description: null
    },
    {
      id: 717031390,
      node_id: "MDU6TGFiZWw3MTcwMzEzOTA=",
      url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue",
      name: "good first issue",
      color: "6ce26a",
      default: true
      // description: null
    }
  ]
  });
  return data;
}