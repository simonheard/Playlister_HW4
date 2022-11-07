import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import { Typography } from '@mui/material'

/*
    Our Status bar React component goes at the bottom of our UI.
    
    @author McKilla Gorilla
*/
function Statusbar() {
    const { store } = useContext(GlobalStoreContext);
    let text ="";
    let statusbar = <div></div>;
    if (store.currentList){
        text = store.currentList.name;
        statusbar = <div id="top5-statusbar">
        <Typography variant="h4">{text}</Typography>
    </div>
    }
    return (
        statusbar
    );
}

export default Statusbar;