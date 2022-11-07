import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Typography, Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIRemoveSongModal() {
    const { store } = useContext(GlobalStoreContext);

    function handleConfirmRemoveSong () {
        store.addRemoveSongTransaction();
    }

    function handleCancelRemoveSong () {
        store.hideModals();
    }

    let songTitle = "";
    if (store.currentSong) {
        songTitle = store.currentSong.title;
    }

    return (
        <Modal
            open={store.currentSong !== null}
            onClose={handleCancelRemoveSong}
        >
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    Remove {songTitle}?
                </Typography>
                <Typography  sx={{ mt: 2 }}>
                    Are you sure you wish to permanently remove {songTitle} from the playlist?
                </Typography>
                <Button
                    onClick={handleConfirmRemoveSong}
                >Confirm</Button>
                <Button
                    onClick={handleCancelRemoveSong}
                >Cancel</Button>

            </Box>
        </Modal>
    );
}