import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { NavTabs } from '../../models/nav-tabs-type';

const tabs: NavTabs[] = [
  NavTabs.Dashboard,
  NavTabs.Sites,
  NavTabs.Campaigns,
  NavTabs.Analytics,
  NavTabs.Live_View,
  NavTabs.Users,
  NavTabs.Organizations,
  NavTabs.Settings,
];

const TabPanel = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary">
        {tabs.map((value) => (
          <Tab key={value} label={value} />
        ))}
      </Tabs>
    </Paper>
  );
};

export default TabPanel;
