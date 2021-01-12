import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.4611641245438!2d-96.80142858481788!3d32.78002938097117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9073cfe6d9a606a!2sMagnolia%20Dallas%20Downtown!5e0!3m2!1sen!2s!4v1610479933593!5m2!1sen!2s" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                style={{border:0}} 
                allowfullscreen 
                aria-hidden="false" 
                tabindex="0"></iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;