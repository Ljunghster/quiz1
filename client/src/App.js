import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Quiz from './Quiz';
import HighScore from './HighScore';
import ImgPage from './imgpage';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/images" component={ImgPage} />
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/highscores" component={HighScore} />
                    <Route exact path="/quiz" component={Quiz} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
