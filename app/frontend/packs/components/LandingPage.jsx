import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import ChildComponent from'./childrenComponents/ChildComponent'

class LandingPage extends React.Component {
    state = {
        name: 'value is set in state',
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        return (
            <div>
                <Typography variant="h4" gutterBottom>
                    Hello World
                </Typography>
                <ChildComponent text="this text is passed as a prop" />

                <TextField
                    id="standard-name"
                    label="textfield"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />
            </div>
        )
    }
}
export default LandingPage