import React from 'react';


import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {
    const onClick = (e) => {
        console.log(e);
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>

        </header>
    )
};


//defaultProps set a default value if the value is not
//specified
Header.defaultProps = {
    title: 'Task tracker',
}

//PropTypes define the type of each prop
//you che set also one prop to be required, if its not React
//gives an error
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// css in js
// const headingStyle = {
//     color: 'red',
//     backgroundColor:'black'
// }

export default Header;