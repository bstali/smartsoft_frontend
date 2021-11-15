import React from 'react'
import {Grid, ImageList, ImageListItem} from '@mui/material'
import {makeStyles} from '@mui/styles'
import '../Pages/Home.css'

const useStyles = makeStyles({
    headingTop: {
        fontFamily: 'Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif',
        fontWeight: 500,
        fontSize: '6vmin',
        color: '#333333',
        textTransform: 'uppercase'
    },
    cardContent: {
        fontFamily: 'Montserrat',
        fontWeight: 700,
        fontSize: 10,
        color: 'inherit'
    }
})

export default function RecentProjects() {
    const classes = useStyles()
    const itemData = [
        {
            img: 'https://smartsoftstudios.com/images/project-3-370x404.png',
            title: 'Restaurant',
            link: ''
        },
        {
            img: 'https://smartsoftstudios.com/images/project-4-370x404.png',
            title: 'Constituency',
            link: 'http://cms.awaisleghari.com/'
        },
        {
            img: 'https://smartsoftstudios.com/images/project-5-370x404.png',
            title: 'MT-Barrels',
            link: 'https://apps.apple.com/tt/app/m-t-barrels/id827791368'
        },
        {
            img: 'https://smartsoftstudios.com/images/project-6-370x404.png',
            title: 'Buttons',
            link: 'https://play.google.com/store/apps/details?id=com.toneaphone.soundboard'
        },
        {
            img: 'https://smartsoftstudios.com/images/project-7-370x404.png',
            title: 'Siltons',
            link: 'https://dougsilton.com/ '
        },
        {
            img: 'https://smartsoftstudios.com/images/project-8-370x404.png',
            title: 'Tubers',
            link: 'https://apps.apple.com/us/app/tubers-tycoon/id1128104519'
        },
        {
            img: 'https://smartsoftstudios.com/images/project-9-370x404.png',
            title: 'Alarabia',
            link: 'https://play.google.com/store/apps/details?id=com.services.ymaalarabia&hl=en'
        },
        {
            img: 'https://smartsoftstudios.com/images/project-1-370x404.png',
            title: 'BookedYa',
            link: 'https://www.bookedya.com/'
        },
        {
            img: 'https://smartsoftstudios.com/images/project-2-370x404.png',
            title: 'Iscaped',
            link: 'https://www.iscapeit.com/'
        }
    ]

    return (
        <div style={{paddingTop: 50}}>
            <p className={classes.headingTop}>Recent Projects</p>
            <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <ImageList sx={{width: '100%', height: 'auto', overflow: 'hidden'}} cols={3}>
                        {itemData.map((item) => (
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <ImageListItem key={item.img}>
                                    <img className="awardWinningImages" src={`${item.img}?w=164&h=164&fit=crop&auto=format`} srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
                                </ImageListItem>
                            </a>
                        ))}
                    </ImageList>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </div>
    )
}
