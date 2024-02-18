import React from 'react';
import InfoCard from './InfoCard';
const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open & days',
        // icon: "<i className="bi bi-clock-history"></i>",
        background: 'primary',
    },
    {
        title: 'Visit Our Location',
        description: 'Mirpur-1, Dhaka-1216, Bangladesh',
        // icon: bi-geo-alt,
        background: 'dark',
    },
    {
        title: 'Call Us Now',
        description: '+1-(246) 333-0089',
        // icon: bi-telephone-outbound,
        background: 'primary',
    }

]

const BusinessInfo = () => {

    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;