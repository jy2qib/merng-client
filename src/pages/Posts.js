import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition } from 'semantic-ui-react';
import { AuthContext } from '../context/auth';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { FETCH_POSTS_QUERY } from '../util/graphql';  //imports created SCHEMA

function Posts() {
    //const { loading, data } = useQuery(FETCH_POSTS_QUERY); - old approach
    const { user } = useContext(AuthContext);

    const [posts, setPosts] = useState([]);   //below is the original erroneous method
    const { loading, data } = useQuery(FETCH_POSTS_QUERY);  // const { loading, data: { getPosts: posts } } = useQuery(FETCH_POSTS_QUERY);

    useEffect(() => {
        if (data) {
            setPosts(data.getPosts);
        }
    }, [data]);

    if (data) { console.log(data); };
    return (
        <Grid columns={3}>
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
        </Grid> 
    );
}

export default Posts;