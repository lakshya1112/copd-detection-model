const AlumniTable = ()=>{
    return(
        <>
            <div className="record-table-wrapper">
                <table className="record-table">
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Graduation Year</th>
                    <tr>
                        <td>Saatvik Gandhi</td>
                        <td>saatvik43@gmail.com</td>
                        <td>2025</td>
                        <td><button className="connect-btn">Connect</button></td>
                    </tr>
                        <tr>
                            <td>Anusha Rao</td>
                            <td>nusharao2203@gmail.com</td>
                            <td>2025</td>
                        <td><button className="connect-btn">Connect</button></td>
                        </tr>
                        <tr>
                            <td>Lakshya Saxena</td>
                            <td>lakshyasaxena@gmail.com</td>
                            <td>2025</td>
                        <td><button className="connect-btn">Connect</button></td>
                        </tr>
                        <tr>
                            <td>Divyanshi Sharma</td>
                            <td>divyanshisharma@gmail.com</td>
                            <td>2025</td>
                        <td><button className="connect-btn">Connect</button></td>
                        </tr>
                </table>
            </div>
        </>
    )
}


export default AlumniTable;