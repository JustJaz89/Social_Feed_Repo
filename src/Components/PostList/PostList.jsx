
const PostList = (props) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Post</th>
                </tr>
            </thead>
            <tbody>
                {props.postEntries.map((post, index) => {
                    return (
                        <tr key={index}>
                            <td>{post.name}</td>
                            <td>{post.post}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
     );
}
 
export default PostList;