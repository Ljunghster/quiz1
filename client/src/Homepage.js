import React from 'react';
import { Menu } from 'semantic-ui-react';

class Homepage extends React.Component {
    render() {
        return (
            <Menu>
                <Menu.Item
                name='geoQuiz'
                onClick={() => {
                    this.props.history.push('/quiz');
                }}
                >
            Geography Quiz
                </Menu.Item>
            </Menu>
        );
    }
}

export default Homepage;
