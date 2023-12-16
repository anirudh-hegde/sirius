// Navigation Bar
import React from 'react'


export default function Navbar(props) {
    return (
        <nav class="navbar navbar-expand-lg " style={{ backgroundColor: 'black' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/" style={{ marginLeft: '46vw', color: "white",fontWeight:'bold',fontSize:"20px"}}>
                    {props.title}
                </a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    </ul>

                    <li className="nav-item">
                        <a href='https://github.com/anirudh-hegde/sirius' style={{ position: 'absolute', top: '6px', right: '10px' }}>
                            <img src={process.env.PUBLIC_URL + '/github.jpeg'} style={{ height: '40px', width: '40px', borderRadius: '90px' }} alt='GitHub'></img>
                        </a>
                    </li>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = { title: 'TextUtils' };

