import {
    Modal,
    Card,
    CardContent,
    Typography,
    CardMedia,
    Paper,
    Badge
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import './index.css'

const cardStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '55%',
    minWidth: 300,
    bgcolor: '#141414',
    boxShadow: 24,
    color: '#fff',
    boxShadow: '2px 6px 17px 19px rgba(0,0,0,0.6)',

}

const useStyles = makeStyles({
    badge: {
        '& .MuiBadge-badge': {
            marginRight: '-15px'
        }
    }
})


const MyModal = ({ open, handleClose, modal_data }) => {

    const image_path = 'https://image.tmdb.org/t/p/w500';

    const { first_air_date, release_date, original_language, name, title, overview, vote_average } = modal_data;

    React.useEffect(() => {
        console.log(modal_data);
    }, [])

    const classes = useStyles();


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Paper elevation={15}>
                    <Card sx={cardStyle}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height={140}
                            image={image_path + modal_data.poster_path}
                        />

                        <CardContent>
                            <Badge className={classes.badge} badgeContent={vote_average} color="secondary">
                                <Typography gutterBottom variant="h5" component="div">
                                    {title || name}
                                </Typography>
                            </Badge>
                            <div className="description">
                                <Typography variant="body2">
                                    {overview}
                                </Typography>
                            </div>

                            <div className="date_langue">
                                <Typography variant="body2" sx={{ mr: 2 }}>
                                    {first_air_date ? "Première sortie: " + first_air_date : "Date de sortie: " + release_date}
                                </Typography>

                                <Typography variant="body2">
                                    {"Pays: " + original_language.toUpperCase()}
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Paper>
            </Modal>
        </div>
    );
}

export default MyModal;