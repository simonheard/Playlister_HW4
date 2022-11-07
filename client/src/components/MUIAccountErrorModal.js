import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Alert, Button } from '@mui/material';
import AuthContext from '../auth';

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

export default function MUIAccountErrorModal() {
    const { auth } = useContext(AuthContext);
    function handleCloseModal(event) {
        auth.setErrMsg("");
    }

    let errMsg = "";
    if (auth.errMsg !== ""){
        errMsg=auth.errMsg;
    }

    return (
        <Modal
            open={auth.errMsg !== ""}
        >
            <Box sx={style}>
                <Alert severity="error">{errMsg}</Alert>
                <Button
                    onClick={handleCloseModal}
                >Confirm</Button>
            </Box>
        </Modal>
    );
}