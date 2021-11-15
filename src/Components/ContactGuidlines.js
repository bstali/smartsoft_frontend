import React from 'react'
import {makeStyles} from '@mui/styles'
import Grid from '@mui/material/Grid'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import ForumIcon from '@mui/icons-material/Forum'
import EmailIcon from '@mui/icons-material/Email'

const useStyles = makeStyles({
    text: {
        color: 'white',
        fontFamily: 'Montserrat',
        fontSize: '2.1vmin'
    },

    span: {
        fontFamily: 'Montserrat',
        color: 'white',
        fontSize: '2.1vmin'
    }
})

export default function ContactGuidlines() {
    const classes = useStyles()
    return (
        <Grid container direction="row" justifyContent="flex-start" alignItems="center" style={{backgroundColor: '#EF3066', marginTop: 150, padding: 40}}>
            <Grid item xs={12}>
                <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                    <Grid item xs={12} md={3}>
                        <p className={classes.text}>
                            Discuss with our Experts & Choose the <br /> BEST SOLUTION FOR YOUR BUSINESS
                        </p>
                    </Grid>
                    <Grid item xs={4} md={3}>
                        <PhoneAndroidIcon style={{fontSize:'8vmin', color: 'white'}} />
                        <span className={classes.span}>+92 331 020 1222</span>
                    </Grid>
                    <Grid item xs={4} md={3}>
                        <ForumIcon style={{fontSize:'8vmin', color: 'white'}} />
                        <span className={classes.span}>Live Chat</span>
                    </Grid>
                    <Grid item xs={4} md={3}>
                        <EmailIcon style={{fontSize:'8vmin', color: 'white'}} />
                        <span className={classes.span}>Email Us</span>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
