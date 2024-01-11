import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CreateNewModelTab from './CreateNewModelTab';

export default function NewModelTab({ tabNames }) {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const availableTabs = tabNames.map((name, index) => <Tab key={index} label={name} value={index} />);

    return (
        <Box sx={{ width: '100%', typography: 'body1' }} className="pt-10">
            <TabContext value={tabValue}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList aria-label="Model tabs" centered onChange={handleTabChange}>
                        {availableTabs}
                    </TabList>
                </Box>
                {tabNames.map((name, index) => (
                    <TabPanel key={index} value={index}>
                        <CreateNewModelTab name={name} />
                    </TabPanel>
                ))}
            </TabContext>
        </Box>
    );
}
