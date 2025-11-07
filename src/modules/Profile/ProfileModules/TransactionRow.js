function TransactionRow(props){
    const data = props.data
    return(
        <tr>
            <td>{props.index}</td>
            <td>{data.reserveId}</td>
            <td>{data.trackId}</td>
            <td>{data.status=="0"?"موفق":"ناموفق"}</td>
            <td>{data.payMessage}</td>
            <td>{new Date(data.date).toLocaleDateString('fa')}</td>
        </tr>
    )
}
export default TransactionRow