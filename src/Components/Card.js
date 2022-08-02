import React from 'react';
import './style.css';
import { FcContacts } from 'react-icons/fc';
import { TiLocation } from 'react-icons/ti'
import { AiOutlinePhone } from 'react-icons/ai'
const Card = () => {
    return (
        <div>

            <div>
                <img className='image' src="/profile.png" alt="" />
            </div>

            <div >
                <img className='side-image' src="side.png" alt="" />
                <h3  >
                    MuhammadAbdullah
                </h3>

                <div className='grid'>
                    <div className='icon1'>
                        <FcContacts />
                    </div>
                    <p>
                        CEO Avicenna Enterprise
                    </p>
                    <p>
                        Solutions
                    </p>
                    <p>
                        Business Developer
                    </p>
                    <p>
                        iOS Developer
                    </p>

                    <div className='icon'>
                        <AiOutlinePhone />
                    </div>
                    <p>
                        +923200001511
                    </p>

                    <div className='icon'>
                        <TiLocation />
                    </div>
                    <p>

                        Lahore, Pakistan
                    </p>

                </div>

                <div>
                    <button className='btn'>
                        +Add to Contact
                    </button>

                </div>

            </div>





        </div>
    )
}

export default Card;