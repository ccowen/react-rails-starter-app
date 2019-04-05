import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import ChildComponent from'./childrenComponents/ChildComponent'

class PageTwo extends React.Component {
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
                    Hello World 2
                </Typography>
                <ChildComponent text="this section is react" />

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
export default PageTwo