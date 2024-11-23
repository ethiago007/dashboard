import * as React from 'react';
import {
    Box,
    Grid2,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography
} from '@mui/material';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


export default function FullWidthGrid() {
    return (
        <>
            <br />
            <Typography sx={{ fontWeight: 'bold', fontSize: {md: '32px', sm: '20px', xs: '20px'} }}>
                Overview
            </Typography>
            <br />
            
            <Box sx={{ flexGrow: 1 }}>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ minWidth: 275 }}>
                            <Card variant="outlined" sx={{ borderRadius: '13px', backgroundColor: '#FFFFFF' }}>
                                <CardContent>
                                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, fontWeight: '500', display: 'flex', gap: '3px' }}>
                                        Total Energy Produced <Typography sx={{ color: 'text.secondary', fontWeight: '600', fontSize: 14 }}> (MWh) </Typography>
                                    </Typography>
                                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                        320,000
                                    </Typography>
                                    <br />
                                    <Typography sx={{ display: 'flex', gap: '3px' }} >
                                        <span style={{ display: 'flex', gap: '7px', backgroundColor: '#C5FFA6', borderRadius: '20px', width: '80px', height: '40px', justifyContent: 'center', alignItems: 'center' }}><svg color="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7C2 5.34315 3.34315 4 5 4ZM5.29289 14.9597C4.90237 15.3502 4.90237 15.9833 5.29289 16.3739C5.68342 16.7644 6.31658 16.7644 6.70711 16.3739L10.0678 13.0132L11.3675 14.0746C11.7759 14.4081 12.3731 14.3673 12.7322 13.9812L16.0028 10.4652L17.2705 11.8174C17.6482 12.2203 18.281 12.2407 18.6839 11.863C19.0869 11.4852 19.1073 10.8524 18.7295 10.4495L16.7295 8.31615C16.54 8.11401 16.2751 7.99956 15.9981 8.00009C15.721 8.00063 15.4565 8.11611 15.2678 8.31899L11.9064 11.9325L10.6325 10.8922C10.2349 10.5675 9.65592 10.5966 9.29289 10.9597L5.29289 14.9597Z" fill="#2B6511" />
                                        </svg> <Typography sx={{ fontSize: 'small', mt: 0.3 }}>+2%</Typography>  </span> <span style={{ marginTop: 9, fontSize: 'small' }}> compared to last month </span>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ minWidth: 275 }}>
                            <Card variant="outlined" sx={{ borderRadius: '13px', backgroundColor: '#FFFFFF' }}>
                                <CardContent>
                                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, fontWeight: '500', display: 'flex', gap: '3px' }}>
                                        Capacity Factor <Typography sx={{ color: 'text.secondary', fontWeight: '600', fontSize: 14 }}> (%) </Typography>
                                    </Typography>
                                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                        90,000
                                    </Typography>
                                    <br />
                                    <Typography sx={{ display: 'flex', gap: '3px' }} >
                                        <span style={{ display: 'flex', gap: '7px', backgroundColor: '#FAC0BF', borderRadius: '20px', width: '80px', height: '40px', justifyContent: 'center', alignItems: 'center' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                            <path fillRule="evenodd" clipRule="evenodd" d="M5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7C2 5.34315 3.34315 4 5 4ZM5.29289 9.7071C4.90237 9.31657 4.90237 8.68341 5.29289 8.29288C5.68342 7.90236 6.31658 7.90236 6.70711 8.29288L10.0678 11.6535L11.3675 10.5921C11.7759 10.2586 12.3731 10.2995 12.7322 10.6856L16.0028 14.2015L17.2705 12.8494C17.6482 12.4465 18.281 12.4261 18.6839 12.8038C19.0869 13.1815 19.1073 13.8144 18.7295 14.2173L16.7295 16.3506C16.54 16.5527 16.2751 16.6672 15.9981 16.6667C15.721 16.6661 15.4565 16.5506 15.2678 16.3478L11.9064 12.7342L10.6325 13.7745C10.2349 14.0993 9.65592 14.0701 9.29289 13.7071L5.29289 9.7071Z" fill="#722225" />
                                        </svg> <Typography sx={{ fontSize: 'small', mt: 0.3 }}>-4%</Typography>  </span> <span style={{ marginTop: 9, fontSize: 'small' }}> compared to last month </span>
                                    </Typography>
                                    <Typography variant="body2">


                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ minWidth: 275 }}>
                            <Card variant="outlined" sx={{ borderRadius: '13px', backgroundColor: '#FFFFFF' }}>
                                <CardContent>
                                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, fontWeight: '500', display: 'flex', gap: '3px' }}>
                                        Carbon Emission Avoided <Typography sx={{ color: 'text.secondary', fontWeight: '600', fontSize: 14 }}> (Tons) </Typography>
                                    </Typography>
                                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                        72,000
                                    </Typography>
                                    <br />
                                    <Typography sx={{ display: 'flex', gap: '3px' }} >
                                        <span style={{ display: 'flex', gap: '7px', backgroundColor: '#C5FFA6', borderRadius: '20px', width: '90px', height: '40px', justifyContent: 'center', alignItems: 'center' }}><svg color="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7C2 5.34315 3.34315 4 5 4ZM5.29289 14.9597C4.90237 15.3502 4.90237 15.9833 5.29289 16.3739C5.68342 16.7644 6.31658 16.7644 6.70711 16.3739L10.0678 13.0132L11.3675 14.0746C11.7759 14.4081 12.3731 14.3673 12.7322 13.9812L16.0028 10.4652L17.2705 11.8174C17.6482 12.2203 18.281 12.2407 18.6839 11.863C19.0869 11.4852 19.1073 10.8524 18.7295 10.4495L16.7295 8.31615C16.54 8.11401 16.2751 7.99956 15.9981 8.00009C15.721 8.00063 15.4565 8.11611 15.2678 8.31899L11.9064 11.9325L10.6325 10.8922C10.2349 10.5675 9.65592 10.5966 9.29289 10.9597L5.29289 14.9597Z" fill="#2B6511" />
                                        </svg> <Typography sx={{ fontSize: 'small', mt: 0.3 }}>+1.6%</Typography>  </span> <span style={{ marginTop: 9, fontSize: 'small' }}> compared to last month </span>
                                    </Typography>
                                    <Typography variant="body2">

                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ minWidth: 275 }}>
                            <Card variant="outlined" sx={{ borderRadius: '13px', backgroundColor: '#FFFFFF' }}>
                                <CardContent>
                                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, fontWeight: '500', display: 'flex', gap: '3px' }}>
                                        Turbine Availability <Typography sx={{ color: 'text.secondary', fontWeight: '600', fontSize: 14 }}> (%) </Typography>
                                    </Typography>
                                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                        75
                                    </Typography>
                                    <br />
                                    <Typography sx={{ display: 'flex', gap: '3px' }} >
                                        <span style={{ display: 'flex', gap: '7px', backgroundColor: '#C5FFA6', borderRadius: '20px', width: '80px', height: '40px', justifyContent: 'center', alignItems: 'center' }}><svg color="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7C2 5.34315 3.34315 4 5 4ZM5.29289 14.9597C4.90237 15.3502 4.90237 15.9833 5.29289 16.3739C5.68342 16.7644 6.31658 16.7644 6.70711 16.3739L10.0678 13.0132L11.3675 14.0746C11.7759 14.4081 12.3731 14.3673 12.7322 13.9812L16.0028 10.4652L17.2705 11.8174C17.6482 12.2203 18.281 12.2407 18.6839 11.863C19.0869 11.4852 19.1073 10.8524 18.7295 10.4495L16.7295 8.31615C16.54 8.11401 16.2751 7.99956 15.9981 8.00009C15.721 8.00063 15.4565 8.11611 15.2678 8.31899L11.9064 11.9325L10.6325 10.8922C10.2349 10.5675 9.65592 10.5966 9.29289 10.9597L5.29289 14.9597Z" fill="#2B6511" />
                                        </svg> <Typography sx={{ fontSize: 'small', mt: 0.3 }}>+2%</Typography>  </span> <span style={{ marginTop: 9, fontSize: 'small' }}> compared to last month </span>
                                    </Typography>
                                    <Typography variant="body2">

                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
        </>
    );
}







