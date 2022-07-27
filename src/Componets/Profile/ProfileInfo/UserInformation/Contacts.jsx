import React from 'react'

import moduleName from '../ProfileInfo.module.css'

export const Contacts = ({ contactsTitle, contactsValue }) => {
    return <div className={moduleName.contact_menu}><b>{contactsTitle}</b>: {contactsValue || "----"}</div>;
};
