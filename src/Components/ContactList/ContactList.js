import React from "react";
import { useState, useEffect } from "react";
import Contact from "../Contact/Contact";
import AddContact from "../AddContact/AddContact";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  function AddContactFunction(contact) {
    setContacts([...contacts, contact]);
  }
  function DeleteContactFunction(id) {
    let filteredcontacts = contacts.filter((x) => x.phone !== id);
    setContacts(filteredcontacts);
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <AddContact contactEvent={AddContactFunction} />
        </div>
      </div>
      <div className="row">
        {contacts.map((item) => (
          <Contact
            DeleteContact={DeleteContactFunction}
            key={item.phone}
            fname={item.fname}
            lname={item.lname}
            email={item.email}
            city={item.city}
            phone={item.phone}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactList;
