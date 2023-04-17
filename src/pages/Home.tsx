import { useState } from "react";
import { TabList, Tab, Tabs, TabPanels, TabPanel } from "@chakra-ui/react";
import { Story } from "./Story";
import { History } from "./History";

export function Home(): JSX.Element {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <Tabs index={tabIndex} onChange={handleTabChange} display="flex" flexDirection="column">
      <TabList justifyContent="space-evenly" display="flex" flexDirection="row">
        <Tab>Stories</Tab>
        <Tab>Reels</Tab>
        <Tab>Rooms</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Story />
        </TabPanel>
        <TabPanel>
          <History />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
