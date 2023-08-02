import React, { useState } from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import Button from '../components/Button'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Product = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const bassBoost = [{
        text: "Oui",
        value: true
    },
    {
        text: "Non",
        value: false
    }];

    const { state } = location;
    const [form, setForm] = useState({
        id: "",
        name: '',
        image: '',
        price: "",
        sell: 0,
        options: {
            batterylife: "",
            bassBoost: null,
            db: "",
            bluetooth: ""
        },
    })

    const modifyDetect = () => {
        if (state) {
            setForm(state);
        }
        else return false;
    }
    useEffect(() => {
        modifyDetect();
    }, []);


    const handleForm = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedForm = { ...form, options: { ...form.options } };
        formData.forEach((value, name) => {
            if (name === "bassBoost") {
                updatedForm.options[name] = value === "true";
            } else if (["bluetooth", "db", "batterylife"].includes(name)) {
                updatedForm.options[name] = value;
            } else {
                updatedForm[name] = value;
            }
        });
        if (!state) {
            try {
                const response = await fetch("http://localhost:5500/monos", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(updatedForm)
                })
                if (!response.ok) {
                    throw new Error("Erreur POST données");
                }
                const data = await response.json();
                setForm(data);
            } catch (error) {
                console.error("Error de fetch:", error.message);

            };
        }
        else {
            try {
                const response = await fetch("http://localhost:5500/monos", {
                    method: "PUT",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(updatedForm)
                })
                if (!response.ok) {
                    throw new Error("Erreur POST données");
                }
                const data = await response.json();
                setForm(data);
            } catch (error) {
                console.error("Error de fetch:", error.message);

            };

        }
        navigate("/");
    }


    return (
        <>
            <div id="product">
                <div className="container">
                    <div className="form-container">
                        <form onSubmit={handleForm}>
                            <div className="grid-container">
                                <div className="form-wrap">
                                    <label htmlFor="input-name">Marque :</label>
                                    <input type="text" name="name" id="input-name" defaultValue={form.name} />
                                </div>
                                <div className="form-wrap">
                                    <label htmlFor="input-id">Modèle :</label>
                                    <input type="text" name="id" id="input-id" defaultValue={form.id} />
                                </div>
                                <div className="form-wrap">
                                    <label htmlFor="input-bassBoost">Bassboost :</label>
                                    <select name="bassBoost" className="custom-select" id="input-bassBoost" defaultValue={state ? state.options.bassBoost : form.options.bassBoost}>
                                        {bassBoost.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.text}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-wrap">
                                    <label htmlFor="input-image">Image :</label>
                                    <input type="text" name="image" id="input-image" placeholder='url:' defaultValue={form.image} />
                                </div>
                                <div className="form-wrap">
                                    <label htmlFor="input-db">Puissance :</label>
                                    <input type="number" name="db" id="input-db" placeholder="db" defaultValue={form.options.db} />
                                </div>
                                <div className="form-wrap">
                                    <label htmlFor="input-batterylife">Batterie :</label>
                                    <input type="number" name="batterylife" id="input-batterylife" placeholder="hrs" defaultValue={form.options.batterylife} />
                                </div>
                                <div className="form-wrap">
                                    <label htmlFor="input-bluetooth">Bluetooth :</label>
                                    <input type="number" name="bluetooth" id="input-bluetooth" placeholder="version" defaultValue={form.options.bluetooth} step="0.01" />
                                </div>
                                <div className="form-wrap">
                                    <label htmlFor="input-price">Prix :</label>
                                    <input type="number" name="price" id="input-price" placeholder='€' defaultValue={form.price} step="0.01" />
                                </div>
                            </div>
                            <div className="btn-wrap">
                                <Button className='btn-submit' type="submit" >
                                    <MdOutlineArrowForwardIos />
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;