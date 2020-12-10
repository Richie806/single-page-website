import React from 'react'

const About = () => {
    const [state] = React.useState({heading: 'Who we are?', text: 'Arsenal Football Club is a professional football club based in Islington, London, England, that plays in the Premier League, the top flight of English football. The club has won 13 league titles (including one unbeaten title), a record 14 FA Cups, two League Cups, 16 FA Community Shields, the League Centenary Trophy, one European Cup Winners Cup, and one Inter-Cities Fairs Cup.'});
    const [sections] = React.useState([
        {id: 1, heading: 'Premier League titles', text: '1930-31, 1932-33, 1933-34, 1934-35, 1937-38, 1947-48, 1952-53, 1970-71, 1988-89, 1990-91, 1997-98, 2001-02, 2003-04.'},
      {id: 2, heading: 'F.A Cups', text: '1929-30, 1935-36, 1949-50, 1970-71, 1978-79, 1992-93, 1997-98, 2001-02, 2002-03, 2004-05, 2013-14, 2014-15, 2016-17, 2019-20.'},
    {id: 3, heading: 'European titles', text: 'UEFA Cup Winners Cup (1993-94), Inter-Cities Fairs Cup (1969-70).'}
    ]);
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-3">
    <h4 className="about__h4">{state.heading}</h4>
                    </div>
                    <div className="col-9">
                        <div className="about__text">
    <p>{state.text}</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-60">
                    {sections.map(section => (
                        <div className="col-4 pl-15" key={section.id}>
                    <div className="about__section">
                        <div className="about__section-icon">
                        {section.icon}
                        </div>
                        <div className="about__section-heading">
                            <h6>{section.heading}</h6>
                        </div>
                        <div className="about__section-text">
                    <p>{section.text}</p>
                        </div>
                    </div>
                </div>
                    ))}
                
            </div>
            </div>
            
        </div>
    )
}

export default About
