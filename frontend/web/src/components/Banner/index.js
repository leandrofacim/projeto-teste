import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const photos = [
    {
        name: 'photo 1',
        url: 'https://blog.dankicode.com/wp-content/uploads/2020/01/Como-o-JavaScript-Funciona.png'
    },
    {
        name: 'photo 2',
        url: 'https://blog.dankicode.com/wp-content/uploads/2020/01/Como-o-JavaScript-Funciona.png'
    },
    {
        name: 'photo 3',
        url: 'https://www.davidchc.com.br/wp-content/uploads/2016/06/495484_385c_3.jpg'
    },
    {
        name: 'photo 4',
        url: 'https://image.freepik.com/fotos-gratis/gotas-de-oleo-na-imagem-abstrata-padrao-psicodelico-de-agua_23-2148290141.jpg'
    },
]
export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            className: 'slides'
        };
        return (
            <div>
                <Slider {...settings}>
                    {photos.map((photo) => {
                        console.log(photo)
                        return (
                            <div>
                                <img src={photo.url} alt="" />
                            </div>
                        )
                    })}
                </Slider>

            </div>
        );
    }
}
