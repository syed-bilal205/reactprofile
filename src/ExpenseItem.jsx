
function ExpenseItem(props){
    const month =props.date.toLocaleString('en-us',{month:'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-us',{day: '2-digit'}) ;
    return(
    <div>
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
        <div>
            <h2>{ props.title }</h2>
            <div>${ props.amount }</div>
        </div>
    </div>    
    );
}

export default ExpenseItem;