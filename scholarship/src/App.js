import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import StepForm from './components/StepForm'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'


const styles = theme => ({
	appBar: {
		position: 'relative',
		paddingRight: 10,
		paddingLeft: 10
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(8),
			marginBottom: theme.spacing(8),
			padding: theme.spacing(3)
		}
	}
})

const App = ({ classes }) => {
	return (
		<div className="App">
			<CssBaseline />
			<AppBar position="static" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" color="inherit" noWrap>
						Fundación Rodrigo Montes de Oca
					</Typography>
					<IconButton color="inherit" aria-label="Github" style={{ marginLeft: 'auto' }}>
						<Link
							title="Home"
							component="a"
							rel="noopener noreferrer"
							target="_blank"
							href="http://www.frmo.org/"
							color="inherit"
						>
						Home
						</Link>
					</IconButton>
				</Toolbar>
			</AppBar>
			<main className={classes.layout}>
				<Typography variant="h4" align="center" style={{ marginTop: 80 }}>
					Solicitud de Beca
				</Typography>
				<Typography variant="subtitle2" align="center" style={{ marginTop: 10, marginBottom: 10 }}>
					Llena el formulario y descubre en línea si eres elegible para una beca para tus estudios.
				</Typography>
				<Paper className={classes.paper}>
					<StepForm />
				</Paper>
				<Divider style={{ marginTop: 100 }} />
				<Typography component="p" align="center" style={{ margin: '10px 0', fontSize: '.75rem' }}>
					Built with{' '}
					<span role="img" aria-label="Emojis">
						❤️
					</span>{' '}
					by {' '}
					<a href="www.mrsalcedo.com" title="Salcedo">
						{' '}
						Salcedo{' '}
					</a>
					.
				</Typography>
			</main>
		</div>
	)
}

App.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)