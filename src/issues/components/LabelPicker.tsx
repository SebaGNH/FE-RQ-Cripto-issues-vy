// import { useQuery } from "@tanstack/react-query";
// import axios from 'axios';
import { useLabelsHook } from "../../hooks/useLabelsHook";
import { FC } from 'react';


// Convertido a custom hook
/* const getLabels = async () => {
  const urlAPI = `https://api.github.com/repos/facebook/react/labels`;
  const { data } = await axios.get(urlAPI);
  return data;
} */

// se crea en el hijo, quien recibe la data
interface Props {
  selectedLabels: string[];
  onChange: (labelName: string) => void;
}
// FC de functional component y lo importamos
export const LabelPicker: FC<Props> = ({selectedLabels, onChange}) => {

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
                className={`badge rounded-pill m-1 label-picker ${ selectedLabels.includes(date.name) ? 'label-active':'' } `}
                style={{ border: `1px solid #${date.color}`, color: `#${date.color}` }}
                onClick={ () => onChange(date.name)}
            >
                {date.name}
            </span>
          ))
        }
    </div>
  )
}
