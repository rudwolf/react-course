import { useState } from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs buttons={
        Object.keys(EXAMPLES).map((key) => (
          <TabButton
            key={key}
            isSelected={key === selectedTopic}
            onClick={() => handleSelect(key)}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </TabButton>
        ))
      }>{tabContent}</Tabs>
    </Section>
  );
}