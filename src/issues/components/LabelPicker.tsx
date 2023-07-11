// import { useQuery } from "@tanstack/react-query";
// import axios from 'axios';
import { useLabelsHook } from "../../hooks/useLabelsHook";


// Convertido a custom hook
/* const getLabels = async () => {
  const urlAPI = `https://api.github.com/repos/facebook/react/labels`;
  const { data } = await axios.get(urlAPI);
  return data;
} */

export const LabelPicker = () => {

  // Convertido a custom hook
  //const {data: datalbl} = useQuery(['labels'], getLabels);
  // console.log(datalbl);

  const {data, isLoading} = useLabelsHook();
  console.log(data)

  if (isLoading) ( <h1>Loading...</h1>)

  return (
    <div>
        {
          data?.map( (date : any)=> (
            <span
                key={date.id}
                className="badge rounded-pill m-1 label-picker"
                style={{ border: `1px solid #${date.color}`, color: `#${date.color}` }}
            >
                {date.name}
            </span>
          ))
        }
    </div>
  )
}
