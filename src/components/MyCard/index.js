import * as React from 'react';
import MyModal from '../MyModal';
import './index.css';

const MyCard = ({
    title,
    poster
}) => {

    const image_path = 'https://image.tmdb.org/t/p/w500';
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    const handleClose = () => setOpen(!open);

    return (
        <React.Fragment>
            <div className="img_container" onClick={handleOpen}>
                <img
                    className='img'
                    src={image_path + poster}
                    height={200}
                    width={200}
                    alt={title}
                />
            </div>
            <MyModal open={open} handleClose={handleClose} />
        </React.Fragment>
    );
}

export default MyCard;
