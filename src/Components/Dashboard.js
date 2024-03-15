import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { red } from '@mui/material/colors';
import image from '../Images/circle.png'
import { dashBoard } from '../Redux/action';



const Dashboard = (props) => {

    const styles = {
        paperContainer: {
            backgroundImage: `url(${image})`
        }
    };

    const dispatch = useDispatch();
    
    const token=useSelector(state=>state?.loginData?.data?.token);
    console.log(token);

    const boardData = useSelector(state => state?.dashBoard);
    console.log(boardData);

    useEffect(() => {
        dispatch(dashBoard(token))
    }, [])


    return (
        <>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 10 }}>
                <Grid  item xs={2} sm={4} md={2}>
                    <Card
                    //    sx={styles.paperContainer},
                        sx={{ height: '130%' ,background:'linear-gradient(to left bottom, #EECDA3, #EF629F)'}}
                        {...props}{...styles.paperContainer}
                    >
                        <CardContent>
                            <Grid
                                container
                                spacing={3}
                                sx={{ justifyContent: 'space-between' }}
                            >
                                <Grid item >
                                    <Typography
                                        color="textDanger"
                                        gutterBottom
                                        variant="h5"
                                    >
                                        Total Active users:

                                    </Typography>
                                    <Typography
                                        color="textPrimary"
                                        variant="h4"
                                    >
                                        {boardData?.active_users_count}
                                    </Typography>
                                </Grid>

                            </Grid>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid  item xs={2} sm={4} md={2}>
                    <Card
                        sx={{ height: '130%',background: 'linear-gradient(to left bottom, #1FA2FF,#12D8FA,#A6FFCB)' }}
                        {...props}
                    >
                        <CardContent>
                            <Grid
                                container
                                spacing={3}
                                sx={{ justifyContent: 'space-between' }}
                            >
                                <Grid item >
                                    <Typography
                                        color="textSecondary"
                                        gutterBottom
                                        variant="h5"
                                    >
                                        Total No of Posts:

                                    </Typography>
                                    <Typography
                                        color="textPrimary"
                                        variant="h4"
                                    >
                                        {boardData?.post_count}
                                    </Typography>
                                </Grid>

                            </Grid>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2} sm={4} md={2}>
                    <Card
                        sx={{ height: '130%',background: 'linear-gradient(to left bottom, #FBD3E9,#BB377D)' }}
                        {...props}
                    >
                        <CardContent>
                            <Grid
                                container
                                spacing={8}
                                sx={{ justifyContent: 'space-between' }}
                            >
                                <Grid item  >
                                    <Typography
                                        color="textSecondary"
                                        gutterBottom
                                        variant="h5"
                                    >
                                        Total No of Reels:

                                    </Typography>
                                    <Typography
                                        color="textPrimary"
                                        variant="h4"
                                    >
                                        {boardData?.reels_count}
                                    </Typography>
                                </Grid>

                            </Grid>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid  item xs={2} sm={4} md={2}>
                    <Card
                        sx={{ height: '130%' ,background: 'linear-gradient(to left bottom, #1FA2FF,#12D8FA,#A6FFCB)'}}
                        {...props}
                    >
                        <CardContent>
                            <Grid
                                container
                                spacing={3}
                                sx={{ justifyContent: 'space-between' }}
                            >
                                <Grid item>
                                    <Typography
                                        color="textSecondary"
                                        gutterBottom
                                        variant="h5"
                                    >
                                        Total No of Stories:

                                    </Typography>
                                    <Typography
                                        color="textPrimary"
                                        variant="h4"
                                    >
                                        {boardData?.story_count}
                                    </Typography>
                                </Grid>

                            </Grid>

                        </CardContent>
                    </Card>
                </Grid>



                <Grid  item xs={2} sm={4} md={2}>
                    <Card
                        sx={{ height: '130%' ,background: 'linear-gradient(to left bottom, #1CD8D2,#93EDC7,#A6FFCB)'}}
                        {...props}
                    >
                        <CardContent>
                            <Grid
                                container
                                spacing={3}
                                sx={{ justifyContent: 'space-between' }}
                            >
                                <Grid item>
                                    <Typography
                                        color="textSecondary"
                                        gutterBottom
                                        variant="h5"
                                    >
                                        Total No of users:

                                    </Typography>
                                    <Typography
                                        color="textPrimary"
                                        variant="h4"
                                    >
                                        {boardData?.user_count}

                                    </Typography>
                                </Grid>

                            </Grid>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </>
    )
}
export default Dashboard;