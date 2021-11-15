import React from 'react'
import {makeStyles} from '@mui/styles'
import Carousel from 'react-material-ui-carousel'
import Logo from '../Asset/Images/OtherImages/SmartSoftLogo.png'

const useStyles = makeStyles({
    topHeading: {
        fontSize: '6vmin',
        fontFamily: 'Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif',
        textTransform: 'uppercase',
        color: 'white'
    },
    descriptionHeading: {
        color: '#EF3066',
        fontSize: "3vmin",
        fontWeight: 700,
        fontFamily: 'Montserrat'
    },
    description: {
        fontFamily: 'Montserrat',
        textAlign: 'center',
        margin: '0 auto',
        fontSize: "2vmin",
        fontWeight: 400,
        width: '70%',
        color: 'white'
    }
})
export default function Intro() {
    const classes = useStyles()

    const items = [
        {
            name: 'Commitment',
            description: 'Commitment is the key to success'
        },
        {
            name: 'Development',
            description: 'We have a team of IT consultants with presence at the key technology innovation hubs around the world. We empower you to modify and analyze data and turn it profitable by simplifying business goals.'
        },
        {
            name: 'Blockchain Experts',
            description: 'Contracts, NFT'
        },
        {
            name: 'More than 12 years of IT experience',
            description: 'Dedication, passion, hard work'
        },
        {
            name: 'We are Smart Soft Studios',
            description: 'Smart technology for you'
        }
    ]

    return (
        <div style={{paddingTop: 150}}>
            <img src={Logo} alt="logo" style={{width: '65%'}} />
            <p className={classes.topHeading}>TECHNOLOGY HUB</p>
            <Carousel interval={5000} autoPlay={true} animation="slide" IndicatorIcon={false} navButtonsAlwaysInvisible={true}>
                {items.map((item) => (
                    <div>
                        <p className={classes.descriptionHeading}>{item.name}</p>
                        <p className={classes.description}>{item.description}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
