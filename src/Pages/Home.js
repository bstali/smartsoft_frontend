import React from 'react'
import Contact from './Contact'
import {Button, Grid} from '@mui/material'
import Services from '../Components/Services'
// import MicroSoftServices from "../Components/MicroSoftServices";
import ContactGuidlines from '../Components/ContactGuidlines'
import NewsAndBlogs from '../Components/NewsAndBlogs'
import RecentProjects from '../Components/RecentProjects'
import TechnologyWeUse from '../Components/TechnologyWeUse'
import './Home.css'
import Intro from '../Components/Intro'
import BackgroundSlider from 'react-background-slider'
import image4 from '../Asset/Images/OtherImages/Smartsoft.jpg'
import image1 from '../Asset/Images/OtherImages/Image1.jpg'
import image2 from '../Asset/Images/OtherImages/Image2.jpg'
import image3 from '../Asset/Images/OtherImages/Image3.jpg'

export default function Home() {
    const viewServices = () => {
        document.getElementById('services').scrollIntoView({behavior: 'smooth'})
    }

    const viewPortfolio = () => {
        document.getElementById('awardwinprojects').scrollIntoView({behavior: 'smooth'})
    }

    return (
        <>
            <div>
                <div
                    style={{
                        height: window.innerHeight,
                        boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.6)'
                    }}>
                    <div>
                        <BackgroundSlider images={[image1, image2, image3, image4]} duration={4} transition={2} />
                    </div>
                    <div>
                        <Intro />
                    </div>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={1} sm={4}></Grid>
                        <Grid item xs={10} sm={4}>
                            <div
                                style={{
                                    marginLeft: 40,
                                    marginTop: 80,
                                    marginBottom: 100,
                                    display: 'flex'
                                }}>
                                <Button
                                    className="srvsBtn"
                                    onClick={viewServices}
                                    sx={{
                                        bgcolor: '#EF3066',
                                        color: 'white',
                                        borderRadius: 12,
                                        padding: '5px 20px 5px 20px',
                                        // Width: 500,
                                        fontWeight: 700
                                    }}>
                                    View Services
                                </Button>
                                <Button
                                    className="portfolioBtn"
                                    onClick={viewPortfolio}
                                    sx={{
                                        bgcolor: 'transparent',
                                        border: '1px solid white',
                                        color: 'white',
                                        borderRadius: 12,
                                        //  Width: 200,
                                        padding: '3px 15px 3px 15px',
                                        fontWeight: 700,
                                        marginLeft: 10
                                    }}>
                                    View Portfolio
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={1} sm={4}></Grid>
                    </Grid>
                </div>
                <div style={{backgroundColor: '#F5F5F5'}}>
                    <div id="services">
                        <Services />
                    </div>
                    {/* <div>
            <MicroSoftServices />
          </div> */}
                    <div>
                        <ContactGuidlines />
                    </div>

                    <div>
                        <NewsAndBlogs />
                    </div>
                    <div id="awardwinprojects">
                        <RecentProjects />
                    </div>
                    <div>
                        <TechnologyWeUse />
                    </div>
                </div>
            </div>
            <Contact />
        </>
    )
}
