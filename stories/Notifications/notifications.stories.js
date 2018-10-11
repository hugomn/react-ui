// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { Checkbox } from '@infinitecsolutions/semantic-ui-react';
// import { withInfo } from '@storybook/addon-info';
// import { ToastContainer, style, toast } from 'react-toastify';
// import Alert from 'features/Notification/Alert';
// import Notification from 'features/Notification';
// import { Provider } from 'react-redux';
// import store from '../../src/reduxUtils/store';
// import notificationActions from '../../src/features/Notification/actions';
// import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

// const stories = storiesOf('Notifications', module);
// stories.addDecorator((story) => <Provider store={store}>{story()}</Provider>);
// stories.addDecorator(withKnobs);

// stories.add(
//   'Notifications',
//   withInfo({
//     inline: true,
//     source: false,
//     text: `
//         Toast notifications appear to inform you about something important,
//         they may close automatically or be left open until the user decides to close them.
//         They may also contain a CTA.
//         There should never be 2 CTA’s, and always the CTA should have a positive action.

//         ##### Usage

//         An action has to be dsipatch, with corresponding type.

//         **info**

//         ~~~js
//         notificationActions.showNotification(
//             {
//               header: "header text",
//               body: "body",
//             },
//             {
//               type: info,
//               autoClose: true,
//               position: 'top-left',
//               closeOnClick: false
//             }
//           )
//         ~~~

//         **success**

//          ~~~js
//           notificationActions.showNotification(
//               {
//                 header: "header text",
//                 body: "body text",
//               },
//               {
//                 type: success,
//                 autoClose: true,
//                 position: 'top-left',
//                 closeOnClick: false
//               }
//             )
//         ~~~

//         **error**

//          ~~~js
//           notificationActions.showNotification(
//               {
//                 header: "header text",
//                 body: "body text",
//               },
//               {
//                 type: error,
//                 autoClose: true,
//                 position: 'top-left',
//                 closeOnClick: false
//               }
//             )
//         ~~~

//         **warning**

//          ~~~js
//           notificationActions.showNotification(
//               {
//                 header: "header text",
//                 body: "body text",
//               },
//               {
//                 type: warning,
//                 autoClose: true,
//                 position: 'top-left',
//                 closeOnClick: false
//               }
//             )
//         ~~~

//       `,
//   })(() => {
//     const showOptional = select('type', ['warning', 'info', 'success', 'error'], 'success');
//     const notificationHeader = text('header', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
//     const notificationBody = text('body', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
//     const autoClose = number('autoClose', 3000);
//     const position = select(
//       'position',
//       ['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center'],
//       'top-right'
//     );
//     const closeOnClick = boolean('closeOnClick', false);
//     return (
//       <React.Fragment>
//         <button
//           className="primary full"
//           onClick={() =>
//             store.dispatch(
//               notificationActions.showNotification(
//                 {
//                   header: notificationHeader,
//                   body: notificationBody,
//                 },
//                 {
//                   type: showOptional,
//                   autoClose: autoClose,
//                   position: position,
//                   closeOnClick,
//                 }
//               )
//             )
//           }
//         >
//           Show Toast
//         </button>
//         <Notification />
//       </React.Fragment>
//     );
//   })
// );

// storiesOf('Component', module);
