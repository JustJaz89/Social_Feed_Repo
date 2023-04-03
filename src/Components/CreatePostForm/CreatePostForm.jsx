
const CreatePostForm = (props) => {
    return ( 
        <table>
            <thead>
            <th>
                <tr>Name</tr>
                <tr>Post</tr>
            </th>
            </thead>
            <tbody>
            {posts.map((post) => {
                return (
                <tr>
                    <td>{post.name}</td>
                    <td>{post.post}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
     );
}
 
export default CreatePostForm;