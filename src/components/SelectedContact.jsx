import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import ContactRow from './ContactRow';

export default function SelectedContact({selectedContactId, setSelectedContactId}) {

    const [contact, setContact] = useState(null);
    useEffect(()=>{
        async function fetchContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const json = await response.json();
                setSelectedContactId(json);
                setContact(json);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContact();
    }, []);

    return <ContactRow setSelectedContactId={setSelectedContactId} key={contact?.id} contact={contact} />;

}