import { Box } from "@chakra-ui/react";
import ProductCard from "@components/ProductCard/ProductCard";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// slick
import Slider from "react-slick";

const ProductSlider = ({ data, isMobile }) => {
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <ChevronLeftIcon
        className={className}
        onClick={onClick}
        _hover={{ color: "black" }}
        sx={{ ...style, display: isMobile ? "none" : "block" }}
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
        sx={{ ...style, display: isMobile && "none" }}
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
    <Box p={[3, 5, 5, 12, 12]} py={[6, 6, 6, 12, 12]}>
      <Slider {...settings}>
        {data?.map((item, index) => {
          return (
            <ProductCard
              sx={{
                mb: 5,
                mx: "auto",
                border: "1px solid #AAAAAA !important",
              }}
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
