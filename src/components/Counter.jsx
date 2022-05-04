import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MovieIcon from '@mui/icons-material/Movie';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function Counter(props) {
    let [count, setCount] = useState(0);
    const urlList = [
        '',
        'https://www.linkedin.com/in/akshay-bandivadekar/',
        'https://twitter.com/Er_AkshayB',
        'https://movie-review-expert-pwa.netlify.app/'
    ]
    const [value, setValue] = React.useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function restart() {
        setCount(0);
    }

    return(
        <Box className="counter-parent-container">
            <h3>Counter Progressive Web App</h3>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0.5}
            >
                <span className="count-span">{count}</span>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0.5}
                    className="counter-container"
                >
                    <Button variant="contained" size="large" className="counter-button" onClick={increment} endIcon={<AddCircleIcon />}>
                        Increment
                    </Button>
                    <Button variant="contained" size="large" className="counter-button" onClick={decrement} endIcon={<RemoveCircleIcon />}>
                        Decrement
                    </Button>
                    <Button size="large" color="secondary" onClick={restart} endIcon={<RestartAltIcon />}>
                        Restart
                    </Button>
                </Stack>
            </Stack>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        if(urlList[newValue]) {
                            window.open(urlList[newValue], '_blank');
                        }
                    }}
                >
                    <BottomNavigationAction label="Counter" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
                    <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
                    <BottomNavigationAction label="Movie Review" icon={<MovieIcon />} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
};

export default Counter;