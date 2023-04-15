import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Home = () => {
    return (
        <Carousel 
            showArrows={true}
            infiniteLoop={true}
        >
            <div>
                aaa
            </div>
            <div>
                bbb
            </div>
            <div>
                ccc
            </div>
            <div>
                ddd
            </div>
            <div>
                eee
            </div>
            <div>
                fff
            </div>
        </Carousel>
    );
};