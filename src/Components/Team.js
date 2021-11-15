import React from 'react'
import {Grid, Card, CardContent, CardMedia} from '@mui/material'
import {makeStyles} from '@mui/styles'
import '../Pages/Home.css'
import Emp1 from '../Asset/Images/EmployeeImages/emp1.jpg'
import Emp2 from '../Asset/Images/EmployeeImages/emp2.jpg'
import Emp3 from '../Asset/Images/EmployeeImages/emp3.jpg'
import Emp4 from '../Asset/Images/EmployeeImages/emp4.jpg'

const useStyles = makeStyles({
    headings: {
        fontFamily: 'Montserrat',
        fontWeight: 700,
        fontSize: 10,
        color: 'inherit'
    }
})
export default function NewsAndBlogs() {
    const classes = useStyles()
    return (
        <>
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={0} sm={4}></Grid>
                                <Grid item xs={12}  sm={4}>
                                    <Card
                                        className="newsCard"
                                        sx={{
                                            width: '100%',
                                            border: '2px solid',
                                            borderColor: '#EF3066'
                                        }}>
                                        <CardMedia
                                            component="img"
                                            height="400"
                                            //   width="100"
                                            image={Emp1}
                                            alt="img"
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <p>Abdullah Khalid</p>
                                            <p>CEO</p>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={0}  sm={4}></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card
                                className="newsCard"
                                sx={{
                                    width: '100%',
                                    border: '2px solid',
                                    borderColor: '#EF3066'
                                }}>
                                <CardMedia component="img" height="400" image={Emp2} alt="img" />
                                <CardContent className={classes.cardContent}>
                                    <p>Faraz Ghani</p>
                                    <p>Senior ReactJS Developer</p>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card
                                className="newsCard"
                                sx={{
                                    width: '100%',
                                    border: '2px solid',
                                    borderColor: '#EF3066'
                                }}>
                                <CardMedia component="img" height="400" image={Emp3} alt="img" />
                                <CardContent className={classes.cardContent}>
                                    <p>Ubaid Rasool</p>
                                    <p>React Native Developer</p>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card
                                className="newsCard"
                                sx={{
                                    width: '100%',
                                    border: '2px solid',
                                    borderColor: '#EF3066'
                                }}>
                                <CardMedia component="img" height="400" image={Emp3} alt="img" />
                                <CardContent className={classes.cardContent}>
                                    <p>Saim Shafqat</p>
                                    <p>React Native Developer</p>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card
                                className="newsCard"
                                sx={{
                                    width: '100%',
                                    border: '2px solid',
                                    borderColor: '#EF3066'
                                }}>
                                <CardMedia component="img" height="400" image={Emp4} alt="img" />
                                <CardContent className={classes.cardContent}>
                                    <p>Saim</p>
                                    <p>SEO Expert</p>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card
                                className="newsCard"
                                sx={{
                                    width: '100%',
                                    border: '2px solid',
                                    borderColor: '#EF3066'
                                }}>
                                <CardMedia component="img" height="400" image={Emp4} alt="img" />
                                <CardContent className={classes.cardContent}>
                                    <p>Basit Ali</p>
                                    <p>ReactJS Developer</p>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card
                                className="newsCard"
                                sx={{
                                    width: '100%',
                                    border: '2px solid',
                                    borderColor: '#EF3066'
                                }}>
                                <CardMedia component="img" height="400" image={Emp4} alt="img" />
                                <CardContent className={classes.cardContent}>
                                    <p>Ahsan Aatir</p>
                                    <p>Web Developer</p>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </>
    )
}
