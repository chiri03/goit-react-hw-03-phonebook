import './ContactsList.css';

export const SingleContact = ({ id, name, number, onRemove }) => { 
    return (
        <div className="contacts-li">
            - {name}: {number}
            <button className="contacts-button" onClick={() => onRemove(id)}>Remove</button>
        </div>
    );
};

export const ContactsList = ({ contacts, onRemove }) => { 
    return (
        <ul className="contacts-ul ">
            {contacts.map((contact) => (
                <SingleContact
                    key={contact.id} 
                    {...contact}
                    onRemove={onRemove}
                />
            ))}
        </ul>
    );
};