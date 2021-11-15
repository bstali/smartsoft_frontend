import React from 'react'
import {makeStyles} from '@mui/styles'
import {Grid} from '@mui/material'
import ProjectForm from '../Components/ProjectForm'
import MapChart from '../Components/Map'
import './Home.css'

const useStyles = makeStyles({
    officesHeading: {
        color: '#4a4a4a',
        margin: 0,
        fontSize: "6vmin",
        fontFamily: 'Montserrat, sans-serif',
        textTransform: 'uppercase',
        textAlign: 'left'
    },
    continentsName: {
        fontSize: "4vmin",
        margin: 0,
        marginTop: 10,
        color: '#ef3066',
        fontFamily: 'Montserrat, sans-serif',
        textTransform: 'uppercase',
        textAlign: 'left'
    },
    country: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: "2.1vw",
        color: '#4a4a4a',
        textTransform: 'uppercase',
        textAlign: 'left'
    },
    city: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: "1vw",
        color: '#4a4a4a',
        textTransform: 'uppercase',
        textAlign: 'left'
    },
    address: {
        color: '#4a4a4a',
        textAlign: 'left'
    }
})

export default function Contact() {
    const classes = useStyles()
    React.useEffect(() => {
        window.scrollTo({top: 0})
    }, [])
    return (
        <div style={{backgroundColor: '#F5F5F5'}}>
            <div style={{height: window.innerHeight}} className="homeBG">
                <ProjectForm />
            </div>
            <Grid container style={{paddingTop: 50, paddingBottom: 50}}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={5}>
                        <Grid item xs={12} md={5}>
                            <MapChart />
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <div>
                                <p className={classes.officesHeading}>Our Global Offices</p>
                            </div>
                            <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                <Grid item xs={12} sm={6}>
                                    <p className={classes.continentsName}>Asia</p>
                                    <p className={classes.country}>Pakistan</p>
                                    <p className={classes.city}>Lahore</p>
                                    <p className={classes.address}>34-B Rajppot Town, Canal Road</p>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <p className={classes.continentsName}>Americas</p>
                                    <p className={classes.country}>US</p>
                                    <p className={classes.address}>Coom soon</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </div>
    )
}
