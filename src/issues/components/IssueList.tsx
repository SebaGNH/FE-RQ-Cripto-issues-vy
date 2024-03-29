import { FC } from 'react';
import { IssueItem } from './IssueItem';
import { Issue } from '../../interfaces/issue';

interface Props {
    data: Issue[];
}

export const IssueList:FC<Props> = ({data}) => {
    // console.log('Data Issue', data);
    return (
        <div className="card border-white">
            <div className="card-header bg-dark">
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <a className="nav-link active">All</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Open</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Closed</a>
                    </li>
                </ul>
            </div>
            <div className="card-body text-dark">
                {
                    data.map( item  => (
                        <IssueItem item={item} key={item.id}/>
                    ))
                }
            </div>
        </div>
    )
}
{/* <IssueItem key={issue} /> */}