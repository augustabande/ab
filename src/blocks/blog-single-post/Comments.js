import React from 'react';
import { Link } from 'react-scroll';

import LoadComments from '../../components/loadmore/LoadComments';
import CommentForm from '../../components/form/CommentForm';

const Comments = () => {
    return (
        <div id="comments" className="comments-area spacer m-top-xl">
            <div className="comment-title" data-aos="fade-up">
                <h2>Comments (1)</h2>
            </div>

            <ul className="comment-list list-unstyled style-default" data-aos="fade-up">
                <li className="comment">
                    <div className="comment-wrapper">
                        <div className="comment-details">
                            <div className="comment-content">
                                <div className="comment-content-top">
                                    <div className="d-flex justify-content-between">
                                        <div className="comment-content-top-left">
                                            <h5 className="comment-author">
                                                <a href={ process.env.PUBLIC_URL + "/blog-single-post" } title="Rosie Ford">Rosie Ford</a>
                                            </h5>

                                            <div className="comment-time">
                                                <p className="p-small light">January 14, { new Date().getFullYear() } 3:23 pm</p>
                                            </div>
                                        </div>

                                        <div className="comment-content-top-right">
                                            <div className="comment-reply no-space">
                                                <Link title="Reply" spy={ true } smooth={ true } duration={ 0 } to="reply-title" href="#reply-title" className="comment-reply-link btn btn-link p-0 border-0 min-w-auto link-no-space scroll-to-id">Reply</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="comment-content-bottom">
                                    <div className="comment-description">
                                        <div className="d-flex">
                                            <p className="quote"><i className="fas fa-quote-left"></i></p>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <LoadComments />

            <div id="respond" className="comment-respond block spacer m-top-xl">
                <h2 id="reply-title" className="comment-reply-title spacer m-bottom-lg" data-aos="fade-up">Leave a reply <a rel="nofollow" id="cancel-comment-reply-link" className="btn btn-link border-0 p-0 min-w-auto link-no-space" href="/blog-single-post" style={{ display: "none" }}>Cancel reply</a></h2>

                <CommentForm />
            </div>
        </div>
    );
};

export default Comments;
