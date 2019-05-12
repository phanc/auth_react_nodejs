import React from 'react';
import ReactDOM from 'react-dom';

import LoginPage from './components/login-page';

// import './styles/index.scss';

const App = ({}) => {
    return <div className="app-wrapper">
        <LoginPage />
    </div>;
}

ReactDOM.render(<App />, document.getElementById('app'));