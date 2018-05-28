import React, {Component} from 'react';
import PropTypes from 'prop-types';

class GistDisplay extends Component {

    static propTypes = {
        gist: PropTypes.object
    };

    render() {
        const style = {border: '5px groove salmon', borderRadius: '4%'};
        if (this.props.gist) {
            const {gist: {
                htmlUrl,
                id,
                gitPullUrl,
                description,
                ownerLogin,
                avatarUrl,
            }} = this.props;
            return <div style={style}>
                <h4>GistDisplay</h4>
                <img src={avatarUrl} alt=''/>
                <p>{ownerLogin}</p>
                <a href={htmlUrl}>Gist Address</a>
                <p>{description}</p>
                <a href={gitPullUrl}>Git Pull</a>
                <p>{id}</p>
            </div>;
        } else {
            return <div style={style}>
                <h1>WOAAAHHH</h1>
                <p>There was no gist data</p>
                <pre>
                        {JSON.stringify()}
                    </pre>
            </div>;
        }

    }
}

export default GistDisplay;
