
export function colorClass(color){
    let cardClass = '';

    switch(color){
        case 'blue':
        case 'primary':
            cardClass += 'primary';
            break;
        case 'green':
        case 'success':
            cardClass += 'success';
            break;
        case 'lightblue':
        case 'babyblue':
        case 'info':
            cardClass += 'info';
            break;
        case 'red':
        case 'danger':
            cardClass += 'danger';
            break;
        case 'yellow':
        case 'warning':
            cardClass += 'warning';
            break;
    }

    return cardClass;
}