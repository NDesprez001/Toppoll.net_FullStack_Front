const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			polls: [
				{
					creator_user: "Curly-Fry",
					date_started: "Wed, 04 Mar 2020 16:40:04 GMT",
					id: 1,
					info_link: "",
					option1: "Naz",
					option2: "Anthony",
					option3: "Zion???",
					option4: "They're all overrated",
					percentages: {
						Anthony: 33.33333333333333,
						Naz: 33.33333333333333,
						"They're all overrated": 16.666666666666664,
						"Zion???": 16.666666666666664
					},
					poll_description:
						"Naz and Anthony both think themselves artists when it comes to web design, but we're gonna see who's the class favorite",
					poll_question: "Who would you want to do your front-end?",
					voting_users: [
						{
							id: 1,
							option_picked: "Naz",
							poll_id: 1,
							poll_name: "Who would you want to do your front-end?",
							user_id: 1,
							username: "kolis10"
						},
						{
							id: 2,
							option_picked: "Naz",
							poll_id: 1,
							poll_name: "Who would you want to do your front-end?",
							user_id: 2,
							username: "Naz"
						},
						{
							id: 3,
							option_picked: "Anthony",
							poll_id: 1,
							poll_name: "Who would you want to do your front-end?",
							user_id: 3,
							username: "Curly-Fry"
						},
						{
							id: 4,
							option_picked: "Zion???",
							poll_id: 1,
							poll_name: "Who would you want to do your front-end?",
							user_id: 4,
							username: "Coder"
						},
						{
							id: 5,
							option_picked: "They're all overrated",
							poll_id: 1,
							poll_name: "Who would you want to do your front-end?",
							user_id: 5,
							username: "Rager"
						},
						{
							id: 6,
							option_picked: "Anthony",
							poll_id: 1,
							poll_name: "Who would you want to do your front-end?",
							user_id: 6,
							username: "Tony"
						}
					]
				},
				{
					creator_user: "kolis10",
					date_started: "Wed, 04 Mar 2020 16:40:04 GMT",
					id: 2,
					info_link: "",
					option1: "Front-End",
					option2: "Back-End",
					option3: "I like them equally",
					option4: "I really don't care",
					percentages: {
						"Back-End": 16.666666666666664,
						"Front-End": 33.33333333333333,
						"I like them equally": 50,
						"I really don't care": 0
					},
					poll_description:
						"Since the beginning of this class we've been divided on whether or not coding a webpage's data is more enjoyable than building the layout of the page.",
					poll_question: "Which do you prefer; front-end or back-end?",
					voting_users: [
						{
							id: 7,
							option_picked: "Back-End",
							poll_id: 2,
							poll_name: "Which do you prefer; front-end or back-end?",
							user_id: 1,
							username: "kolis10"
						},
						{
							id: 8,
							option_picked: "I like them equally",
							poll_id: 2,
							poll_name: "Which do you prefer; front-end or back-end?",
							user_id: 2,
							username: "Naz"
						},
						{
							id: 9,
							option_picked: "Front-End",
							poll_id: 2,
							poll_name: "Which do you prefer; front-end or back-end?",
							user_id: 3,
							username: "Curly-Fry"
						},
						{
							id: 10,
							option_picked: "I like them equally",
							poll_id: 2,
							poll_name: "Which do you prefer; front-end or back-end?",
							user_id: 4,
							username: "Coder"
						},
						{
							id: 11,
							option_picked: "I like them equally",
							poll_id: 2,
							poll_name: "Which do you prefer; front-end or back-end?",
							user_id: 5,
							username: "Rager"
						},
						{
							id: 12,
							option_picked: "Front-End",
							poll_id: 2,
							poll_name: "Which do you prefer; front-end or back-end?",
							user_id: 6,
							username: "Tony"
						}
					]
				},
				{
					creator_user: "Naz",
					date_started: "Wed, 04 Mar 2020 16:40:04 GMT",
					id: 3,
					info_link: "",
					option1: "Evens are Better",
					option2: "Odds are Awesome",
					option3: "This is really dumb",
					option4: null,
					percentages: {
						"Evens are Better": 50,
						"Odds are Awesome": 16.666666666666664,
						"This is really dumb": 33.33333333333333
					},
					poll_description: "This is dumb",
					poll_question: "Are Even numbers better than Odd numbers?",
					voting_users: [
						{
							id: 13,
							option_picked: "This is really dumb",
							poll_id: 3,
							poll_name: "Are Even numbers better than Odd numbers?",
							user_id: 1,
							username: "kolis10"
						},
						{
							id: 14,
							option_picked: "Evens are Better",
							poll_id: 3,
							poll_name: "Are Even numbers better than Odd numbers?",
							user_id: 2,
							username: "Naz"
						},
						{
							id: 15,
							option_picked: "Evens are Better",
							poll_id: 3,
							poll_name: "Are Even numbers better than Odd numbers?",
							user_id: 3,
							username: "Curly-Fry"
						},
						{
							id: 16,
							option_picked: "Odds are Awesome",
							poll_id: 3,
							poll_name: "Are Even numbers better than Odd numbers?",
							user_id: 4,
							username: "Coder"
						},
						{
							id: 17,
							option_picked: "Evens are Better",
							poll_id: 3,
							poll_name: "Are Even numbers better than Odd numbers?",
							user_id: 5,
							username: "Rager"
						},
						{
							id: 18,
							option_picked: "This is really dumb",
							poll_id: 3,
							poll_name: "Are Even numbers better than Odd numbers?",
							user_id: 6,
							username: "Tony"
						}
					]
				},
				{
					creator_user: "Coder",
					date_started: "Wed, 04 Mar 2020 16:40:04 GMT",
					id: 4,
					info_link: "",
					option1: "Nah, let him spend time with his girl!",
					option2: "His future is important, get his ass in class",
					option3: "I forgot Zion was in this class",
					option4: null,
					percentages: {
						"His future is important, get his ass in class": 66.66666666666666,
						"I forgot Zion was in this class": 16.666666666666664,
						"Nah, let him spend time with his girl!": 16.666666666666664
					},
					poll_description: "Zion has ditched 3 days in a row, should we be concerned",
					poll_question: "Does Zion really need to come to class?",
					voting_users: [
						{
							id: 19,
							option_picked: "His future is important, get his ass in class",
							poll_id: 4,
							poll_name: "Does Zion really need to come to class?",
							user_id: 1,
							username: "kolis10"
						},
						{
							id: 20,
							option_picked: "His future is important, get his ass in class",
							poll_id: 4,
							poll_name: "Does Zion really need to come to class?",
							user_id: 2,
							username: "Naz"
						},
						{
							id: 21,
							option_picked: "His future is important, get his ass in class",
							poll_id: 4,
							poll_name: "Does Zion really need to come to class?",
							user_id: 3,
							username: "Curly-Fry"
						},
						{
							id: 22,
							option_picked: "Nah, let him spend time with his girl!",
							poll_id: 4,
							poll_name: "Does Zion really need to come to class?",
							user_id: 4,
							username: "Coder"
						},
						{
							id: 23,
							option_picked: "His future is important, get his ass in class",
							poll_id: 4,
							poll_name: "Does Zion really need to come to class?",
							user_id: 5,
							username: "Rager"
						},
						{
							id: 24,
							option_picked: "I forgot Zion was in this class",
							poll_id: 4,
							poll_name: "Does Zion really need to come to class?",
							user_id: 6,
							username: "Tony"
						}
					]
				},
				{
					creator_user: "Rager",
					date_started: "Wed, 04 Mar 2020 16:40:04 GMT",
					id: 5,
					info_link: "https://media1.giphy.com/media/PyZEkItObZrnW/giphy.gif",
					option1: "Millionaire",
					option2: "Billionaire",
					option3: "So rich they have to make up a new number for it",
					option4: "Middle Class at best",
					percentages: {
						Billionaire: 0,
						"Middle Class at best": 66.66666666666666,
						Millionaire: 16.666666666666664,
						"So rich they have to make up a new number for it": 16.666666666666664
					},
					poll_description: "We all know Raj is gonna make it big, the question is; how big?",
					poll_question: "How rich will Rajae be?",
					voting_users: [
						{
							id: 25,
							option_picked: "Middle Class at best",
							poll_id: 5,
							poll_name: "How rich will Rajae be?",
							user_id: 1,
							username: "kolis10"
						},
						{
							id: 26,
							option_picked: "Millionaire",
							poll_id: 5,
							poll_name: "How rich will Rajae be?",
							user_id: 2,
							username: "Naz"
						},
						{
							id: 27,
							option_picked: "Middle Class at best",
							poll_id: 5,
							poll_name: "How rich will Rajae be?",
							user_id: 3,
							username: "Curly-Fry"
						},
						{
							id: 28,
							option_picked: "Middle Class at best",
							poll_id: 5,
							poll_name: "How rich will Rajae be?",
							user_id: 4,
							username: "Coder"
						},
						{
							id: 29,
							option_picked: "So rich they have to make up a new number for it",
							poll_id: 5,
							poll_name: "How rich will Rajae be?",
							user_id: 5,
							username: "Rager"
						},
						{
							id: 30,
							option_picked: "Middle Class at best",
							poll_id: 5,
							poll_name: "How rich will Rajae be?",
							user_id: 6,
							username: "Tony"
						}
					]
				},
				{
					creator_user: "Tony",
					date_started: "Wed, 04 Mar 2020 16:40:04 GMT",
					id: 6,
					info_link: "",
					option1: "Yes",
					option2: "Nah",
					option3: "They make you look gay",
					option4: null,
					percentages: {
						Nah: 33.33333333333333,
						"They make you look gay": 33.33333333333333,
						Yes: 33.33333333333333
					},
					poll_description: "This is very important information?",
					poll_question: "Do these pants make Anthony's ass look big?",
					voting_users: [
						{
							id: 31,
							option_picked: "They make you look gay",
							poll_id: 6,
							poll_name: "Do these pants make Anthony's ass look big?",
							user_id: 1,
							username: "kolis10"
						},
						{
							id: 32,
							option_picked: "Nah",
							poll_id: 6,
							poll_name: "Do these pants make Anthony's ass look big?",
							user_id: 2,
							username: "Naz"
						},
						{
							id: 33,
							option_picked: "Yes",
							poll_id: 6,
							poll_name: "Do these pants make Anthony's ass look big?",
							user_id: 3,
							username: "Curly-Fry"
						},
						{
							id: 34,
							option_picked: "Nah",
							poll_id: 6,
							poll_name: "Do these pants make Anthony's ass look big?",
							user_id: 4,
							username: "Coder"
						},
						{
							id: 35,
							option_picked: "They make you look gay",
							poll_id: 6,
							poll_name: "Do these pants make Anthony's ass look big?",
							user_id: 5,
							username: "Rager"
						},
						{
							id: 36,
							option_picked: "Yes",
							poll_id: 6,
							poll_name: "Do these pants make Anthony's ass look big?",
							user_id: 6,
							username: "Tony"
						}
					]
				}
			],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
