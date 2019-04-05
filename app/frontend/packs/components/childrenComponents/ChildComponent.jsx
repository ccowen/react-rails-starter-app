import React from 'react';
import Typography from '@material-ui/core/Typography';

class ChildComponent extends React.Component {

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        return (
            <div>
                <Typography variant="subtitle1" gutterBottom>
                    {this.props.text}
                </Typography>
            </div>
        )
    }
}
export default ChildComponent