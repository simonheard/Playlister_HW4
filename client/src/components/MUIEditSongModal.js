import { useContext, useState } from 'react'
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

export default function MUIEditSongModal() {
    const { store } = useContext(GlobalStoreContext);
    const [ title, setTitle ] = useState(store.currentSong.title);
    const [ artist, setArtist ] = useState(store.currentSong.artist);
    const [ youTubeId, setYouTubeId ] = useState(store.currentSong.youTubeId);

    function handleConfirmEditSong() {
        let newSongData = {
            title: title,
            artist: artist,
            youTubeId: youTubeId
        };
        store.addUpdateSongTransaction(store.currentSongIndex, newSongData);        
    }

    function handleCancelEditSong() {
        store.hideModals();
    }

    function handleUpdateTitle(event) {
        setTitle(event.target.value);
    }

    function handleUpdateArtist(event) {
        setArtist(event.target.value);
    }

    function handleUpdateYouTubeId(event) {
        setYouTubeId(event.target.value);
    }

    return (
        <Modal
            open={store.currentSong !== null}
        >
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    Edit Song
                </Typography>
                <div
                    id="edit-song-modal-content"
                    className="modal-center">
                    <div id="title-prompt" className="modal-prompt">Title:</div>
                    <input 
                        id="edit-song-modal-title-textfield" 
                        className='modal-textfield' 
                        type="text" 
                        defaultValue={title} 
                        onChange={handleUpdateTitle} />
                    <div id="artist-prompt" className="modal-prompt">Artist:</div>
                    <input 
                        id="edit-song-modal-artist-textfield" 
                        className='modal-textfield' 
                        type="text" 
                        defaultValue={artist} 
                        onChange={handleUpdateArtist} />
                    <div id="you-tube-id-prompt" className="modal-prompt">You Tube Id:</div>
                    <input 
                        id="edit-song-modal-youTubeId-textfield" 
                        className='modal-textfield' 
                        type="text" 
                        defaultValue={youTubeId} 
                        onChange={handleUpdateYouTubeId} />
                </div>
                <Button
                    onClick={handleConfirmEditSong}
                >Confirm</Button>
                <Button
                    onClick={handleCancelEditSong}
                >Cancel</Button>
            </Box>
        </Modal>
    );
}