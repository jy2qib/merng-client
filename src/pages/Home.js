import React from 'react'; 
/* import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { AuthContext } from '../context/auth';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { FETCH_POSTS_QUERY } from '../util/graphql';  //imports created SCHEMA 
import { Grid, Transition } from 'semantic-ui-react'; */
import { Grid } from 'semantic-ui-react';
import coder from '../img/coder.jpg'; // with import

function Home() {

    //Move to Posts.js
    /* const { user } = useContext(AuthContext);  
    const [posts, setPosts] = useState([]);   
    const { loading, data } = useQuery(FETCH_POSTS_QUERY);  

    useEffect(() => {
        if (data) {
            setPosts(data.getPosts);
        }
    }, [data]); */

    return (
        <Grid columns={2}>
            <Grid.Row>
                    <h1>Welcome!</h1>
            </Grid.Row>
            <Grid.Row >
                <Grid.Column>
                <h2>User 123456.</h2>
                <p><strong>This is a demonstration of an application developed using React, GraphQL, Apollo, Semantic UI and MongoDB.</strong></p>
                <p>Sed et ligula eget lorem commodo dapibus et in augue. Donec eu est vitae ex ultrices gravida id ac ante. 
                    Aenean pulvinar et risus in molestie. Cras egestas, augue quis dapibus scelerisque, nibh augue ornare nulla, 
                    eu fringilla massa velit et magna. Aliquam varius aliquet tortor. Etiam dignissim ex ultrices nisi accumsan, sed commodo sem lobortis. </p>
                <p>Aenean maximus, elit a venenatis rutrum, lectus mauris congue tellus, sit amet elementum mauris ipsum vel elit. 
                    Aenean fringilla interdum vestibulum. Phasellus ac pulvinar lorem, nec molestie tortor. Praesent quam risus, 
                    tempor vel elit eget, egestas pharetra purus.</p>
                </Grid.Column>
                <Grid.Column>
                    <img src={ coder } alt="I am a coder!" />
                </Grid.Column>
            </Grid.Row>
        </Grid> 
        /* <Grid columns={3}>
            <Grid.Row>
                <h1>Recent Posts</h1>
            </Grid.Row>
            <Grid.Row>
              { user && (
                  <Grid.Column>
                      <PostForm />
                  </Grid.Column>
              )}
                {loading ? (
                    <h1>Loading posts...</h1>
                ) : (
                    //data.getPosts && data.getPosts.map((post) => (   - old approach
                    <Transition.Group>
                     {posts && posts.map((post) => (
                        <Grid.Column key={post.id}>
                            <PostCard post={post} />
                        </Grid.Column>
                    ))}
                    </Transition.Group>
                )}
            </Grid.Row>
        </Grid> */
    );
}

export default Home;