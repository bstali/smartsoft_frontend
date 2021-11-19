import React from 'react'
import {makeStyles} from '@mui/styles'
import {Grid} from '@mui/material'
import Logo from '../Asset/Images/OtherImages/SmartSoftLogo.png'
import './Home.css'
import Team from '../Components/Team'

const useStyles = makeStyles({
    topHeading: {
        fontSize: '5vmin',
        textTransform: 'uppercase',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
        float: 'left',
        margin: 0,
        paddingTop: 70
    },
    subHeading: {
        fontSize: '2vmin',
        textTransform: 'uppercase',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 500,
        float: 'left'
    },
    details: {
        color: '#878787',
        textAlign: 'left',
        margin: 0,
        // textAlign: "center"
    }
})
export default function Career() {
    const classes = useStyles()

    React.useEffect(() => {
        window.scrollTo({top: 0})
    }, [])

    return (
        <div style={{backgroundColor: '#F5F5F5'}}>
            <div style={{height: window.innerHeight}} className="aboutBG">
                <div style={{paddingTop: 200}}>
                    <img src={Logo} alt="logo" style={{width: '60%'}} />
                    <p className="thanks">Smart Soft Studios Story</p>
                </div>
            </div>
            <Grid container>
                <Grid Item xs={1}></Grid>
                <Grid Item xs={10}>
                    <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                        <Grid item sm={12}>
                            <p className={classes.topHeading}>About Us</p>
                        </Grid>
                        <Grid item xs={12}>
                            <p className={classes.subHeading}>JOURNEY SINCE 2013</p>
                        </Grid>
                        <Grid item xs={12}>
                            <p className={classes.details}>We started in 2013 as a smart information technology service provider with the aim of delivering business solutions to customers worldwide. Today, we are stretched across four continents with offices and customers in US, UK, UAE and Pakistan. With a strong workforce of more than 250 employees, the company has achieved remarkable milestones. Our gamut of services include software buildup, website development, mobile development, ecommerce store development, call center and customer support, cyber security, and startups assistance has made us an established and reputed brand name among foreign clients.</p>
                        </Grid>
                    </Grid>
                    <div style={{paddingTop: 50, paddingBottom: 50}}>
                        <Team />
                    </div>
                </Grid>
                <Grid Item xs={1}></Grid>
            </Grid>
        </div>
    )
}
