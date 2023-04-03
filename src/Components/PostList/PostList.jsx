
const PostList = (props) => {
    return ( 
        <table>
            <thead>
            <th>
                <tr>Name</tr>
                <tr>Post</tr>
            </th>
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