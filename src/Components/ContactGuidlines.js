import React from 'react'
import {makeStyles} from '@mui/styles'
import Grid from '@mui/material/Grid'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import ForumIcon from '@mui/icons-material/Forum'
import EmailIcon from '@mui/icons-material/Email'
import {Link} from 'react-router-dom'
import ReactWhatsapp from 'react-whatsapp'
const useStyles = makeStyles({
	text: {
		color: 'white',
		fontFamily: 'Montserrat',
		fontSize: '2.1vmin'
	},

	span: {
		fontFamily: 'Montserrat',
		color: 'white',
		fontSize: '2.1vmin',
		textDecoration: 'none',
		backgroundColor: 'transparent',
		border: 'none',
		cursor: 'pointer'
	}
})
const ButtonMailto = ({mailto, label}) => {
	const classes = useStyles()

	return (
		<Link
			to="#"
			onClick={(e) => {
				window.location = mailto
				e.preventDefault()
			}}
			className={classes.span}>
			<EmailIcon style={{fontSize: '8vmin', color: 'white'}} />
			<span>{label}</span>
		</Link>
	)
}

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
						<PhoneAndroidIcon style={{fontSize: '8vmin', color: 'white'}} />

						<ReactWhatsapp number="+92331-0201222" message="Hello World!!!" className={classes.span}>
							+92 331 020 1222
						</ReactWhatsapp>
					</Grid>
					<Grid item xs={4} md={3}>
						<ForumIcon style={{fontSize: '8vmin', color: 'white'}} />
						<span className={classes.span}>Live Chat</span>
					</Grid>
					<Grid item xs={4} md={3}>
						<ButtonMailto label="Email Us" mailto="mailto:hello@smartsoftstudios.com" />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}
