import { FiInfo, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';

interface ItemIssue {
    item: any;
}

export const IssueItem = ({item} : ItemIssue) => {
    // console.log('Item: ', item);
    return (
        <div className="card mb-2 issue">
            <div className="card-body d-flex align-items-center">
                {/* <FiInfo size={30} color="red" /> */}
                {/* <FiCheckCircle size={30} color="green" /> */}
                {
                    item.state === open 
                    ? <FiInfo size={30} color="red" />
                    : <FiCheckCircle size={30} color="green" />
                }

                <div className="d-flex flex-column flex-fill px-2">
                    <span>{item.title}</span>
                    <span className="issue-subinfo">#{item.number} opened 2 days ago by <span className='fw-bold'>{item.user.login}</span></span>
                </div>

                <div className='d-flex align-items-center'>
                    <img src={item.user.avatar_url} alt="User Avatar" className="avatar" />
                    <span className='px-2'>{item.comments}</span>
                    <FiMessageSquare />
                </div>

            </div>
        </div>
    )
}
