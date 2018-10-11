// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { Checkbox } from '@infinitecsolutions/semantic-ui-react';
// import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';
// import { withInfo } from '@storybook/addon-info';
// import Alert from 'features/Notification/Alert';
// import { ToastContainer, style, toast } from 'react-toastify';

// const stories = storiesOf('Notifications/Alerts', module);

// stories.addDecorator(withKnobs);

// stories.add(
//   'Alerts Basic example',
//   withInfo(
//     'Alerts show to support a form. Usually they appear after you have submited the form, and the position should be below the title and above the subtitle. Never floats.'
//   )(() => (
//     <React.Fragment>
//       <Alert kind="ALERT" type="error" body="Supporting statement is here." />
//       <br />
//       <Alert kind="ALERT" type="warning" body="Supporting statement is here." />
//       <br />
//       <Alert kind="ALERT" type="success" body="Supporting statement is here." />
//       <br />
//       <Alert kind="ALERT" type="info" body="Supporting statement is here. " />
//     </React.Fragment>
//   ))
// );

// stories.add(
//   'Alerts interactive ',
//   withInfo(
//     'Alerts show to support a form. Usually they appear after you have submited the form, and the position should be below the title and above the subtitle. Never floats.'
//   )(() => (
//     <React.Fragment>
//       <Alert
//         kind="ALERT"
//         type={select('type', ['warning', 'info', 'success', 'error'], 'success')}
//         body={text('body', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}
//       />
//     </React.Fragment>
//   ))
// );

// storiesOf('Alerts', module);
