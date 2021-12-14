import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {makeStyles} from '@mui/styles'
import GetAFreeQuote from './GetAFreeQuote'
import {AppBar, Grid} from '@mui/material'

const useStyles = makeStyles({
	navItems: {
		fontSize: 15,
		color: 'white',
		fontFamily: 'Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif',
		letterSpacing: 1,
		textTransform: 'uppercase',
		textDecoration: 'none',
		padding: '7px 7px'
	},
	appBar: {
		padding: 30
	},
	quoteBtn: {
		float: 'inherit'
	}
})

export default function NavBar() {
	const classes = useStyles()
	const [colorChange, setColorchange] = useState(false)
	const changeNavbarColor = () => {
		if (window.scrollY > 0) {
			setColorchange(true)
		} else {
			setColorchange(false)
		}
	}
	window.addEventListener('scroll', changeNavbarColor)

	return (
		<>
			<AppBar
				sx={{
					backgroundColor: 'transparent',
					boxShadow: 'none',
					paddingTop: 2,
					transition: 'all 0.5s linear'
				}}
				className={colorChange ? 'navbar colorChange' : 'navbar'}>
				<Grid container direction="row" justifyContent="center" alignItems="center">
					<Grid item xs={0} sm={2}></Grid>
					<Grid item xs={12} sm={8}>
						<NavLink exact to="/" className={classes.navItems}>
							Home
						</NavLink>
						<NavLink exact to="/About-Us" className={classes.navItems}>
							Team
						</NavLink>
						<NavLink exact to="/Contact-Us" className={classes.navItems}>
							Contact
						</NavLink>
						<NavLink exact to="/Careers" className={classes.navItems}>
							Careers
						</NavLink>
					</Grid>
					<Grid item xs={12} sm={2}>
						<GetAFreeQuote />
					</Grid>
				</Grid>
			</AppBar>
		</>
	)
}
