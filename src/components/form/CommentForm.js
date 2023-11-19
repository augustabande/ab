import React, { Component } from 'react';
import axios from 'axios';

class CommentForm extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            values: {
                comment: '',
                author: '',
                email: '',
                url: '',
                saveEmail: false
            },
            successMessage: "Sender's message was sent successfully",
            warningMessage: 'Fill up the form, please!',
            errorMessage: 'Something go wrong. Try again later!',
            alertClass: '',
            responseMessage: '',
            alertTimeout: '',
            delay: 5000
        };
    };

    submitForm = async e => {
        e.preventDefault();

        if ( document.querySelector( '#alert' ) ) {
            document.querySelector( '#alert' ).remove();
        }

        this.setState( { isSubmitting: true } );

        axios.post( 'https://store.adveits.com/API/form.php', this.state.values, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
        }, ).then( response => {
            if ( response.data.status === 'success' ) {
                this.setState( { responseMessage: this.state.successMessage } );
            }

            if ( response.data.status === 'warning' ) {
                this.setState( { responseMessage: this.state.warningMessage } );
            }

            if ( response.data.status === 'error' ) {
                this.setState( { responseMessage: this.state.errorMessage } );
            }

            this.callAlert( this.state.responseMessage, response.data.status )
        } ).catch( error => {
            this.callAlert( this.state.errorMessage, 'error' )
        } );

    };

    removeAlert = () => {
        clearTimeout( this.state.alertTimeout );

        this.setState( {
            alertTimeout: setTimeout( function() {
                    var element = document.querySelector( '#alert' );
                    element.classList.remove( 'fadeIn' );
                    element.classList.add( 'fadeOut' );

                    setTimeout( function() {
                        element.remove()
                    }, 900 )
                }, this.state.delay
            )
        } );
    };

    callAlert = ( message, type ) => {
        if ( ! document.querySelector( '#alert' ) ) {
            if ( type === 'success' ) {
                this.setState( { alertClass: 'success' } )
            }

            if ( type === 'error' ) {
                this.setState( { alertClass: 'danger' } )
            }

            if ( type === 'warning' ) {
                this.setState( { alertClass: 'warning' } )
            }

            var alert = '<div id="alert" class="animated fadeIn alert alert--shadow alert-' + this.state.alertClass + '">' + message + '</div>';

            var element = document.querySelector( '#comment-form' );

            element.insertAdjacentHTML( 'beforeend', alert );

            this.removeAlert();
        }
    };

    handleInputChange = e =>
        this.setState( {
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value
            }
    } );

    handleCheckBox = e =>
    this.setState( {
        values: {
            ...this.state.values,
            saveEmail: !this.state.values.saveEmail
        }
    });

    render() {
        return (
            <form onSubmit={ this.submitForm } action="form.php" method="post" id="comment-form" className="comment-form" data-aos="fade-up">
                <div className="form-group form-group-sm">
                    <p className="comment-notes">Your email address will not be published. Required fields are marked <span className="required">*</span></p>
                </div>

                <div className="form-group form-group-sm" data-aos="fade-up">
                    <label htmlFor="comment" className="form-label-lg before">Comment *</label>
                    <textarea 
                        id="comment" 
                        name="comment" 
                        cols="45" 
                        rows="8" 
                        placeholder="Enter your comment" 
                        required="required" 
                        className="form-control form-control-lg"
                        value={ this.state.values.comment }
                        onChange={ this.handleInputChange }
                    ></textarea>
                </div>

                <div className="form-group form-group-sm" data-aos="fade-up">
                    <label htmlFor="author" className="form-label-lg before">Name *</label>
                    <input 
                    id="author" 
                    name="author" 
                    type="text" 
                    placeholder="Enter your name" 
                    required="required" 
                    className="form-control form-control-lg"
                    value={ this.state.values.author }
                    onChange={ this.handleInputChange }
                    />
                </div>

                <div className="form-group form-group-sm" data-aos="fade-up">
                    <label htmlFor="email" className="form-label-lg before">Email *</label>
                    <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        required="required" 
                        className="form-control form-control-lg"
                        value={ this.state.values.email }
                        onChange={ this.handleInputChange }
                    />
                </div>

                <div className="form-group form-group-sm" data-aos="fade-up">
                    <label htmlFor="url" className="form-label-lg before">Website</label>
                    <input 
                        id="url" 
                        name="url" 
                        placeholder="Enter your website" 
                        type="url" 
                        className="form-control form-control-lg"
                        value={ this.state.values.url }
                        onChange={ this.handleInputChange }
                    />
                </div>

                <div className="form-group form-group-sm" data-aos="fade-up">
                    <p className="comment-form-cookies-consent custom-control custom-checkbox before">
                        <input 
                            id="wp-comment-cookies-consent" 
                            className="custom-control-input" 
                            name="wp-comment-cookies-consent" 
                            type="checkbox"
                            checked={ this.state.saveEmail }
                            onChange={ this.handleCheckBox }
                        />
                        <label className="custom-control-label font-weight-normal" htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                    </p>
                </div>

                <div className="form-submit" data-aos="fade-up">
                    <input name="submit" type="submit" className="btn btn-primary" value="Post Comment" />
                </div>
            </form>
        );
    };
};

export default CommentForm;
