import React,{PropTypes} from 'react';

const Header = ({title}) => {
	return (
		<header className="">
			<h1>{title}</h1>
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.string.isRequired
  };

export default Header;