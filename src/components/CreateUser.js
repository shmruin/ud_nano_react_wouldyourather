import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import fontawesome from '@fortawesome/fontawesome'
import faArrowAltCircleRight from '@fortawesome/fontawesome-free-regular/faArrowAltCircleRight'
import FineUploaderS3 from 'fine-uploader-wrappers/s3'
import Gallery from 'react-fine-uploader'
import 'react-fine-uploader/gallery/gallery.css'
import Title from './Title'
import userImg from '../img/user.png'
import { handleSaveUser } from '../actions/users'


fontawesome.library.add(faArrowAltCircleRight)

/* File Uploader working with aws s3 - apigateway - lambda */

let s3imageUrl = null

const uploader = new FineUploaderS3({
    options: {
        validation: {
            itemLimit: 1,
            acceptFiles: 'image/*',
            allowedExtensions: ['jpg', 'jpeg', 'bmp', 'png'],
        },
        request: {
            endpoint: 'http://udacity-react-wyr-img-bucket.s3.amazonaws.com',
            accessKey: 'AKIAJVELZ4GLESM35JIQ',
        },
        objectProperties: {
            region: 'ap-northeast-2',
            key(fileId) {
                var prefixPath = 'uploads'
                var filename = this.getName(fileId)
                return prefixPath + '/' + filename
            },
        },
        signature: {
            version: 4,
            endpoint: 'https://9aqufjzwdh.execute-api.ap-northeast-2.amazonaws.com/live2'
        },
        retry: {
            enableAuto: true
        }
    }
})

uploader.on('complete', (id, name, response, xhr) => {
    // handle completed upload
    let preUrl = 'https://s3.ap-northeast-2.amazonaws.com/udacity-react-wyr-img-bucket/uploads/'
    s3imageUrl = preUrl + name
})

uploader.on('error', (id, name, errorReason, xhr) => {
    alert(errorReason)
})

/* File Uploader Ends */



class CreateUser extends Component {
    constructor(props) {
        super(props)

        this.props.history.listen((location, action) => {
            //Clear uploader
            uploader.methods.clearStoredFiles()
            uploader.methods.reset()
        })
    }

    state = {
        basicImageUrl: userImg,
        id: null,
        name: null,
        password: null,
        toHome: false,
    }

    handleChange = (e, option) => {
        switch (option) {
            case 'id':
                this.setState({
                    id: e.target.value,
                })
                break
            case 'name':
                this.setState({
                    name: e.target.value,
                })
                break
            case 'password':
                this.setState({
                    password: e.target.value,
                })
                break
            default:
                console.log('No proper input field to handle change')
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        //TODO : Check if id, name, image
        const { dispatch } = this.props

        let inputA = this.refs.id.value
        let inputB = this.refs.name.value
        let inputC = this.refs.password.value

        if (inputA === '' || inputB === '' || inputC === '') {
            alert('Need to fill in all the forms!')
            return
        } else {
            dispatch(handleSaveUser({
                id: inputA,
                name: inputB,
                password: inputC,
                imgUrl: s3imageUrl,
            }))

            this.setState({
                basicImageUrl: userImg,
                id: null,
                name: null,
                password: null,
                toHome: true,
            })
        }
    }

    handleCancel = (e) => {
        e.preventDefault()

        this.props.history.push('/login')
    }
    

    render() {

        const { toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }

        let { imagePreviewUrl } = this.state
        let $imagePreview = null
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} className='img-fluid rounded-circle' width='200' height='200'/>)
        }

        return (
            <div className='container w-75 text-center'>
                <Title mainTitle='Would You Rather...?' subTitle='# Create Your ID #' />
                <form className='mt-5' onSubmit={this.handleSubmit}>
                    <Gallery uploader={uploader} />
                    <div className='form-group input-group-lg mt-3'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text' id='id'><i className='far fa-arrow-alt-circle-right'></i></span>
                            <input ref='id' type='text' className='form-control' placeholder="Your ID" onChange={(e) => this.handleChange(e, 'id')} />
                        </div>
                    </div>
                    <div className='form-group input-group-lg mb-3'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text' id='name'><i className='far fa-arrow-alt-circle-right'></i></span>
                            <input ref='name' type='text' className='form-control' placeholder="Your Name" onChange={(e) => this.handleChange(e, 'name')} />
                        </div>
                    </div>
                    <div className='form-group input-group-lg mb-3'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text' id='pw'><i className='far fa-arrow-alt-circle-right'></i></span>
                            <input ref='password' type='password' className='form-control' placeholder="Your Password" onChange={(e) => this.handleChange(e, 'password')} />
                        </div>
                    </div>
                    <input type="submit" value="Create" className="btn btn-primary btn-lg mx-2" />
                    <input type="button" value="Cancel" className="btn btn-secondary btn-lg mx-2" onClick={(e) => this.handleCancel(e)} />
                </form>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users: users,
    }
}

export default connect(mapStateToProps)(CreateUser)