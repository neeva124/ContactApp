// import React from "react";
// import ContactCard from './ContactCard';
// const ContactList = (props) =>        //accessing props
// {
//     const deleteContactHandler = (id) =>{
//         props.getContactId(id);
//     };
//     const renderContactList = props.contacts.map((contact)=>          //rendering,mapping
//     {
//         return(<ContactCard contact = {contact} clickHander={deleteContactHandler} key={contact.id}/>);
//     }    
//         );
//     console.log(props);
//     return(
//         <div className="ui celled list">
//            {renderContactList}
//         </div>
//     )
// };
// export default ContactList;
import React from "react";

const ContactList = ({ contacts, getContactId }) => {

  const deleteContact = (id) => {
    getContactId(id);
  };

  const renderContactList = contacts.map((contact) => {
    return (
      <div className="item" key={contact.id}>
        <div className="content">
          <div className="header">{contact.name}</div>
          <div>{contact.email}</div>
        </div>
        <i 
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px", cursor: "pointer" }}
          onClick={() => deleteContact(contact.id)}
        ></i>
      </div>
    );
  });

  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;