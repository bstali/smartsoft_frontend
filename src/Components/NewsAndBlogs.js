import React from 'react'
import {Grid, Card, CardContent, CardMedia} from '@mui/material'
import {makeStyles} from '@mui/styles'
import '../Pages/Home.css'
import CardImage from '../Asset/Images/OtherImages/blockchain.png'

const useStyles = makeStyles({
	headingTop: {
		fontFamily: 'Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif',
		fontWeight: 500,
		fontSize: '6vmin',
		color: '#333333',
		paddingTop: 100
	},
	cardContent: {
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
			<p className={classes.headingTop}>CHECKOUT OUR LATEST NEWS</p>
			<Grid container>
				<Grid item xs={2}></Grid>
				<Grid item xs={8}>
					<Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
						<Grid item xs={12} md={4}>
							<Card
								className="newsCard"
								sx={{
									width: '100%',
									border: '2px solid',
									borderColor: '#EF3066'
								}}>
								<CardMedia component="img" height="140" image={CardImage} alt="img" />
								<CardContent className={classes.cardContent}>Blochain Lanchpad</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} md={4}>
							<Card
								className="newsCard"
								sx={{
									width: '100%',
									border: '2px solid',
									borderColor: '#EF3066'
								}}>
								<CardMedia component="img" height="140" image={CardImage} alt="img" />
								<CardContent className={classes.cardContent}>NFT based games</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} md={4}>
							<Card
								className="newsCard"
								sx={{
									width: '100%',
									border: '2px solid',
									borderColor: '#EF3066'
								}}>
								<CardMedia component="img" height="140" image={CardImage} alt="img" />
								<CardContent className={classes.cardContent}>Annual Dinner</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={2}></Grid>
			</Grid>
		</>
	)
}
