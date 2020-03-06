const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			polls: []
		},
		actions: {
			fetchSaveToStore: () => {
				fetch("https://3000-d74dd462-eefd-4f5e-ac59-8dbd53a34abb.ws-us02.gitpod.io/polls", {
					method: "GET",
					cache: "no-cache"
				})
					.then(resp => resp.json())
					.then(data => {
						setStore({ polls: data });
						console.log("polls", data);
					});
			}
		}
	};
};

export default getState;
