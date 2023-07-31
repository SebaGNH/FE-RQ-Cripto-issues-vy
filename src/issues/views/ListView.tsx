import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../../hooks';
import { LoadingIcon } from '../../shared/icons/LoadingIcon';




export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const { data, isLoading } = useIssues();
  // console.log('dataIssuesQuery: ', data); // Array(30) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]

  const onLabelChange = ( labelName: string) => {
    // console.log(labelName);
    // si incluye el labelName lo remueve, si no existe lo agrega
    (selectedLabels.includes(labelName))
    ? setSelectedLabels(selectedLabels.filter (label => label !== labelName))
    : setSelectedLabels([...selectedLabels,labelName]); //add new
  }

  console.log('Data List', data);
  return (
    <div className="row mt-5">
      <div className="col-8">
        {
          isLoading
          ? <LoadingIcon />
          // sin data envía array vacío
          : <IssueList data={data || []}/>
          /* : <IssueList data={data}/> */
        }
      </div>
      <div className="col-4">
        <LabelPicker
          selectedLabels={selectedLabels}
          onChange={ (labelName) => onLabelChange(labelName)}
        />
      </div>
    </div>
  )
}
