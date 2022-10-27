import { Box } from "@chakra-ui/react";
import ProductCard from "@components/ProductCard/ProductCard";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// slick
import Slider from "react-slick";

const ProductSlider = ({ data }) => {
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <ChevronLeftIcon
        className={className}
        onClick={onClick}
        _hover={{ color: "black" }}
        sx={{ ...style }}
        boxSize={8}
      />
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <ChevronRightIcon
        className={className}
        _hover={{ color: "black" }}
        onClick={onClick}
        sx={{ ...style }}
        boxSize={8}
      />
    );
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 914,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Box p={12}>
      <Slider {...settings}>
        {data?.map((item, index) => {
          return (
            <ProductCard
              key={index}
              title={item.productName}
              image={item.imageFileUrl}
              subtitle={item.productTypeName}
            />
          );
        })}
      </Slider>
    </Box>
  );
};

export default ProductSlider;
