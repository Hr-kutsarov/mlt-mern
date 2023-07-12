import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Loading.css'

export function Loading() {
    return (
        <Box id="loading-wrapper">
            <CircularProgress />
        </Box>
    )
}