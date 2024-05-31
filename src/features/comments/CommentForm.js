import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
     Button,
     Modal,
     ModalHeader,
     ModalBody,
     FormGroup,
     Label
} from 'reactstrap'
import { validateCommentForm } from "../../utils/validateCommentForm";
import { addComment } from "./commentsSlice";

const CommentForm = ({ campsiteID }) => {               //In its parameter list, destructure a campsiteId prop, using object destructuring syntax.
     const [modalOpen, setModalOpen] = useState(false); //Initialize the modalOpen variable's value
                                                       //to false by passing that value as an argument to useState().
     const dispatch = useDispatch();

     const handleSubmit = (values) => {

          const comment = {
               campsiteID: parseInt(campsiteID),
               rating: values.rating,
               author: values.author,
               text: values.commentText,
               date: new Date(Date.now()).toISOString()
          };
          console.log('comment:', comment);
          dispatch(addComment(comment));
          setModalOpen(false);
     };
     
     return (
          <> {/* Fragment */}
           <Button outline onClick={() => setModalOpen(true)}> {/* cause the Modal to open. */}
                    <i className='fa fa-pencil fa-lg' />
                    Add Comment
               </Button>
               <Modal isOpen={modalOpen}>
                    <ModalHeader toggle={() => setModalOpen(false)}>
                         Add Comment
                    </ModalHeader>
                    <Formik
                         initialValues={{
                              rating: undefined,
                              author: '',
                              commentText:''
                         }}
                         onSubmit={handleSubmit}
                         validate={validateCommentForm}

                    >
                         <Form fluid className='p-3'>
                              <FormGroup>
                                   <Label htmlFor='rating'>
                                        Rating
                                   </Label>
                                   <Field
                                    name='rating'
                                    as='select'
                                    className='form-control'
                                >
                                    <option value=''>Select...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                   </Field>
                                   <ErrorMessage name='rating'>
                                         {(msg) => <p className='text-danger'>{msg}</p>}
                                   </ErrorMessage>
                              </FormGroup>
                              <FormGroup htmlFor='author'>
                                   <Label>
                                        Your Name
                                   </Label>
                                     <Field
                                    name='author'
                                    placeholder='Your Name'
                                    className='form-control'
                                   />
                                   <ErrorMessage name='author'>
                                         {(msg) => <p className='text-danger'>{msg}</p>}
                                   </ErrorMessage>
                              </FormGroup>
                              <FormGroup htmlFor='commentText'>
                                   <Label>
                                        Comment
                                   </Label>
                                     <Field
                                    name='commentText'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                   />
                                   <ErrorMessage name='commentText'>
                                         {(msg) => <p className='text-danger'>{msg}</p>}
                                   </ErrorMessage>
                              </FormGroup>
                              <Button type='submit' color='primary'>
                                   Submit
                              </Button>
                         </Form>
                    </Formik>
               </Modal>
          </>
     );
};

export default CommentForm;

