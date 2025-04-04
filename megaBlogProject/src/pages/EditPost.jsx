import React, { useState, useEffect } from 'react'
import { Container, PostForm } from '../components'
import { Service as appwriteService } from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPosts] = useState(null)
    const { slug } = useParams
    const navigate = useNavigate()
    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug)
                .then((post) => {
                    setPosts(post)
                })
                .catch((err) => {
                    console.error("Error fetching post:", err)
                    setPosts(null)
                })
        }
        else {
            navigate('/')
        }
    }, [slug, navigate])
    return (
        post ? (
            <div className='py-8'>
                <Container>
                <PostForm post={post} />
                </Container>
            </div>
        ) : null
    )
}

export default EditPost