export default function Score(props) {
    return (
    <div >
     <h3>{props.name}</h3>
     <p>{props.bio}</p>
   
    <table>
        <tr>
            <th>Date</th>
            <th>Score</th>
        </tr>
            
    {props.scores.map(scr => 
        <tr>
            <td>{scr.date}</td>
            <td>{scr.score}</td>
        </tr> )}
        </table>
    </div>
        )
}