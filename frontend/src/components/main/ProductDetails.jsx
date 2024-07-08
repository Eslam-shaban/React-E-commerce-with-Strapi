import { AddShoppingCartOutlined } from '@mui/icons-material';
import { Box, Button, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ProductDetails = ({ clickedProduct }) => {

    const [selectedImg, setSelectedImg] = useState(0)

    console.log(clickedProduct)
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2.5,
                flexDirection: { xs: "column", sm: "row" },
            }}
        >
            <Box sx={{ display: "flex" }}>
                <img
                    width={360}
                    src={clickedProduct.attributes.productImg.data[selectedImg].attributes.url}
                    alt=""
                />
            </Box>

            <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
                <Typography variant="h5">
                    {clickedProduct.attributes.productTitle}
                </Typography>
                <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
                    {clickedProduct.attributes.productPrice}
                </Typography>
                <Typography variant="body1">
                    {clickedProduct.attributes.productDescription}
                </Typography>

                <Stack
                    sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    direction={"row"}
                    gap={1}
                    my={2}
                >
                    <ToggleButtonGroup
                        value={selectedImg}
                        exclusive
                        sx={{
                            ".Mui-selected": {
                                border: "1px solid royalblue !important",
                                borderRadius: "5px !important",
                                opacity: "1",
                                backgroundColor: "initial",
                            },
                        }}
                    >
                        {clickedProduct.attributes.productImg.data.map((item, index) => {
                            return (
                                <ToggleButton
                                    key={item.id}
                                    value={index}
                                    sx={{
                                        width: "110px",
                                        height: "110px",
                                        mx: 1,
                                        p: "0",
                                        opacity: "0.5",
                                    }}
                                >
                                    <img
                                        onClick={() => {
                                            setSelectedImg(index);
                                        }}
                                        style={{ borderRadius: 3 }}
                                        height={"100%"}
                                        width={"100%"}
                                        src={item.attributes.url}
                                        alt=""
                                    />
                                </ToggleButton>
                            );
                        })}
                    </ToggleButtonGroup>
                </Stack>

                <Button
                    sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
                    variant="contained"
                >
                    <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                    Buy now
                </Button>
            </Box>
        </Box>
    );
}
ProductDetails.propTypes = {
    clickedProduct: PropTypes.object.isRequired,
};

export default ProductDetails;
