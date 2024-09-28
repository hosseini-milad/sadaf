function TransactionRow(props){
    const data = props.data
    return(
        <tr>
            <td>{props.index}</td>
            <td>{data.reserveId}</td>
            <td>{data.trackId}</td>
            <td>{data.status}</td>
            <td>{data.payMessage}</td>
            <td>{new Date(data.date).toLocaleDateString('fa')}</td>
        </tr>
    )
}
export default TransactionRow