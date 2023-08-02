import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="nav-wrap">
                        <div className="title-wrap">
                            <h1 onClick={() => navigate("/")}>mono-Music</h1>
                        </div>
                        <div className="icon-wrap">
                            <AiOutlinePlus
                                size='2.5rem'
                                color='black'
                                onClick={() => navigate("/product")}
                            />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Header