import React from 'react'

const Logos = ({ logos }) => {
    return (
        <>
            {logos.map((item, i) => (
                <div key={i} className="logo-pic">
                    <img src={item.src} alt="logo" className="img-fluid" />
                    <h4>{item.title}</h4>
                </div>
            )
            )}
        </>
    )
}

export default Logos
