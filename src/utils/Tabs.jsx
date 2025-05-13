import React, { useState } from "react";
import "./Tabs.css"; // Assuming you have some CSS for styling
import React from "react";
import Tabs from "../utils/Tabs";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="widget-tabs">
      <div className="widget-menu-tab">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`item-title ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="widget-content-tab">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`content ${activeTab === index ? "active" : ""}`}
            style={{ display: activeTab === index ? "block" : "none" }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
// Example usage of the Tabs component

const App = () => {
    const tabsData = [
        { title: "Tab 1", content: "This is the content of Tab 1" },
        { title: "Tab 2", content: "This is the content of Tab 2" },
        { title: "Tab 3", content: "This is the content of Tab 3" },
    ];

    return (
        <div>
            <h1>Tabs Example</h1>
            <Tabs tabs={tabsData} />
        </div>
    );
};

export default App;
