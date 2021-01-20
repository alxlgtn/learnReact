import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Profile Data
let galeryData = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
]
let aboutData = [
    {
        avatarImg: 'https://html5css.ru/howto/img_avatar.png',
        nickName: 'Alxlgtn',
        firstName: 'Alexey',
        secondName: 'Legotin',
        birthday: '13 april 1976',
        city: 'Kemerovo',
        education: 'KemGU',
        site: 'http://react.kuz',
    },
]
let submitPostData = [
    {
        headerText: 'What\'s new?',
        textareaName: 'text',
        textareaId: '0001',
        textareaCols: '30',
        textareaRows: '2',
        textareaPlaceholder: '...',
        buttonText: 'Sand',

    },
]
let postsData = [
    {
        avaImg: 'https://html5css.ru/howto/img_avatar.png',
        avaImgAlt: 'alt text',
        usrName: 'Alex Legotin',
        postDate: '08.12.2020',
        postTime: '12:27',
        postText: 'Привет мой внутренний мир!!!',
        postLikeCount: '13',
        postViewsCount: '666',
    },
    {
        avaImg: 'https://html5css.ru/howto/img_avatar.png',
        avaImgAlt: 'alt text',
        usrName: 'Kost Ivanov',
        postDate: '25.12.2020',
        postTime: '03:26',
        postText: 'Да ужжжж!!!',
        postLikeCount: '21',
        postViewsCount: '1000',
    },
]

// Dialogs Data
let DialogsData = [
    {
        id: 1,
        name: 'Alex Lgtn',
        imageLink: 'https://html5css.ru/howto/img_avatar.png',
        imageAltText: 'ava1'
    },
    {
        id: 2,
        name: 'Pevel Legotin',
        imageLink: 'https://html5css.ru/howto/img_avatar.png',
        imageAltText: 'ava2'
    },
    {
        id: 3,
        name: 'Konstantin Ivanov',
        imageLink: 'https://html5css.ru/howto/img_avatar.png',
        imageAltText: 'ava3'
    },
    {
        id: 4,
        name: 'Dasha Lindenau',
        imageLink: 'https://html5css.ru/howto/img_avatar.png',
        imageAltText: 'ava4'
    },
    {
        id: 5,
        name: 'Denis Ignatenko',
        imageLink: 'https://html5css.ru/howto/img_avatar.png',
        imageAltText: 'ava5'
    },
    {
        id: 6,
        name: 'Liza',
        imageLink: 'https://html5css.ru/howto/img_avatar.png',
        imageAltText: 'ava6'
    },
    {
        id: 7,
        name: 'Dania',
        imageLink: 'https://html5css.ru/howto/img_avatar.png',
        imageAltText: 'ava7'
    },
    {
        id: 8,
        name: 'Vitaly Belobritsky',
        imageLink: 'https://html5css.ru/howto/img_avatar.png',
        imageAltText: 'ava7'
    },
]

let MessagesData = [
    {
        avaImage: 'https://html5css.ru/howto/img_avatar.png',
        messageText: 'В целом, конечно, консультация с широким активом играет определяющее значение'
    },
    {
        avaImage: 'https://html5css.ru/howto/img_avatar.png',
        messageText: 'Идейные соображения высшего порядка, а также убеждённость некоторых оппонентов предполагает независимые способы реализации позиций'
    },
    {
        avaImage: 'https://html5css.ru/howto/img_avatar.png',
        messageText: 'Как уже неоднократно упомянуто, реплицированные с зарубежных источников, современные исследования могут быть функционально разнесены на независимые элементы.'
    },
    {
        avaImage: 'https://html5css.ru/howto/img_avatar.png',
        messageText: 'Учитывая ключевые сценарии поведения, базовый вектор развития не оставляет шанса для поставленных обществом задач.'
    },
    {
        avaImage: 'https://html5css.ru/howto/img_avatar.png',
        messageText: 'Ok!'
    },
    {
        avaImage: 'https://html5css.ru/howto/img_avatar.png',
        messageText: 'KuKu!'
    },
    {
        avaImage: 'https://html5css.ru/howto/img_avatar.png',
        messageText: 'Chao!'
    },
    {
        avaImage: 'https://html5css.ru/howto/img_avatar.png',
        messageText: 'Oooops!'
    },
    {
        avaImage: 'https://html5css.ru/howto/img_avatar.png',
        messageText: 'LaLaLa!'
    },
]

ReactDOM.render(
  <React.StrictMode>
    <App
        galeryData={galeryData}
        aboutData={aboutData}
        submitPostData={submitPostData}
        postsData={postsData}

        DialogsData={DialogsData}
        MessagesData={MessagesData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
