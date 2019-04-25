import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const CarouselPanel = ({className = '', children}) =>
    <Carousel
        className={'carousel ' + className}
        showStatus={false}
        showThumbs={false}
    >
        {children}
    </Carousel>
;

export default CarouselPanel;
