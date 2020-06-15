import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Leaderboard from "../Leaderboard/Leaderboard";

const TransitionModal = (props) => {
	const { open, handleClose } = props;

	const useStyles = makeStyles((theme) => ({
		modal: {
		  display: 'flex',
		  alignItems: 'center',
		  justifyContent: 'center',
		},
		paper: {
		  backgroundColor: theme.palette.background.paper,
		  border: '2px solid #000',
		  boxShadow: theme.shadows[5],
		  padding: theme.spacing(2, 4, 3),
		},
	}));

	const classes = useStyles();

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			className={classes.modal}
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={open}>
				<div className={classes.paper}>
					<h2 id="transition-modal-title">Leaderboard</h2>
					<Leaderboard/>
				</div>
			</Fade>
		</Modal>
	);
};

TransitionModal.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	data: PropTypes.array
};

export default TransitionModal;