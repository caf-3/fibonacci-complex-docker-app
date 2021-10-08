import { Link } from 'react-router-dom';

export default () => {
    return(
        <div className="page404">
            <h1>404</h1>
            <Link to="/">Go back home</Link>
        </div>
    )
}