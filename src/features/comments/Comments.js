import { formatDate } from '../../utils/formatDate';


const Comment = ({ comment }) => {
     if (comment) {
          const { text, rating, author, date } = comment;
          
          return (
               <>
                    <p>
                         {text}
                         <br />
                         {rating}/5 starts -- {author}, {formatDate(date)}
                    </p>
               </>
          );
     }
    
     return null;
     
};

export default Comment;