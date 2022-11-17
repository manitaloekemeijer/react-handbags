import React from 'react';

function Button({clickButton,buttonName, buttonDisabled}) {
    return (
        <button
            type="button"
            onClick={clickButton}
            disabled={buttonDisabled}
            >
            {buttonName}
        </button>
    );
}

export default Button;