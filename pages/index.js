const Home = () => {
	try {
		return <div>Home</div>;
	} catch(e) {
		return <div>Error 404</div>;
		console.log(e);
	}

};

export default Home;
