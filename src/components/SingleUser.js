import React, { Component, Fragment } from 'react';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from './Repos';

class SingleUser extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
	}

	static propTypes = {
		isLoading: PropTypes.bool.isRequired,
		user: PropTypes.object.isRequired,
        repos:PropTypes.array.isRequired,
		getUser: PropTypes.func.isRequired
	};

	render() {
		const {
			name,
			avatar_url,
			bio,
			location,
			followers,
			following,
			blog,
			public_repos,
			html_url,
			company,
            login
            
		} = this.props.user;

		const { isLoading,repos } = this.props;
		if (isLoading) return <Spinner />;

		return (
			<React.Fragment>
				<Link to="/" className="btn btn-light">
					Back to Home
				</Link>
				<div className="card grid-2">
					<div className="all-center">
						<img src={avatar_url} className="round-img" alt="" style={{ width: '150px' }} />
						<h1>{name}</h1>
						<p>Location: {location} </p>
					</div>
					<div>
						{bio && (
							<Fragment>
								<h3>Bio</h3>
								<p> {bio} </p>
							</Fragment>
						)}
						<a href={html_url} className="btn btn-dark my-1">
							Visit Github Profile
						</a>
						<ul>
							<li>
								{login && (
									<Fragment>
										<strong>UserName:</strong>
										{login}
									</Fragment>
								)}
							</li>
							<li>
								{company && (
									<Fragment>
										<strong>Company:</strong>
										{company}
									</Fragment>
								)}
							</li>
							<li>
								{blog && (
									<Fragment>
										<strong>Website:</strong>
										{blog}
									</Fragment>
								)}
							</li>
						</ul>
					</div>
				</div>
                <div className='card text-center'>
                    <div className='badge badge-primary'>Followers: {followers}</div>
                    <div className='badge badge-success'>following: {following}</div>
                    <div className='badge badge-light'>Public repors: {public_repos}</div>
                </div>
                <Repos repos={repos}/>
			</React.Fragment>
		);
	}
}

export default SingleUser;
