import React from 'react'
import {Grid, Card} from '@mui/material'
import {makeStyles} from '@mui/styles'
import LaptopIcon from '@mui/icons-material/Laptop'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import FilterDramaIcon from '@mui/icons-material/FilterDrama'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import CloudIcon from '@mui/icons-material/Cloud'
import GroupIcon from '@mui/icons-material/Group'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import AddBusinessIcon from '@mui/icons-material/AddBusiness'
import '../Pages/Home.css'

const useStyles = makeStyles({
    midHeading: {
        fontSize: 45,
        color: '#333',
        fontFamily: 'Montserrat',
        fontWeight: 400,
        marginTop: 150
    },
    servicesDescription: {
        color: '#333',
        fontSize: 16,
        fontFamily: 'arial',
        lineHeight: 1.75,
        fontWeight: 500
    }
})

export default function Services() {
    const classes = useStyles()
    return (
        <>
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <h2 className={classes.midHeading}>WHAT WE DO</h2>
                    <p className={classes.servicesDescription}>We have a refined process after we have taken up a project. We offer the platform from where the projects take shape through stages of planning, testing and execution. In this aspect we follow an agile methodology and run the project through a loop of feedback and constant improvement. Our specialized services also have:</p>
                    <Grid container spacing={7}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Card
                                className="service1"
                                sx={{
                                    width: '100%',
                                    height: 300,
                                    border: '1px solid',
                                    borderColor: '#EF3066'
                                }}>
                                <LaptopIcon className="icon1" style={{fontSize: 50, marginTop: 50, color: '#EF3066'}} />
                                <h3>Web design & development</h3>
                                <p>We create a smooth user experience for every web design and development project we take.</p>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Card
                                className="service2"
                                sx={{
                                    width: '100%',
                                    height: 300,
                                    backgroundColor: 'white',
                                    border: '1px solid',
                                    borderColor: '#EF3066'
                                }}>
                                <PhoneAndroidIcon style={{fontSize: 50, marginTop: 50, color: '#EF3066'}} />
                                <h3>Mobile App Development</h3>
                                <p>Smart Soft Studios enjoins a hallmark of projects in mobile application development and contributed to the industry</p>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Card
                                className="service3"
                                sx={{
                                    width: '100%',
                                    height: 300,
                                    backgroundColor: 'white',
                                    border: '1px solid',
                                    borderColor: '#EF3066'
                                }}>
                                <SettingsSuggestIcon style={{fontSize: 50, marginTop: 50, color: '#EF3066'}} />
                                <h3>Game Development</h3>
                                <p>Unity3D</p>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Card
                                className="service3"
                                sx={{
                                    width: '100%',
                                    height: 300,
                                    backgroundColor: 'white',
                                    border: '1px solid',
                                    borderColor: '#EF3066'
                                }}>
                                <SettingsSuggestIcon style={{fontSize: 50, marginTop: 50, color: '#EF3066'}} />
                                <h3>BlockChain Development</h3>
                                <p>For various startups and established businesses alike, our exceptional software development company</p>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Card
                                className="service4"
                                sx={{
                                    width: '100%',
                                    height: 300,
                                    backgroundColor: 'white',
                                    border: '1px solid',
                                    borderColor: '#EF3066'
                                }}>
                                <FilterDramaIcon style={{fontSize: 50, marginTop: 50, color: '#EF3066'}} />
                                <h3>Startup Solution</h3>
                                <p>We are the enablers of tech-savvy and budding entrepreneurs. We groom and nurture entrepreneurs from various industries</p>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Card
                                className="service7"
                                sx={{
                                    width: '100%',
                                    height: 300,
                                    backgroundColor: 'white',
                                    border: '1px solid',
                                    borderColor: '#EF3066'
                                }}>
                                <ShoppingCartIcon style={{fontSize: 50, marginTop: 50, color: '#EF3066'}} />
                                <h3>Ecommerce Solution</h3>
                                <p>E-commerce solution requires a technically holistic approach and it caters to all aspects including, design, development and e-cart.</p>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </>
    )
}
