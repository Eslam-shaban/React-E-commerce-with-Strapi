
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Container, Dialog, IconButton, Rating, Stack, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { AddShoppingCartOutlined, Close } from '@mui/icons-material';
import ProductDetails from './ProductDetails';
import { useGetproductByNameQuery } from '../../Redux/Product'
import { AnimatePresence, motion } from 'framer-motion'

const Main = () => {

    const handleAlignment = (event, newvalue) => {
        if (newvalue !== null) {
            setMyData(newvalue)
        }
    };

    const theme = useTheme();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [clickedProduct, setClickedProduct] = useState({});

    const allProductsAPI = "products?populate=*"
    const menProductsAPI = "products?populate=*&filters[category][$eq]=men"
    const womenProductsAPI = "products?populate=*&filters[category][$eq]=women"

    const [myData, setMyData] = useState(allProductsAPI);

    const { data, error, isLoading } = useGetproductByNameQuery(myData)

    if (isLoading) {
        return (
            <Box sx={{ py: 11, textAlign: 'center' }}>
                <CircularProgress />
            </Box>
        )
    }
    if (error) {
        // @ts-ignore
        return (
            <Container sx={{ py: 11, textAlign: 'center' }}>
                <Typography variant='h6'>{error.
                    // @ts-ignore
                    error}</Typography>
                <Typography variant='h6'>please try again later</Typography>
            </Container >
        )
    }
    // if (data) {

    console.log(data.data)

    return (
        <Container sx={{ py: 9 }}>

            <Stack
                direction={'row'}
                justifyContent={"space-between"}
                flexWrap={"wrap"}

            >
                <Box>
                    <Typography variant="h6">Selected Products</Typography>
                    <Typography fontWeight={300} variant="body1">
                        All our new arrivals in a exclusive brand selection
                    </Typography>
                </Box>

                <ToggleButtonGroup
                    color="error"
                    value={myData}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    sx={{
                        ".Mui-selected": {
                            border: "1px solid rgba(233, 69, 96, 0.5) !important",
                            color: "#e94560",
                            backgroundColor: "initial",
                        },
                    }}
                >
                    <ToggleButton
                        sx={{ color: theme.palette.text.primary }}
                        className="myButton"
                        value={allProductsAPI} aria-label="left aligned"
                    >
                        ALL PRODUCTS
                    </ToggleButton>
                    <ToggleButton
                        sx={{ mx: "16px !important", color: theme.palette.text.primary }}
                        className="myButton"
                        value={menProductsAPI} aria-label="centered">
                        MEN CATEGORY
                    </ToggleButton>
                    <ToggleButton
                        sx={{ color: theme.palette.text.primary }}
                        className="myButton"
                        value={womenProductsAPI} aria-label="right aligned">
                        WOMEN CATEGORY
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>

            <Stack direction={'row'}
                alignItems={'center'}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
                gap={3}>

                <AnimatePresence>
                    {data.data.map((item) => {
                        return (
                            <Card
                                component={motion.section}
                                layout
                                initial={{ transform: 'scale(0)' }}
                                animate={{ transform: 'scale(1)' }}
                                transition={{
                                    duration: 1.6, type: "spring",
                                    stiffness: 50
                                }}
                                key={item.id}
                                sx={{
                                    maxWidth: 333, mt: 6,
                                    ':hover .MuiCardMedia-root': { scale: '1.1', rotate: '1deg', transition: '.3', }
                                }}>
                                <CardMedia
                                    sx={{ height: 277, }}
                                    // @ts-ignore
                                    image={`${item.attributes.productImg.data[0].attributes.url}`}
                                    // image='src/images/1/final.png'
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Stack
                                        direction={'row'}
                                        justifyContent={'space-between'}
                                        alignItems={'center'}>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {item.attributes.productTitle}
                                        </Typography>
                                        <Typography variant="subtitle1" component="p">
                                            {item.attributes.productPrice}$
                                        </Typography>
                                    </Stack >
                                    <Typography variant="body2" color="text.secondary">
                                        {item.attributes.productDescription}
                                    </Typography>
                                </CardContent>

                                <CardActions sx={{ justifyContent: "space-between" }}>
                                    <Button
                                        onClick={() => {
                                            handleClickOpen()
                                            setClickedProduct(item)
                                            console.log(item)
                                        }}
                                        sx={{ textTransform: "capitalize" }}
                                        size="large">   <AddShoppingCartOutlined
                                            sx={{ mr: 1 }}
                                            fontSize="small"

                                        />
                                        add to cart</Button>
                                    <Rating
                                        precision={0.1}
                                        name="read-only"
                                        value={item.attributes.productRating}
                                        // value={4}
                                        readOnly
                                    />
                                </CardActions>
                            </Card>)

                    })}
                </AnimatePresence>
            </Stack>

            <Dialog onClose={handleClose} open={open}
                sx={{ '.MuiPaper-root': { minWidth: { xs: '100%', md: '800px' } } }}>
                <IconButton onClick={handleClose}
                    sx={{
                        position: 'absolute', top: 0, right: 8,
                        ':hover': { color: 'red', rotate: '180deg', transition: '0.3s' }
                    }}>
                    <Close />
                </IconButton>
                <ProductDetails clickedProduct={clickedProduct} />
            </Dialog>

        </Container>
    );
    // }


}

export default Main;
