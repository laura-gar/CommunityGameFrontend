import UserLogo from '../../Logos/UserLogo';
import './Review.css';

function Review({ review }) {
    return (
        <div className='review-card card p-3 pb-5 mt-2'>
            <div className="row">
                <div className="col d-flex justify-content-end">
                    <p>Edit</p>
                    <p>Delete</p>
                </div>
            </div>
            <div className="row d-flex align-items-center">
                <div className="col-2 d-flex align-items-center">
                    <UserLogo username={review.user.username} />
                    <div className='w-50'>
                        <h5>{review.user.username}</h5>
                        <p className='m-0'>{review.timeStamp}</p>
                    </div>
                </div>
                <div className="col">
                    <p className='m-0'>“{review.text}”</p>
                </div>
                <div className="col-2 col-xl-1">
                    <p className='border border-3 rounded-circle d-flex align-items-center justify-content-center m-0' style={{ width: '75px', height: '75px' }}>
                        {review.score}/10
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Review
