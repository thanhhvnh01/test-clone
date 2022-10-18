import { Box } from "@chakra-ui/react";
import ProductCard from "@components/ProductCard/ProductCard";
import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const ProductSlider = () => {
  const products = [
    {
      title: "RED Hair",
      image: "https://static2.yan.vn/YanNews/2167221/202004/demo-la-gi-44db1d42.PNG",
    },
    {
      title: "RED Hair",
      image: "https://static2.yan.vn/YanNews/2167221/202004/demo-la-gi-44db1d42.PNG",
    },
    {
      title: "RED Hair",
      image: "https://static2.yan.vn/YanNews/2167221/202004/demo-la-gi-44db1d42.PNG",
    },
    {
      title: "RED Hair",
      image: "https://static2.yan.vn/YanNews/2167221/202004/demo-la-gi-44db1d42.PNG",
    },
    {
      title: "RED Hair",
      image: "https://static2.yan.vn/YanNews/2167221/202004/demo-la-gi-44db1d42.PNG",
    },
    {
      title: "RED Hair",
      image: "https://static2.yan.vn/YanNews/2167221/202004/demo-la-gi-44db1d42.PNG",
    },
    {
      title: "RED Hair",
      image: "https://static2.yan.vn/YanNews/2167221/202004/demo-la-gi-44db1d42.PNG",
    },
    {
      title: "RED Hair",
      image: "https://static2.yan.vn/YanNews/2167221/202004/demo-la-gi-44db1d42.PNG",
    },
  ];

  const LeftArrow = () => {
    const { scrollPrev } = React.useContext(VisibilityContext);
    return (
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <ChevronLeftIcon
          color="#ffff"
          onClick={() => {
            scrollPrev();
          }}
        />
      </Box>
    );
  };

  const RightArrow = () => {
    const { scrollNext } = React.useContext(VisibilityContext);
    return (
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <ChevronRightIcon
          color="#ffff"
          onClick={() => {
            scrollNext();
          }}
        />
      </Box>
    );
  };

  return (
    <Box p={12}>
      <ScrollMenu
        wheel={false}
        translate={1}
        hideSingleArrow={true}
        dragging={true}
        alignCenter={false}
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        arrowDisabledClass={"hidearrow"}
        arrowClass="arrow"
      >
        {products.map((item, index) => {
          return <ProductCard title={item.title} itemId={index} image={item.image} />;
        })}
      </ScrollMenu>
    </Box>
  );
};

export default ProductSlider;
