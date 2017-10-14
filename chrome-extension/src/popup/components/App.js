import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import syntaxStyle from './syntaxStyle';
import styles from './App.css';

import MdSave from 'react-icons/lib/md/save';

import MdAutorenew from 'react-icons/lib/md/autorenew';
import MdPlayCircleOutline from 'react-icons/lib/md/play-circle-outline';
import Notifications, {notify} from 'react-notify-toast';

const App = props => (
  <div>
    <SyntaxHighlighter language="javascript" style={syntaxStyle}>
      {`const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
${props.recording.reduce((records, record, i) => {
        const { action, url, selector, value } = record;
        let result = records;
        if (i !== records.length) result += '\n';

        switch (action) {
          case 'change':
            result += `.type('${selector}', '${value}')`;
            break;
          case 'click':
            result += `.click('${selector}')`;
            break;
          case 'goto':
            result += `.goto('${url}')`;
            break;
          case 'reload':
            result += '.refresh()';
            break;
        }

        return result;
      }, '')}
.end()
.then(function (result) {
  console.log(result)
})
.catch(function (error) {
  console.error('Error:', error);
});`}
    </SyntaxHighlighter>
    <Notifications />
    <div className={styles.button_wrapper}>
      <button className={styles.button} onClick={props.handleRestart}>
        <MdAutorenew />
      </button>

      <button
        className={styles.button}
        onClick={() => {
          const data = {
            code: document
              .querySelector('#root > div > pre > code')
              .innerText.replace(/(\r\n|\n|\r)/gm, ''),
          };
          fetch('https://uhack-6f65a.firebaseio.com/auto_codes.json', {
            method: 'post',
            body: JSON.stringify(data),
          })
            .then(response => response.json())
            .then(data => {});
            notify.show('Saved!');
        }}
      > 
        <MdSave />
      </button>

      <button className={styles.button}>
        <MdPlayCircleOutline />
      </button>
    </div>
  </div>
);

App.displayName = 'App';

export default App;
