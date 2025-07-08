function TransactionRow(props){
    const data = props.data
    const req = data&&data.Data&&data.Data[0]
    return(
        <tr>
            <td>{props.index}</td>
            <td>{data.description}</td>
            <td>{req&&req.title}</td>
            <td>{new Date(data.date).toLocaleDateString('fa')}</td>
        </tr>
    )
}
export default TransactionRow