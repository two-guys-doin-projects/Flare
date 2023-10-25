import { DisplayAvailableModels } from './DisplayAvailableModels/DisplayAvailableModels';
import { useEffect, useState } from "react";
import AddNewModel from './AddNewModel/AddNewModel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function ModelPage(){
    const [modelList, setModelList] = useState([])

    useEffect(function() {
        fetch("http://0.0.0.0:8082/models/list")
            .then(res => res.json())
            .then(data => setModelList(data))
    }, [modelList])
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    

    return (
        <>
            <h1>Model</h1>
            <DisplayAvailableModels   modelList={modelList}  />
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                        <Tab label="Sieć neuronowa" value="1" />
                        
                    </TabList>
                    </Box>
                    <TabPanel value="1">
                        <AddNewModel />
                    </TabPanel>
                    
                </TabContext>
            </Box>
            
        </>
    )
}

export default ModelPage