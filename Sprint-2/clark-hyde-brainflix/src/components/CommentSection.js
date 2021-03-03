import '../styles/CommentSection.scss';
import Form from './Form';
import Comment from './Comment';
import React, { Component } from 'react';
//import CommentList from './CommentList';

function CommentSection({vids}) {
        return (
            <section className="comment-section">
                <p className="comment-section__description"></p>
                <h2 className="comment-section__counter">3 Comments</h2>
            <Form />
    
            </section>
        );
}



export default CommentSection;

