import React from 'react'
import { CiGps } from 'react-icons/ci';
import { PiEngine } from 'react-icons/pi'
import { BsBatteryHalf , BsMusicPlayerFill} from 'react-icons/bs'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { ImPower } from 'react-icons/im'
import { BiBluetooth} from 'react-icons/bi'
import Button from './Button';

const Card = ({ name, image, bluetooth, bassBoost, price, sell, oid, db, batterylife, remove, modify }) => {
    return (
        <>
            <div className="card-wrap">
                <div className="image-wrap">
                    <img src={image} alt="" />
                </div>
                <div className="content-wrap">
                    <div className="title-wrap">
                        <h2> {name} - {oid}</h2>
                    </div>
                    <div className="options-wrap">
                        <div className="wrap">
                            <BsMusicPlayerFill />
                            <p> {bassBoost ? "Oui" : "Non"}</p>
                        </div>
                        <div className="wrap">
                            <BsBatteryHalf/>
                            <p>{batterylife} hrs</p>

                        </div>
                        <div className="wrap">
                            <ImPower/>
                            <p> {db} db</p>
                        </div>
                        <div className="wrap">
                            <BiBluetooth/>
                            <p>  {bluetooth} ver.</p>

                        </div>
                    </div>
                    <div className="price-wrap">
                        <h3>{price} €</h3>
                    </div>
                    <div className="reservation-wrap">
                        <p>Vendu : {sell}</p>
                    </div>
                    <div className="btn-wrap">
                        <Button className="btn btn-modify" action={modify}>
                            <AiFillEdit />
                        </Button>
                        <Button className="btn btn-delete" action={remove}>
                            <AiFillDelete />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card