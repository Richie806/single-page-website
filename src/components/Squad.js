import React from 'react'

const Squad = () => {
    const [state] = React.useState([
        {id: 1, image: "/images/01.png", name: 'Mikel Arteta', expert: 'Manager'},
        {id: 2, image: "/images/02.png", name: 'Pierre-Emerick Aubameyang', expert: 'Captain'},
        {id: 3, image: "/images/03.png", name: 'Rob Holding', expert: 'Defender'},
    ]);
    return (
        <div className="squad">
            <div className="container">
                <div className="squad__section">
                <div className="row">
                <div className="col-4">
                    <div className="squad__content">
                        <h6 className="squad__content-h6">Squad</h6>
                        <h3 className="squad__content-h3">OUR TEAM.</h3>
                    </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            {state.map(user => (
                                <div className="col-4 pl-15" key={user.id}>
                             <div className="squad__card">
                                 <div className="squad__card-img">
                                     <img src={user.image} alt="card"/>
                                 </div>
                            <h5 className="squad__card-name">{user.name}</h5>
                            <p className="squad__card-expert">{user.expert}</p>
                             </div>
                            </div>
                            ))}
                            
                           
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Squad
