// const alertStyle = {
//     backgroundColor: 'lightgrey',
//     fontSize: 20,
//     borderStyle: 'solid',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10
// }

// const Alert = ({color="red", children}) => {
//     return <>
//         <p style={{...alertStyle, color}}>{children}</p>
//     </>
// }
import clsx from 'clsx';

import css from './Alert.module.css';
const Alert = ({ variant, isOutline, isElevated, children }) => { 
    return <p
        className={clsx(css[variant], {
            [css.isOutline]: isOutline,
            [css.isElevated]: isElevated
        })}>
        {children}
    </p>
}

export default Alert;