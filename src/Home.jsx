import { useNavigate } from "react-router-dom";
import Card from "./components/Card";
import { useState, useEffect } from "react";
import { CiNoWaitingSign } from "react-icons/ci";

const Home = () => {
    const [earbuds, setEarbuds] = useState([]);
    const navigate = useNavigate();

    const getEarbuds = async () => {
        try {
            const response = await fetch("http://localhost:8000/apimono/getAll");
            if (!response.ok) {
                throw new Error("Erreur récupération données");
            }
            const data = await response.json();
            setEarbuds(data);
        } catch (error) {
            console.error("Error de fetch:", error.message);
        }
    }
    
    useEffect(() => {
        getEarbuds();   
    
    }, []);
    
    const removeEarbuds = async (index, id) => {
        try {
            const copyEarbuds = [...earbuds];
            copyEarbuds.splice(index, 1);
            setEarbuds(copyEarbuds);
            const remove = await fetch(`http://localhost:8000/apimono/delete/${id}`, { method: 'DELETE' });
            if (!remove.ok) {
                throw new Error("Impossible de supprimer");
            }
        } catch (error) {
            console.error("Erreur de suppression:", error.message);
        }
    
    }

    const modifyEarbuds = (earbud) => {
        navigate(`/product`, {state: earbud  })
    }

    const listEarbuds = earbuds.map((earbud, index) => {
        return (
            <Card
                key={earbud._id}
                oid={earbud.id}
                name={earbud.name}
                price={earbud.price}
                image={earbud.image}
                sell={earbud.sell}
                db={earbud.options.db}
                bluetooth={earbud.options.bluetooth}
                batterylife={earbud.options.batterylife}
                bassBoost={earbud.options.bassBoost}
                modify={() => modifyEarbuds(earbud)}
                remove={() => removeEarbuds(index, earbud._id)}
            />
        );
    })
    return (
        <>
            <div id="home">
                <div className="container">
                    <div className="card-container">
                        {listEarbuds}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
