import axios from "axios";

const request = (config: object) => {
	const instance = axios.create({
        baseURL:"127.0.0.1:8080/api",
		timeout: 1000
	});

	return instance(config);
};

export default request;