import Post from "../PostFolder/Post";

const PostList = (props) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Post</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.postEntries.map((post, index) => {
                    return (
                        <tr key={index}>
                            <td>{post.name}</td><br></br>
                            <td>{post.post}</td>
                            <td>
                                <Post /> 
                            </td>
                        </tr>
                    );
                }).reverse()}
            </tbody>
        </table>
     );
}
 
export default PostList;