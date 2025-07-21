function RequestRow(props){
    const data = props.data
    const req = data&&data.Data
    return(
        <tr>
            <td>{props.index}</td>
            <td>{data.description}</td>
            <td>{data.category}</td>
            <td>{data.active?"منتشر شده":"منتشر نشده"}</td>
            <td>{new Date(data.date).toLocaleDateString('fa')}</td>
        </tr>
    )
}
export default RequestRow