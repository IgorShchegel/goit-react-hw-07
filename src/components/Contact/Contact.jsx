import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { FaPhoneAlt,FaUser } from "react-icons/fa";
import { deleteContact } from '../../redux/contactsOps';


const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteContact(id));
    
    
    
  return (
   <div className={css.listItem}>
      <div className={css.contactBox}>
      <p className={css.text}><FaUser /> <b>{name}</b></p>
      <p className={css.text}><FaPhoneAlt /> <b>{number}</b></p>
       </div>
      <button className={css.buttonDlt} onClick={() => handleDelete(id)}>Delete</button>
    </div>
  )
}

export default Contact